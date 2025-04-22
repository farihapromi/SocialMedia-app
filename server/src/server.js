import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import configureRouter from './routes/index.js';
import multer from 'multer';

// Load environment variables first
dotenv.config();
console.log(process.env.CLOUDINARY_API_KEY); // Verify if the API key is being loaded correctly

const port = process.env.PORT || 5000;

const app = express();

// Middleware to enable CORS and JSON parsing
app.use(cors());
app.use(express.json());

// Connect to the database
connectDB();

// Configure routes
configureRouter(app);
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => console.log(`Server running on port ${port}`));
