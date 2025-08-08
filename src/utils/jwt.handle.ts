import { sign, verify } from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET || "token.01010101";

//Genera el token JWT
//El JWT sirve para la autenticacion y autorizacion en aplicaciones wen y APIs
const generateToken = (id: string) => {

    const jwt = sign({id}, JWT_SECRET);
    return jwt;
};

//Verifica el token JWT
//Sirve para verificar el token del cliente
const verifyToken = (jwt: string) => {
    
    const isOk = verify(jwt, JWT_SECRET);
    return isOk;
};

export { generateToken, verifyToken };