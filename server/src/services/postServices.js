import Post from '../models/post';
export const createPostService = async ({
  caption,
  location,
  tags,
  imageUrl,
  creator,
}) => {
  const newPost = new Post({
    caption,
    location,
    tags,
    imageUrl,
    creator,
  });
  await newPost.save();
  return newPost;
};
