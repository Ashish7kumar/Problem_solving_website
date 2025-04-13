import { Difficulty } from "@prisma/client";
import testCase from "./testCase.type.js";

type schemaData = {
    title: string;
    description: string;
    testCase: testCase[];
    difficulty?: Difficulty;
};

export default schemaData;