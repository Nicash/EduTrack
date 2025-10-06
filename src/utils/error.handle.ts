// Librerías externas
import { Response } from "express";

// Manejador de errores
const handleHttp = (res: Response, error: string, errorRaw?: any) => {
    console.log(errorRaw);
    res.status(500).json({ error });
};

export { handleHttp };