import React from "react";
import HowItWorksItem from "@/components/HowItWorksItem";
import Bounce from "../../Motion/Bounce";

const HowItWorks = () => {
    const Steps = [
        {
            label: `Image Acquisition`,
            description: `Upload a high-resolution satellite image of the area you want to analyze`,
        },
        {
            label: `Preprocessing`,
            description: `Enhance, clean, and correct the image for better analysis`,

        },
        {
            label: `Segmentation`,
            description: `Separate objects in the image and isolate vegetation`,

        },
        {
            label: `Feature Extraction`,
            description: `Identify tree features like color, texture, and shape`,

        },
        {
            label: `Classification`,
            description: `Use machine learning to classify objects as trees or non-trees.`,

        },
        {
            label: `Post-processing`,
            description: `Refines results by removing noise and merging adjacent trees.`,

        },
        {
            label: `Counting Trees`,
            description: 'Determine the total number of trees in the image.',
        },
        {
            label: `Accuracy Assessment`,
            description: 'Determine the accuracy of the model.',
        }
    ]

    return (
        <div className={`overflow-hidden  flex flex-col gap-10 max-w-contentContainer `}>
            {/*<Bounce>*/}
            <h1 className={`text-6xl text-green-500 font-bold  dark:text-black `}>How it works?</h1>
            {/*</Bounce>*/}
            <div className={`flex flex-wrap gap-5`}>
                {Steps.map((step, index) => (
                    <Bounce key={''} whileHoverCustom={1.2}>
                        <HowItWorksItem key={''} label={step.label} description={step.description}/>
                    </Bounce>
                ))}
                {/*<Bounce whileHoverCustom={1.2}>*/}
                {/*    <HowItWorksItem label={`Image Acquisition`}/>*/}
                {/*</Bounce>*/}
                {/*<HowItWorksItem label={`Preprocessing`}/>*/}
                {/*<HowItWorksItem label={`Segmentation`}/>*/}
                {/*<HowItWorksItem label={`Feature Extraction`}/>*/}
                {/*<HowItWorksItem label={`Classification`}/>*/}
                {/*<HowItWorksItem label={`Post-processing`}/>*/}
            </div>
        </div>
    )
}
export default HowItWorks
