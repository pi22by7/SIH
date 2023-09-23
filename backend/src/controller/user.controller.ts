import {Request, Response} from "express";
import logger from "../utils/logger";
import {CreateUserInput} from "../schema/user.schema";
import {createUser} from "../service/user.service";

export async function createUserHandler(req: Request<{}, {}, CreateUserInput["body"]>, res: Response) {
    try {
        const user = await createUser(req.body);
        return res.send(user);
    } catch (e: any) {
        logger.error(e);
        return res.status(400).send(e.message);
    }
};