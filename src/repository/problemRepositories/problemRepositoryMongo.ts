import {PrismaClient}  from "@prisma/client";
import { Difficulty } from "../../generated/prisma/index.js";
import testCase from "../../types/testCase.type.js";
import schemaData from "../../types/schemaData.type.js";
import { cachedDataVersionTag } from "v8";
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

};
