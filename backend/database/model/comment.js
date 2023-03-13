const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  text: { type: String, required: true },
  userID: { type: String, required: true },
  postID: { type: String, required: true },
  commentID: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
});

const CommentModel = mongoose.model("comment", CommentSchema);

module.exports = CommentModel;
