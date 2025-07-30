import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors({ credentials: true }));

app.get('/', (req, res) => {
    return res.status(200).json({
        success: true,
        msg: "api is working"
    })
});

app.listen(port, function() {
    console.log(`server is started on http://localhost:${port}`);
});