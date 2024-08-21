import express from "express";

import {
  getPost,
  getPosts,
  createPost,
  deletePost,
} from "../controllers/post.controller.js";
const router = express.Router();

router.route("/").get(getPosts).post(createPost);
router.route("/:id").get(getPost).delete(deletePost);

export default router;
