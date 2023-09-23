import 'dotenv/config';
import express from 'express';
import config from 'config';
import cors from 'cors';

// Custom imports
import logger from "./utils/logger";
import routes from "./routes";

// Middlewares
const app = express();
app.use(express.json());
app.use(cors());

// Env variables
const PORT = config.get<number>('port');

// Routes
app.get('/', (_, res) => res.status(200).send("OK"));

app.listen(PORT, () => {
    logger.info(`Server Online @ http://localhost:${PORT}`);
    routes(app);
});
