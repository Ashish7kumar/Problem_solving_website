import express from 'express';
import problemRouter from './problem.routes.js';
const apiRouter=express.Router();
apiRouter.use('/problems',problemRouter);
export  default apiRouter;