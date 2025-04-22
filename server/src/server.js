import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
const port = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();
connectDB();
app.listen(port, () => console.log(`Server running on port  ${port} `));
