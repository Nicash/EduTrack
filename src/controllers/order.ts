import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { RequestExt } from "../interfaces/requestExt.interface";

const getItems = (req: RequestExt, res: Response) => {
    try {
        res.send({
            data: "ESTO SOLO LO VEN LAS PERSONAS CON SESION / JWT",
            user: req.user,
        });
    } catch (e) {
        handleHttp(res, 'ERROR_GET_ITEMS');    
    }
};

export { getItems };