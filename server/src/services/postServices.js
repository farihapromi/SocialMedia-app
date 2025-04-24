import Post from '../models/post.js';

export const createPostService = async ({
  caption,
  location,
  tags,
  imageUrl,
  creator,
}) => {
  try {
    const newPost = new Post({
      caption,
      location,
      tags,
      imageUrl,
      creator,
    });

    await newPost.save();
    return newPost;
  } catch (error) {
    console.error('Error saving post:', error.message);
    throw new Error(error.message);
  }
};
