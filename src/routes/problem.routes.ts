import express from 'express';
import * as problemController from '../controllers/poblem.controller';
const problemRouter=express.Router();
problemRouter.get('/:id',problemController.getProblem);
problemRouter.post('/',problemController.addProblem);
problemRouter.delete('/:id',problemController.deleteProblems);
problemRouter.put('/:id',problemController.updateProblems);
export default problemRouter;