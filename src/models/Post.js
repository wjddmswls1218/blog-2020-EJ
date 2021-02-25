import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Post = new Schema(
  {
    title: {
      type: String,
      reqired: true,
    },
    description: {
      type: String,
      reqired: true,
    },
    author: {
      type: String,
      reqired: true,
    },
    hit: {
      type: Number,
      reqired: true,
    },
    PostType: {
      type: mongoose.Types.ObjectId,
      ref: `PostType`,
    },
    createdAt: {
      type: String,
      required: true,
    },
    lastUpdatedAt: {
      type: String,
      required: true,
    },
    isDelete: {
      type: Boolean,
      required: true,
      default: false,
    },
    no: {
      type: Number,
      required: true,
    },
  },
  { versionKey: false }
);

export default mongoose.model(`Post`, Post, `Post`);
