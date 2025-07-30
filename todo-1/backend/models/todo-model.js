import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    status: {type: String, enum: ['Pending', 'Completed'], default: 'Pending'}
}, {timestamps: true});

const todoModel = mongoose.model("todo", todoSchema);
export default todoModel;