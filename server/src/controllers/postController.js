export const createPost = asyncHandler(async (req, res) => {
  uploads.single('postImage')(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ message: 'Error uploading file' });
    }

    const { caption, location, tags, creator } = req.body;
    const postImage = req.file;

    if (!postImage) {
      return res.status(400).json({ message: 'Image is required' });
    }

    try {
      const newPost = await createPostService({
        caption,
        location,
        tags,
        imageUrl: `/uploads/${postImage.filename}`,
        imageId: postImage.filename,
        creator,
      });

      res.status(201).json(newPost);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
});
