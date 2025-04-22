import User from '../models/user.js';
import bcrypt from 'bcrypt';
import cloudinary from 'cloudinary';
//config cloudnairy
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
async function uploadCloudinary(filePath, folderName) {
  return await cloudinary.v2.uploader(filePath, {
    folder: 'user-avatars',
    use_filename: true,
    unique_filename: true,
  });
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
  const uploadResult = await uploadToCloudinary(
    avatarFile.path,
    'user-avatars'
  );
  newUser.imageUrl = uploadResult.secure_url;
  newUser.imagePublicId = uploadResult.public_id;
  await newUser.save();
  return newUser;
}
