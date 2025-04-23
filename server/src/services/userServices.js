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

  const imageUrl = `/uploads/${avatarFile.filename}`;

  const newUser = new User({
    name,
    username,
    email,
    password: hashedPassword,
    imageUrl,
    imageId: avatarFile.filename,
  });

  await newUser.save();
  return newUser;
}
export async function getAllUser() {
  return await User.find({ deleted: false });
}

export const updateAllUser = async (id, payload) => {
  return await User.findOneAndUpdate({ _id: id }, payload, { new: true });
};

export const deleteAlluser = async (id) => {
  return await User.findByIdAndUpdate(
    { _id: id },

    { deleted: true, deletedAt: new Date() },
    { new: true }
  );
};
