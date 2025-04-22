import mongoose from 'mongoose';
const userSchema = new mongoose.Schema(
  {
    name: string,
    email: { type: string, unique: true },
    username: string,
    password: string,
    imageUrl: String,
    imageId: String,
    deleted: {
      type: Boolean,
      default: false,
    },
    deletedAt: {
      type: Date,
    },
  },

  { timestamps: true }
);

const User = mongoose.model('User', userSchema);
export default User;
