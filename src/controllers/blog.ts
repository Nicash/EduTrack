import { Request, Response } from "express";
import dbConnect from "../config/mongo";
import { handleHttp } from "../utils/error.handle";

const getItem = (req: Request, res: Response) => {
    try {
    } catch (e) {
        handleHttp(res, 'ERROR_GET_BLOG');    
    }
};

const getItems = (req: Request, res: Response) => {
  try {
    } catch (e) {
        handleHttp(res, 'ERROR_GET_BLOGS');    
    }
};

const updateItem = (req: Request, res: Response) => {
    try {
    } catch (e) {
        handleHttp(res, 'ERROR_UPDATE_BLOG');    
    }
};

const postItem = ({body}: Request, res: Response) => {
    try {
        res.send(body);
    } catch (e) {
        handleHttp(res, 'ERROR_POST__BLO');    
    }
};
const deleteItem = (req: Request, res: Response) => {
    try {
    } catch (e) {
        handleHttp(res, 'ERROR_DELETE__BLO');    
    }
};

export { getItem, getItems, updateItem, postItem, deleteItem };