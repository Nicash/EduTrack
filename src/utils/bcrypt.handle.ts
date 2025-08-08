//hash es una funcion que permite generar una version cifrada de un password
//compare es una funcion que compara un password en texto plano con un hash para verificar si coinciden
import { hash, compare } from "bcryptjs";

//encrypt recibe un password y la devuelve encryptada
const encrypt = async (pass: string) => {

    const passwordHash = await hash(pass, 8); //Crea la password encryptada
    return passwordHash;
};

//verified compara la password con su version encryptada para verificar si coinciden
const verified = async (pass: string, passHash: string) => {

    const isCorrect = await compare(pass, passHash); //Compara ambas passwords
    return isCorrect;
};

export { encrypt, verified };