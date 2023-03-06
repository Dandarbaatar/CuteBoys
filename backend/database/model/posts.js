const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  description: { type: String, required: true },
  author: { type: String, required: true },
  title: { type: String, required: true },
  image: { type: String, required: true },
  type: { type: String, required: true },
  userID: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
});

const PostModel = mongoose.model("post", PostSchema);

module.exports = PostModel;
