import express from 'express';
import uploads from '../middleware/uploadMiddleware.js';

import { createPost } from '../controllers/postController.js';
const postRouter = express.Router();
postRouter.post('/', uploads.single('postImage'), createPost);
export default postRouter;
