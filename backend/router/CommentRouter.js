const express = require("express");
const {
  commentPostController,
  commentGetController,
  commentDeleteController,
  commentUpdateController,
} = require("../controller/commentController");
const CommentRouter = express
  .Router()
  .post("/post/:id/comment", commentPostController)
  .get("/post/:id/comment", commentGetController)
  .delete("/post/:id/comment/:id", commentDeleteController)
  .patch("/post/:id/comment/:id", commentUpdateController);

module.exports = CommentRouter;
