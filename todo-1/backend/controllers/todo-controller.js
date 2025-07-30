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


export { postTodo }