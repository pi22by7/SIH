import torch
import torch.nn as nn
import torchvision.models as models
import cv2
import numpy as np

# Define U-Net with ResNet34 Encoder
class ResNetUNet(nn.Module):
    def __init__(self, n_class):
        super().__init__()

        # Use the pretrained ResNet34 model
        self.base_model = models.resnet34(pretrained=True)

        # Encoder layers
        self.encoder0 = nn.Sequential(
            self.base_model.conv1,
            self.base_model.bn1,
            self.base_model.relu,
            self.base_model.maxpool
        )
        self.encoder1 = self.base_model.layer1
        self.encoder2 = self.base_model.layer2
        self.encoder3 = self.base_model.layer3
        self.encoder4 = self.base_model.layer4

        # Decoder layers
        self.decoder4 = nn.ConvTranspose2d(512, 256, kernel_size=2, stride=2)
        self.decoder3 = nn.ConvTranspose2d(256, 128, kernel_size=2, stride=2)
        self.decoder2 = nn.ConvTranspose2d(128, 64, kernel_size=2, stride=2)
        self.decoder1 = nn.ConvTranspose2d(64, 32, kernel_size=2, stride=2)
        
        self.decoder0 = nn.Conv2d(32, n_class, kernel_size=1)

    def forward(self, x):
        # Encoder
        x0 = self.encoder0(x)
        x1 = self.encoder1(x0)
        x2 = self.encoder2(x1)
        x3 = self.encoder3(x2)
        x4 = self.encoder4(x3)
        
        # Decoder
        d4 = self.decoder4(x4) + x3
        d3 = self.decoder3(d4) + x2
        d2 = self.decoder2(d3) + x1
        d1 = self.decoder1(d2) + x0
        
        out = self.decoder0(d1)
        return torch.sigmoid(out)

def segment_and_count_trees(model, image_path):
    # Load and preprocess the image
    image = cv2.imread(image_path, cv2.IMREAD_COLOR)
    image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
    input_tensor = torch.tensor(image, dtype=torch.float32).permute(2, 0, 1).unsqueeze(0) / 255.0

    # Get the segmentation mask from the model
    with torch.no_grad():
        output = model(input_tensor).squeeze().cpu().numpy()
    
    # Threshold the output to get a binary mask
    binary_mask = (output > 0.5).astype(np.uint8)

    # Find contours
    contours, _ = cv2.findContours(binary_mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

    # Count trees
    tree_count = len(contours)
    return tree_count

from torch.utils.data import Dataset, DataLoader
from torchvision import transforms

class TreeDataset(Dataset):
    def __init__(self, image_paths, mask_paths, transform=None):
        self.image_paths = image_paths
        self.mask_paths = mask_paths
        self.transform = transform

    def __len__(self):
        return len(self.image_paths)

    def __getitem__(self, idx):
        image = cv2.imread(self.image_paths[idx], cv2.IMREAD_COLOR)
        image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB) / 255.0
        
        mask = cv2.imread(self.mask_paths[idx], cv2.IMREAD_GRAYSCALE) / 255.0
        
        sample = {'image': image, 'mask': mask}
        
        if self.transform:
            sample = self.transform(sample)

        return sample

class ToTensor(object):
    def __call__(self, sample):
        image, mask = sample['image'], sample['mask']
        
        image = torch.tensor(image, dtype=torch.float32).permute(2, 0, 1)
        mask = torch.tensor(mask, dtype=torch.float32).unsqueeze(0)
        
        return {'image': image, 'mask': mask}

# Create datasets and dataloaders
train_dataset = TreeDataset(train_image_paths, train_mask_paths, transform=transforms.Compose([ToTensor()]))
train_loader = DataLoader(train_dataset, batch_size=8, shuffle=True, num_workers=4)

device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')

model = ResNetUNet(n_class=1).to(device)
criterion = nn.BCELoss()
optimizer = torch.optim.Adam(model.parameters(), lr=0.001)

num_epochs = 10  # Change this as per your need

for epoch in range(num_epochs):
    model.train()
    epoch_loss = 0
    
    for batch in train_loader:
        images = batch['image'].to(device)
        masks = batch['mask'].to(device)
        
        optimizer.zero_grad()
        
        outputs = model(images)
        loss = criterion(outputs, masks)
        
        loss.backward()
        optimizer.step()
        
        epoch_loss += loss.item()
        
    print(f"Epoch {epoch+1}/{num_epochs}, Loss: {epoch_loss/len(train_loader)}")


# Load a trained model (you'd have your trained weights)
model = ResNetUNet(n_class=1)
model.load_state_dict(torch.load('path_to_weights.pth'))
model.eval()

# Count trees in an image
count = segment_and_count_trees(model, 'path_to_image.jpg')
print(f'Number of trees: {count}')
