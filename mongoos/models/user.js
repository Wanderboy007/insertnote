// models/User.js

import mongoose, { models } from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
});

export default mongoose.models.Users || mongoose.model("Users", UserSchema);
