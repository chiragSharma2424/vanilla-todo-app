import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();

export const connectDB = () => {
    mongoose.connect(`${process.env.MONGO_URL}/todos`).then(() => {
        console.log("database atlas connected");
    }).catch((err) => {
        console.log(`error in database connection ${err}`);
    })
}