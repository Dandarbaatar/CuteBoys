const { createPost } = require("../query/postQuery");
const { deletePost } = require("../query/postQuery");
const { uptadePost } = require("../query/postQuery");
const { getPosts } = require("../query/postQuery");
const mongoose = require("mongoose");

exports.postPostController = async (req, res) => {
  try {
    await createPost(req);
    res.status(201).send(`Successfully created`);
  } catch (err) {
    res.send(err.message);
  }
};
exports.postDeleteController = async (req, res) => {
  try {
    await deletePost(req);
    res.send(`Successfully deleted `);
  } catch (err) {
    console.log(err);
  }
};
exports.postUptadeController = async (req, res) => {
  try {
    await uptadePost(req);

    res.send(`Successfully Uptated `);
  } catch (error) {
    console.log(error);
  }
};
exports.postGetController = async (req, res) => {
  const result = await getPosts(req);
  res.send({ data: result });
};
