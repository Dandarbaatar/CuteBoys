const mongoose = require(`mongoose`);
exports.commentPostController = async (req, res) => {
  try {
    await createComment(req);
  } catch (err) {
    res.send(err.message);
  }
};
