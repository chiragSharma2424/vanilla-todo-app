import express from 'express';
import { deleteTodo, getAllTodos, postTodo } from '../controllers/todo-controller.js';
const todoRouter = express.Router();

todoRouter.post('/todos', postTodo);
todoRouter.get('/todos', getAllTodos);
todoRouter.delete('/todos/:id', deleteTodo);

export default todoRouter;