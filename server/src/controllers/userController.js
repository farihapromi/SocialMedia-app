import asyncHandler from 'express-async-handler';
import { createUserAccount } from '../services/userServices.js';
import uploads from '../middleware/uploadMiddleware.js'; // Import the multer middleware

// Route to create user account with avatar upload
export const createUser = asyncHandler(async (req, res) => {
  // Use multer to handle file upload in the 'avatar' field
  uploads.single('avatarFile')(req, res, async (err) => {
    console.error('Multer Error:', err); // Log the full error object
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
      // Call the function to create the user account
      const newUser = await createUserAccount({
        name,
        username,
        email,
        password,
        avatarFile,
      });

      // Respond with the created user account
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
});
