import problemRepositoryMongo from "../repository/problemRepositories/problemRepositoryMongo.js";
import { Request } from "express";
import testCase from "../types/testCase.type.js";
import Difficulty from "../types/Difficulty.type.js";
import { profileEnd } from "console";
import ProblemType from "../types/problem.type.js";

export class problemService{
    private repository:problemRepositoryMongo;
    constructor(repository:problemRepositoryMongo)
    {
       this.repository=repository;
    }
    async createProblem(req:Request) {
        const title:string=req.body.title;
        const description:string=req.body.description;
        const testCase:testCase[]=req.body.testCase;
        const difficulty:Difficulty|undefined=req.body.difficulty;
        const problem=await this.repository.create(description,title,testCase,difficulty);
        return problem;

    }
    async getProblem(req:Request)
    {
        const title=req.params.id;
        const problem=await this.repository.getProblem(title);
        return problem;
    }
    async getAllProblem()
    {
        const problems=await this.repository.getAllProblems();
        return problems;
    }
    async deleteProblemByTitle(req:Request)
    { 
       const title=req.params.id;
       const deletedProblem=await this.repository.deleteProblem(title);
       return deletedProblem;
    }
    async updateProblem(req:Request)
    {
        const title=req.params.id;
        const data:ProblemType={};
        if(req.body.description)
        {
            data.description=req.body.description;
        }
        if(req.body.difficulty)
        {
            data.difficulty=req.body.difficulty;
        }
        if(req.body.testCase)
        {
            data.testCase=req.body.testCase;
        }
      const updatedProblem=await this.repository.updateProblemfromTitle(data,title);
    return updatedProblem;
    }
}