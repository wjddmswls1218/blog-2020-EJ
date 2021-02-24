import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Post = new Schema({
  title: {
    type: String,
    reqired: true,
  },
  description: {
    type,
  },
});
