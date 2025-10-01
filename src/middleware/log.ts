import { NextFunction, Request, Response } from "express";

const LogMiddleware = (req: Request, res: Response, next: NextFunction) => {

    const header = req.headers; //Obtiene los encabezados de la peticion
    const userAgent = header["user-agent"]; //Extrae el encabezado user-agent (tipo de usuario)
    console.log("user-agent", userAgent); 
    next();
};

export { LogMiddleware };