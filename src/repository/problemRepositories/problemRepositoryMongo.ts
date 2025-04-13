import {PrismaClient}  from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { Difficulty } from "../../generated/prisma/index.js";
import testCase from "../../types/testCase.type.js";
import schemaData from "../../types/schemaData.type.js";
import NotFound from "../../errors/notFound.error.js";
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
