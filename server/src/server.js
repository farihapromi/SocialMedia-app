import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import configureRouter from './routes/index.js';
import multer from 'multer';
import path from 'path';

// Load environment variables first
dotenv.config();

const port = process.env.PORT || 5000;

const app = express();

// Middleware to enable CORS and JSON parsing
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));
app.use((req, res, next) => {
  console.log(`Request received: ${req.method} ${req.originalUrl}`);
  next(); // Move to the next middleware/route handler
});

app.use('/uploads', express.static('uploads'));

// Connect to the database
connectDB();

// Configure routes
configureRouter(app);

app.listen(port, () => console.log(`Server running on port ${port}`));
