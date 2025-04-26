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
export const getAllPosts = async () => {
  return await Post.find({ deleted: false });
};
export const updateAllPosts = async (id, payload) => {
  return await Post.findByIdAndUpdate({ _id: id }, payload, { new: true });
};

export const deleteAllPosts = async (id) => {
  return await Post.findByIdAndUpdate(
    { _id: id },
    { deleted: true, deletedAt: new Date() },
    { new: true }
  );
};
