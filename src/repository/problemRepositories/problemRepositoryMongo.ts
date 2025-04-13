import {Prisma,PrismaClient}  from "@prisma/client";
import { Difficulty } from "../../generated/prisma/index.js";
import testCase from "../../types/testCase.type.js";
import schemaData from "../../types/schemaData.type.js";
import NotFound from "../../errors/notFound.error.js";
import { compileFunction } from "vm";
import ProblemType from "../../types/problem.type.js";
const problemModel=new PrismaClient();
export default class problemRepositoryMongo{
    async create(description:string,title:string,testCase:testCase[],difficulty?:Difficulty){
        try{
        const data:schemaData={title:title,
            description:description,
            testCase:testCase}
            if(difficulty)
            {
                data.difficulty=difficulty;
            }
            
         const problem=await problemModel.problemSchema.create(
            {data});
            return problem;}
            catch(e){
                console.log('error happened will creating a problem:',e);
                throw e;
            }
    }
    async deleteProblem(title:string){
        try{
            const deleted = await problemModel.problemSchema.delete({
                where: { title }
              });
       
        }
        catch(error)
        {  
            if (error instanceof Prisma.PrismaClientKnownRequestError) {
              
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
        const problem = await problemModel.problemSchema.findFirst({
          where: { title }
        });
    
        if (!problem) {
          console.log(32323);
          throw new NotFound(title);
        }
    
        return problem; 
      } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
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
        const problems=await problemModel.problemSchema.findMany({});
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
         const updatedProblem=await problemModel.problemSchema.update({
          where:{title},
          data: data
       } );
      }
      catch(error)
      {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
              
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
