import express from 'express';
import uploads from '../middleware/uploadMiddleware.js';

import {
  createPost,
  deletePost,
  getPosts,
  updatePosts,
} from '../controllers/postController.js';
const postRouter = express.Router();
postRouter.post('/', uploads.single('postImage'), createPost);
postRouter.get('/', getPosts);
postRouter.put('/:id', uploads.single('postImage'), updatePosts);
postRouter.delete('/:id', deletePost);

export default postRouter;
