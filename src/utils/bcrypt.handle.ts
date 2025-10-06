// Hash es una función que permite generar una versión cifrada de una password
// Compare es una función que compara una password en texto plano con un hash para verificar si coinciden

// Librerías externas
import { hash, compare } from "bcryptjs";

// Encrypt recibe una password y la devuelve encriptada
const encrypt = async (pass: string) => {
    const passwordHash = await hash(pass, 8); // Crea la password encriptada
    return passwordHash;
};

// Verified compara la password con su versión encriptada para verificar si coinciden
const verified = async (pass: string, passHash: string) => {
    const isCorrect = await compare(pass, passHash); // Compara ambas passwords
    return isCorrect;
};

export { encrypt, verified };