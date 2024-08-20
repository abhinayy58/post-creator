import express from "express";

import {
  getPost,
  getPosts,
  createPost,
  deletePost,
} from "../controllers/post.controller.js";
const router = express.Router();

router.route("/posts").get(getPosts).post(createPost);
router.route("/posts/:id").get(getPost).delete(deletePost);

export default router;
