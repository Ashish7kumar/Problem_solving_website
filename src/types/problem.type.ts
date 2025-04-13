import { Difficulty } from "@prisma/client";
import testCase from "./testCase.type.js";

type ProblemType = {
    description?: string;
    testCase?: testCase[];
    difficulty?: Difficulty;
};

export default ProblemType;