// models/User.js

import mongoose, { models } from "mongoose";

const UserComment = new mongoose.Schema({
  name: String,
  email: String,
  movie_id: String,
  text: String,
  date: Date,
});

export default mongoose.models.comments ||
  mongoose.model("comments", UserComment);
