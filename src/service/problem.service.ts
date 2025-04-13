import problemRepositoryMongo from "../repository/problemRepositories/problemRepositoryMongo.js";
import { Request } from "express";
import testCase from "../types/testCase.type.js";
import { Difficulty } from "@prisma/client";
import { profileEnd } from "console";

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
}