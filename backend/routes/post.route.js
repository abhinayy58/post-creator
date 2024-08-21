import express from "express";

import {
  getPost,
  getPosts,
  createPost,
  deletePost,
} from "../controllers/post.controller.js";
const router = express.Router();

router.get("/", getPosts);
router.post("/", createPost);
router.get("/:id", getPost);
router.delete("/:id", deletePost);

export default router;
