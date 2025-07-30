import express from 'express';
import { postTodo } from '../controllers/todo-controller.js';
const todoRouter = express.Router();

todoRouter.post('/todos', postTodo);

export default todoRouter;