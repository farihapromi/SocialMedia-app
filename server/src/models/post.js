// models/Post.js
import mongoose from 'mongoose';

const postSchema = new mongoose.Schema(
  {
    caption: String,
    location: String,
    tags: [String],
    imageUrl: String,
    imageId: String,
    creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
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

export default mongoose.model('Post', postSchema);
