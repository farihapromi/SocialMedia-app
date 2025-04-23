import User from '../models/user.js';
import bcrypt from 'bcrypt';
import fs from 'fs';
import path from 'path';

export async function createUserAccount({
  name,
  username,
  email,
  password,
  avatarFile,
}) {
  const hashedPassword = await bcrypt.hash(password, 10);

  // Generate local file URL
  const imageUrl = `/uploads/${avatarFile.filename}`; // this will be the path served by static folder

  const newUser = new User({
    name,
    username,
    email,
    password: hashedPassword,
    imageUrl,
    imageId: avatarFile.filename, // optional, used if needed for deletion later
  });

  await newUser.save();
  return newUser;
}
