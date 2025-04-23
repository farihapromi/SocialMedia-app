import asyncHandler from 'express-async-handler';
import {
  createUserAccount,
  deleteAlluser,
  getAllUser,
  updateAllUser,
} from '../services/userServices.js';
import uploads from '../middleware/uploadMiddleware.js';

export const createUser = asyncHandler(async (req, res) => {
  // Use multer to handle file upload in the 'avatar' field
  uploads.single('avatarFile')(req, res, async (err) => {
    console.error('Multer Error:', err);
    if (err) {
      return res.status(400).json({ message: 'Error uploading file' });
    }
    // Destructure data from the request body
    const { name, username, email, password } = req.body;
    const avatarFile = req.file;
    console.log('this is avaatr', avatarFile);

    if (!avatarFile) {
      return res.status(400).json({ message: 'Avatar file is required' });
    }

    try {
      const newUser = await createUserAccount({
        name,
        username,
        email,
        password,
        avatarFile,
      });

      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
});
export const getUser = asyncHandler(async (req, res) => {
  const users = await getAllUser();
  res.status(200).json(users);
});

export const updateUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const trimmedId = id.trim();

  const { name, username, email, password } = req.body;
  const avatarFile = req.file;

  const payload = {
    name,
    username,
    email,
    password,
  };

  if (avatarFile) {
    payload.imageUrl = `/uploads/${avatarFile.filename}`;
    payload.imageId = avatarFile.filename;
  }

  const updatedUser = await updateAllUser(trimmedId, payload);
  if (!updatedUser) {
    return res.status(404).json({ message: `User not found with ID: ${id}` });
  }
  res.json(updatedUser);
});
export const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const trimmedId = id.trim();
  const deleteUser = await deleteAlluser(trimmedId);
  if (!deleteUser) {
    res.status(404).json({ message: `No user found with this ${id} id` });
  }
  res.json({ message: 'User deleted succesfully' });
});
