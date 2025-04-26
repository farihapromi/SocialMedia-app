import express from 'express';
import uploads from '../middleware/uploadMiddleware.js';

import { createPost, getPosts } from '../controllers/postController.js';
const postRouter = express.Router();
postRouter.post('/', uploads.single('postImage'), createPost);
postRouter.get('/', getPosts);
export default postRouter;
