const mongoose = require(`mongoose`);
const { createComment } = require("../query/commentQuery");
const { deleteComment } = require("../query/commentQuery");
exports.commentPostController = async (req, res) => {
  try {
    await createComment(req);
    res.send(`successfull comment created`);
  } catch (err) {
    res.send(err.message);
  }
};
exports.commentDeleteController = async (req, res) => {
  try {
    await deleteComment(req);
    res.send(`success deleted comment`);
  } catch (err) {
    res.send(err.message);
  }
};
