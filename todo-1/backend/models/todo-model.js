import mongoose from "mongoose";

const todoModel = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    status: {type: String, enum: ['Pending', 'Completed'], default: 'Pending'}
}, {timestamps: true});

export default todoModel;