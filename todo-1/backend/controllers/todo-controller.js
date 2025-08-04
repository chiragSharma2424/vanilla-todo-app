import dotenv from 'dotenv';
import todoModel from '../models/todo-model.js';
dotenv.config();

const postTodo = async (req, res) => {
    try {
        const { title, description } = req.body;
        
        if(!title || !description) {
            return res.status(400).json({
                success: false,
                msg: "title and description are required"
            })
        }

        const newTodo = await todoModel.create({
            title: title,
            description: description
        });

        return res.status(200).json({
            success: true,
            msg: "todo created successfully",
            todo: newTodo
        });

    } catch(err) {
        console.log(`error in postodo controller ${err}`);
        return res.status(500).json({
            success: false,
            msg: "internal server error"
        })
    }
}

const getAllTodos = async (req, res) => {
    try {
        const allTodos = await todoModel.find();
        return res.status(200).json({
            success: true,
            todos: allTodos
        })
    } catch(err) {
        console.log(`error in get controller ${err}`);
        return res.status(500).json({
            success: false,
            msg: "internal server"
        })
    }
}

const deleteTodo = async(req, res) => {
    try {
        const {id} = req.params;
        const deleteTodo = await todoModel.findByIdAndDelete(id);

        if(!deleteTodo) {
            return res.status(400).json({
                success: false,
                msg: "TODO not found"
            });
        } 

        return res.status(200).json({
            success: true,
            msg: "Todo deleted",
            deleteTodo
        });
    }  catch (err) {
        console.error("Error in delete controller:", err.message);  // Log only message
        return res.status(500).json({  
            success: false,
            msg: "Internal server error"
        });
    }
}


export { postTodo, getAllTodos, deleteTodo }