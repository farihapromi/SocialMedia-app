import mongoose from 'mongoose';
const userSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String, unique: true },
    username: String,
    password: String,
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
