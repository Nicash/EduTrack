// Módulos locales
import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import UserModel from "../models/user";
import { encrypt, verified } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handle";

// Servicio para registrar nuevo usuario
const registerNewUser = async ({email, password, name}: User) => {
    const checkIs = await UserModel.findOne({email}); // Verifica si ya existe el usuario (email único)
    if (checkIs) return "ALREADY_USER"; // Si el usuario ya existe se notifica

    const passHash = await encrypt(password); // Crea la password encriptada con Hash
    const registerNewUser = await UserModel.create({email, password: passHash, name}); // Crea el nuevo usuario

    return registerNewUser;
};

// Servicio para autentificar a un usuario que quiere iniciar sesión
const loginUser = async ({email, password}: Auth) => {
    const checkIs = await UserModel.findOne({email}); // Busca al usuario por su email
    if (!checkIs) return "NOT_FOUND_USER"; // Si el usuario no existe se notifica

    const passwordHash = checkIs.password;
    const isCorrect = await verified(password, passwordHash); // Compara el password con su versión encriptada

    if(!isCorrect) return "PASSWORD_INCORRECT"; // Notifica si la contraseña es incorrecta

    // Si es correcta se genera un token JWT para autentificar al usuario sin necesidad de volver a iniciar sesión en el futuro
    const token = generateToken(checkIs.email);

    const data = {
        token,
        user: checkIs
    };

    return data;
};

export { registerNewUser, loginUser };