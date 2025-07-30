import express from 'express';
const app = express();
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './database/db.js';
import todoRouter from './routes/todos-routes.js';
dotenv.config();
const port = process.env.PORT;


app.use(express.json());
app.use(cors());

// our routes;
app.use('/api/v1', todoRouter);

app.get('/', (req, res) => {
    return res.status(200).json({
        success: true,
        msg: "api is working"
    })
});

// calling function which connects to database
connectDB();

app.listen(port, function() {
    console.log(`server is started on http://localhost:${port}`);
});