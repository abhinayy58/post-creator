import Post from "../modals/post.modal.js";

export const getPost = async (req, res) => {
  try {
    const postId = req.params.id;
    const post = await Post.findById(postId);

    if (!post) {
      return res
        .status(404)
        .json({ message: "Post not found", success: false });
    }

    res.status(200).json({
      post,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getPosts = async (req, res) => {
  try {
    const post = await Post.find();
    if (!post) {
      return res
        .status(404)
        .json({ message: "Posts not found", success: false });
    }

    res.status(200).json({
      post,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const createPost = async (req, res) => {
  try {
    const post = await Post({
      title: req.body.title,
      description: req.body.description,
    });

    await post.save();
    res.status(200).json({
      post,
      message: "Post has been created",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = async (req, res) => {
  try {
    const postId = req.params.id;
    const post = await Post.findByIdAndDelete(postId);

    res.status(200).json({
      messsage: "Your post has been deleted",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
