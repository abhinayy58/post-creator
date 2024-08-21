import {useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import SinglePost from "../components/SinglePost";
import Loader from "../components/Loader";
const Post = () => {
  const postId = useParams().id

  const [post, setPost] = useState([]);
  const [loading,setLoading] = useState(false)
  const getPost = async() => {
    setLoading(true)
    await fetch(`/api/posts/${postId}`)
      .then((response) => response.json())
      .then((result) => {
        setPost(result.post);
      });
      setLoading(false)
  };

  useEffect(() => {
    getPost();
  }, [postId]);
  return (<div>
    <SinglePost title={post?.title} description={post?.description} id={post?._id} />
    {loading && <Loader />}
  </div>)
};

export default Post;
