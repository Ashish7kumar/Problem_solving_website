import NotImplemented from "../errors/notImplemented.error.js";
import express, { Request,Response,NextFunction } from "express";
import { problemService} from "../service/problem.service.js";
import problemRepositoryMongo from "../repository/problemRepositories/problemRepositoryMongo.js";
const ProblemService=new problemService(new problemRepositoryMongo);
export  async function addProblem(req: Request, res: Response,next:NextFunction):Promise<void>{
  try{
   const problem=await ProblemService.createProblem(req);
   res.status(200).json({
    message:"Succesfully created problem",
    success:true,
    data:problem,
    error:{}
   });
   return;
  }
  catch(error)
  {
    next(error);
  }
  };
export function getProblem(req:Request,res:Response,next:NextFunction):void{
  try{
    throw new NotImplemented('get-problem');
   }
   catch(error)
   {
     next(error);
   }
};
export function getProblems(req:Request,res:Response,next:NextFunction):void
{
  try{
    throw new NotImplemented('get-problems');
   }
   catch(error)
   {
     next(error);
   }
};
export async function deleteProblem(req:Request,res:Response,next:NextFunction):Promise<void>{
  try{
      const deletedProblem=await ProblemService.deleteProblemByTitle(req);
      res.status(200).json({
        message:"Succesfully deleted problem",
        success:true,
        data:deleteProblem,
        error:{}
       });
   }
   catch(error)
   {
     next(error);
   }
};
export function updateProblems(req:Request,res:Response,next:NextFunction):void{
  try{
    throw new NotImplemented('update-problem');
   }
   catch(error)
   {
     next(error);
   }
}