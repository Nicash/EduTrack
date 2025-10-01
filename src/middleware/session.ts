import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt.handle";
import { RequestExt } from "../interfaces/requestExt.interface";

//
const checkJwt = (req: RequestExt, res: Response, next: NextFunction) => {
    try {

        //Obtener token del header de la autorizacion
        const jwtByUser = req.headers.authorization || "";

        //Nos quedamos con el payload
        const jwt = jwtByUser.split(" ").pop();

        //Verifica si el token es valido
        const isUser = verifyToken(`${jwt}`);
        console.log(isUser);

        //Si el usuario no es valido devuelve 401 (no autorizado)
        if (!isUser) {

            res.status(401);
            res.send("NO_TIENES_UN_JWT_VALIDO");

        } else {

            req.user = isUser; //Si es valido, guarda la info del usuario
            next();
        }

    } catch (e) {

        //Manejo de errores
        console.log(e);
        res.status(400);
        res.send("SESSION_NO_VALIDAD");
    }
};

export { checkJwt };