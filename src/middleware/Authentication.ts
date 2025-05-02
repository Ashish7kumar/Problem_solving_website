import { Request,Response,NextFunction } from "express";
// import AuthenticationRequest from "../types/Authentication.type.js";
import jwt from 'jsonwebtoken'

function authentication(req:Request,res:Response,next:NextFunction): void
{
    const header=req.headers['authorization'];
    if (!header) {
        res.status(401).json({ message: 'Authorization header missing' });
        return ;
     }
     const token = header.split(' ')[1];
     if(!token){
        res.status(401).json({ message: 'Token missing in header' });
        return;
     }
     const secretKey = process.env.JWT_SECRET;
     const decoded  = jwt.verify(token, secretKey as string);
     if (typeof decoded === 'object' && 'role' in decoded) {
        if (decoded.role === "ADMIN") {
            (req as any).user = decoded;

            next();
        } else {
            res.status(403).json({ message: 'Forbidden: Admins only' });
        }
    } else {
        res.status(401).json({ message: 'Invalid token structure' });
    }

     
}
export default authentication;