// Librerías externas
import { sign, verify } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "edutrack_fallback_secret_key";

// Genera el token JWT
// El JWT sirve para la autenticación y autorización en aplicaciones web y APIs
const generateToken = (id: string) => {
    const jwt = sign({id}, JWT_SECRET);
    return jwt;
};

// Verifica el token JWT
// Sirve para verificar el token del cliente
const verifyToken = (jwt: string) => {
    const isOk = verify(jwt, JWT_SECRET);
    return isOk;
};

export { generateToken, verifyToken };