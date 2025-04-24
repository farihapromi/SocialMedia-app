import asyncHandler from 'express-async-handler';
import { createPostService } from '../services/postServices.js';

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
