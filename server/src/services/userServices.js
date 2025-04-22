import User from '../models/user.js';
import bcrypt from 'bcrypt';

import cloudinary from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config();

//config cloudnairy
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
console.log('Cloudinary Config:', cloudinary.v2.config());

async function uploadCloudinary(filePath, folderName) {
  try {
    const result = await cloudinary.v2.uploader.upload(filePath, {
      folder: folderName,
    });
    return result;
  } catch (error) {
    console.error('Error uploading image to Cloudinary:', error.message);
    throw new Error('Error uploading image to Cloudinary: ' + error.message);
  }
}

export async function createUserAccount({
  name,
  username,
  email,
  password,
  avatarFile,
}) {
  //create hashed password for security
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({
    name,
    username,
    email,
    password: hashedPassword,
    imageUrl: '',
  });
  await newUser.save();
  const uploadResult = await uploadCloudinary(avatarFile.path, 'user-avatars');
  newUser.imageUrl = uploadResult.secure_url;
  newUser.imagePublicId = uploadResult.public_id;
  await newUser.save();
  return newUser;
}
