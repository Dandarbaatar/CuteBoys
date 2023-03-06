const PostSchema = require("../database/model/posts");
const mongoose = require("mongoose");

exports.createPost = async (req) => {
  const { description, image } = req.body;
  const { id } = req.params;
  const result = await new PostSchema({
    description: description,
    image: image,
    userID: id,
  }).save();
  return result;
};
exports.deletePost = async (req) => {
  const { id } = req.params;
  const objId = new mongoose.Types.ObjectId(id);
  const result = await PostSchema.findByIdAndRemove({ _id: objId });
  return result;
};
exports.uptadePost = async (req) => {
  const { id } = req.params;
  const { post, image } = req.body;
  const objId = new mongoose.Types.ObjectId(id);
  const result = await PostSchema.findById({ _id: objId });

  await PostSchema.findByIdAndUpdate(result, {
    post: post,
    image: image,
  });
  return result;
};
exports.getPosts = async (req) => {
  const result = await PostSchema.find();
  return result;
};
