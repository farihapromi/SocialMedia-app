import express from 'express';
import { createUser } from '../controllers/userController.js';
import multer from 'multer';

const userRouter = express.Router();
// Setup multer for file upload handling
const upload = multer({ dest: 'uploads/' });

userRouter.post('/users', createUser);
export default userRouter;
