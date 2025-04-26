import asyncHandler from 'express-async-handler';
import {
  createPostService,
  deleteAllPosts,
  getAllPosts,
  updateAllPosts,
} from '../services/postServices.js';

export const createPost = asyncHandler(async (req, res) => {
  const { caption, location, tags, creator } = req.body;
  const postImage = req.file;

  if (!postImage) {
    console.error('No image file uploaded'); // Log missing file error
    return res.status(400).json({ message: 'Image is required' });
  }

  const newPost = await createPostService({
    caption,
    location,
    tags,
    imageUrl: `/uploads/${postImage.filename}`,
    imageId: postImage.filename,
    creator,
  });

  res.status(201).json(newPost);
});

export const getPosts = asyncHandler(async (req, res) => {
  const posts = await getAllPosts();
  res.status(200).json(posts);
});

export const updatePosts = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { caption, location, tags, creator } = req.body;
  const postImage = req.file;
  const payload = { caption, location, tags, creator };
  if (postImage) {
    payload.imageUrl = `/uploads/${postImage.filename}`;
    payload.imageId = postImage.filename;
  }
  const updatedPosts = await updateAllPosts(id, payload);
  if (!updatedPosts) {
    return res
      .status(404)
      .json({ message: `no post found with this ${id} id` });
  }
  res.status(200).json(updatedPosts);
});

export const deletePost = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const deletePost = await deleteAllPosts(id);
  if (!deletePost) {
    return res.status(404).json({ message: `No post found with this ${id}` });
  }
  res.status(200).json({ message: 'Post deleted successfully' });
});
