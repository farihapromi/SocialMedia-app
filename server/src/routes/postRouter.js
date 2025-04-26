import express from 'express';
import uploads from '../middleware/uploadMiddleware.js';

import {
  createPost,
  getPosts,
  updatePosts,
} from '../controllers/postController.js';
const postRouter = express.Router();
postRouter.post('/', uploads.single('postImage'), createPost);
postRouter.get('/', getPosts);
postRouter.put('/:id', uploads.single('postImage'), updatePosts);

export default postRouter;
