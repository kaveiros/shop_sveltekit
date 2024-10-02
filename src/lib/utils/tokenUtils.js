import jwt from "jsonwebtoken";
import {JWT_SECRET} from "$env/static/private";

export const decodeToken = (token) => {
    return jwt.verify(token, JWT_SECRET, null);
}