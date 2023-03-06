const express = require("express");
const {
  postPostController,
  postDeleteController,
  postUptadeController,
  postGetController,
} = require("../controller/PostController");

const PostRouter = express
  .Router()
  .get("/posts", postGetController)
  .post("/user/:id", postPostController)
  .delete("/post/:id", postDeleteController)
  .patch("/post/:id", postUptadeController);
module.exports = PostRouter;
