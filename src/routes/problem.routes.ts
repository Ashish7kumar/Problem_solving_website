import express from 'express';
import * as problemController from '../controllers/poblem.controller.js';
const problemRouter=express.Router();
problemRouter.get('/:id',problemController.getProblem);
problemRouter.get('/',problemController.getProblems);
problemRouter.post('/',problemController.addProblem);
problemRouter.delete('/:id',problemController.deleteProblem);
problemRouter.patch('/:id',problemController.updateProblems);
export default problemRouter;