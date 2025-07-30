import dotenv from 'dotenv';
import todoModel from '../models/todo-model.js';
dotenv.config();

const postTodo = async (req, res) => {
    try {

    } catch(err) {
        console.log(`error in postodo controller ${err}`);
        return res.status(500).json({
            success: false,
            msg: "internal server error"
        })
    }
}


export { postTodo }