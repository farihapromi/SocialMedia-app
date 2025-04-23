// routes/userRoutes.js
import express from 'express';
import uploads from '../middleware/uploadMiddleware.js';
import { createUser, getUser } from '../controllers/userController.js';

const userRoute = express.Router();

userRoute.post('/users', createUser);
userRoute.get('/users', getUser);
userRoute.put('/user/:id');

export default userRoute;
