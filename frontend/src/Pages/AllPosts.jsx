import React, { useState, useEffect } from "react";
import PostCard from "../components/PostCard";
import Loader from "../components/Loader";

const AllPosts = () => {
  const [allPost, setAllPost] = useState([]);
  const [loading,setLoading] = useState(false)
  const getAllPost = async () => {
    setLoading(true)
    await fetch("/api/posts")
      .then((response) => response.json())
      .then((result) => {
        setAllPost(result.post);
      });
      setLoading(false)
  };

  useEffect(() => {
    getAllPost();
  }, []);


  return (
    <section className="p-10">
      
      <span className="flex items-center text-2xl font-semibold">All Post</span>
    <div className="flex gap-4 m-6 flex-wrap">
      {allPost.map((post) => (
        <PostCard
          key={post?._id}
          title={post?.title}
          date={post?.createdAt}
          id={post?._id}
        />
      ))}
      {loading && <Loader />}
      {!allPost.length && <p className="m-auto font-bold">No Post Available</p>}
    </div>
    </section>
  );
};

export default AllPosts;
