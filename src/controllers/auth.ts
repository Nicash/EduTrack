// Librerías externas
import { Request, Response } from "express";

// Módulos locales
import { registerNewUser, loginUser } from "../services/auth";
import { handleHttp } from "../utils/error.handle";

const registerCtrl = async ({body}: Request, res: Response) => {
    try {
        const { email, password, name } = body;
        
        // Validación de campos requeridos
        if (!email || !password || !name) {
            return res.status(400).json({ error: "Email, password and name are required" });
        }
        
        const responseUser = await registerNewUser(body);
        
        if (responseUser === "ALREADY_USER") {
            return res.status(409).json({ error: "User already exists" });
        }
        
        res.status(201).json({ message: "User created successfully", user: responseUser });
    } catch (error) {
        handleHttp(res, "ERROR_REGISTER_USER", error);
    }
};

const loginCtrl = async ({body}: Request, res: Response) => {
    try {
        const {email, password} = body;
        
        // Validación de campos requeridos
        if (!email || !password) {
            return res.status(400).json({ error: "Email and password are required" });
        }
        
        const responseUser = await loginUser({email, password});

        if (responseUser === "PASSWORD_INCORRECT") {
            return res.status(403).json({ error: "Incorrect password" });
        }
        
        if (responseUser === "NOT_FOUND_USER") {
            return res.status(404).json({ error: "User not found" });
        }

        res.status(200).json({ message: "Login successful", data: responseUser });
    } catch (error) {
        handleHttp(res, "ERROR_LOGIN_USER", error);
    }
};

export { registerCtrl, loginCtrl };