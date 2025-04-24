import express from 'express';
import uploads from '../middleware/uploadMiddleware.js';
import {
  createUser,
  deleteUser,
  getUser,
  updateUser,
} from '../controllers/userController.js';

const userRoute = express.Router();

userRoute.post('/', createUser);
userRoute.get('/', getUser);
userRoute.put('/:id', uploads.single('avatarFile'), updateUser);
userRoute.delete('/:id', deleteUser);

export default userRoute;
