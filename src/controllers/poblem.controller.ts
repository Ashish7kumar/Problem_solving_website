import NotImplemented from "../errors/notImplemented.error.js";
import express, { Request,Response,NextFunction } from "express";
import { problemService} from "../service/problem.service.js";
import problemRepositoryMongo from "../repository/problemRepositories/problemRepositoryMongo.js";
import { error } from "console";
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
export async function getProblem(req:Request,res:Response,next:NextFunction):Promise<void>{
  try{
    const title=req.params.title;
    const problem=await ProblemService.getProblem(req);
    res.status(200).json(
      {
        message:"Problem Extracted Successfully",
        success:true,
        data:problem,
        error:{}
      }
    )
    return ;
   }
   catch(error)
   {
     next(error);
   }
};
export async function getProblems(req:Request,res:Response,next:NextFunction):Promise<void>
{
  try{
    const problems=await ProblemService.getAllProblem();
    res.status(200).json({
      message:"All problem are extracted",
      success:true,
      data:problems,
      error:{}
    });
    return ;
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
export async function updateProblems(req:Request,res:Response,next:NextFunction):Promise<void>{
  try{
     const updatedProblem=await ProblemService.updateProblem(req);
     res.status(200).json({
      message:`${req.params.id} is updated successfully`,
      success:true,
      error:{}
     })
   }
   catch(error)
   {
     next(error);
   }
}