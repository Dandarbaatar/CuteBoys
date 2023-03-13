const CommentSchema = require("../database/model/comment");
const mongoose = require("mongoose");
exports.createComment = async (req) => {
  const { text, username } = req.body;
  const { postID } = req.params;
  const objId = new mongoose.Types.objId(id);
  const result = await new CommentSchema({
    text: text,
    username: username,
    postID: postID,
    commentID: objId,
  }).save();
  return result;
};
exports.deleteComment = async (req) => {
  const { commentID } = req.params;
  const objId = new mongoose.Types.ObjectId(commentID);
  const result = await PostSchema.findByIdAndRemove({ _id: objId });
  return result;
};
