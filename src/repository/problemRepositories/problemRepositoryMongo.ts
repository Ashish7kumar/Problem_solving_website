import {PrismaClient}  from "../../../app/generated/client.js";
import Difficulty from "../../types/Difficulty.type.js";
import testCase from "../../types/testCase.type.js";
import schemaData from "../../types/schemaData.type.js";
import NotFound from "../../errors/notFound.error.js";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import ProblemType from "../../types/problem.type.js";
const problemModel=new PrismaClient();
export default class problemRepositoryMongo{
 
    async create(description:string,title:string,testCase:testCase[],difficulty:Difficulty=Difficulty.Easy){
        try{
        const data:schemaData={title:title,
            description:description,
            testCase:testCase,
            difficulty:difficulty
          }

            
            
         const problem=await problemModel.problemCollection.create(
            {data});
            return problem;}
            catch(e){
                console.log('error happened will creating a problem:',e);
                throw e;
            }
    }
    async deleteProblem(title:string){
        try{
            const deleted = await problemModel.problemCollection.delete({
                where: { title }
              });
       
        }
        catch(error)
        {  
            if (error instanceof PrismaClientKnownRequestError) {
              
                if (error.code === 'P2025') {
                 
                  throw new NotFound(title);
                } else {
                  console.log("Prisma error occurred:", error);
                  throw error;
                }
              } else {
              
                console.log("An unexpected error occurred:", error);
                throw error;
              }
            
        }
        
    }
    async getProblem(title: string) {
      try {
        const problem = await problemModel.problemCollection.findFirst({
          where: { title }
        });
    
        if (!problem) {
          console.log(32323);
          throw new NotFound(title);
        }
    
        return problem; 
      } catch (error) {
        if (error instanceof PrismaClientKnownRequestError) {
          console.log("Prisma error occurred:", error);
          throw error;
        } else {
          console.log("An unexpected error occurred:", error);
          throw error;
        }
      }
    }
    async getAllProblems()
    {
      try{
        const problems=await problemModel.problemCollection.findMany({});
        return problems;
      }
      catch(error)
      {
          throw error;
      }
    }
    async updateProblemfromTitle(data:ProblemType,title:string)
    {
      try{
         const updatedProblem=await problemModel.problemCollection.update({
          where:{title},
          data: data
       } );
      }
      catch(error)
      {
        if (error instanceof PrismaClientKnownRequestError) {
              
          if (error.code === 'P2025') {
           
            throw new NotFound(title);
          } else {
            console.log("Prisma error occurred:", error);
            throw error;
          }
        } else {
        
          console.log("An unexpected error occurred:", error);
          throw error;
        }
      }
    }
    

};
