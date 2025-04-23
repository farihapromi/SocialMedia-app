// routes/userRoutes.js
import express from 'express';
import uploads from '../middleware/uploadMiddleware.js';
import { createUser } from '../controllers/userController.js';

const router = express.Router();

router.post('/users', createUser);

export default router;
