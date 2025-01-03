import NotImplemented from "../errors/notImplemented.error";
import express, { Request,Response,NextFunction } from "express";


export function addProblem(req: Request, res: Response,next:NextFunction):void{
  try{
   throw new NotImplemented('add-problem');
  }
  catch(error)
  {
    next(error);
  }
  };
export function getProblem(req:Request,res:Response,next:NextFunction):void{
  try{
    throw new NotImplemented('add-problem');
   }
   catch(error)
   {
     next(error);
   }
};
export function getProblems(req:Request,res:Response,next:NextFunction):void
{
  try{
    throw new NotImplemented('add-problem');
   }
   catch(error)
   {
     next(error);
   }
};
export function deleteProblems(req:Request,res:Response,next:NextFunction):void{
  try{
    throw new NotImplemented('add-problem');
   }
   catch(error)
   {
     next(error);
   }
};
export function updateProblems(req:Request,res:Response,next:NextFunction):void{
  try{
    throw new NotImplemented('add-problem');
   }
   catch(error)
   {
     next(error);
   }
}