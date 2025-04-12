import express, { Request,Response,NextFunction, ErrorRequestHandler} from "express";
import BaseError from "../errors/baseError.error.js";
export default function errorHandlerMiddleware(err:Error | BaseError,req:Request,res:Response,next:NextFunction):void

{
     if(err instanceof BaseError)
     {
      res.status(err.statusCode).json({
            name:err.name,
             success:false,
             error:err.details,
             data:{}
        })
     }
     else{
         res.status(500).json({
            name:'Some Server Error',
            success:false,
            error:err,
            data:{}
        })
     }
    
}