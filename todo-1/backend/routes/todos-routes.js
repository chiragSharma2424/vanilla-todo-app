import express from 'express';
import { getAllTodos, postTodo } from '../controllers/todo-controller.js';
const todoRouter = express.Router();

todoRouter.post('/todos', postTodo);
todoRouter.get('/todos', getAllTodos);

export default todoRouter;