import React from "react";
import { useNavigate } from "react-router-dom";

const SinglePost = ({ title, description, id }) => {
  const navigate= useNavigate()
  const deletePost = async () => {
    await fetch(`/api/posts/${id}`,{
      method:"DELETE"
    })
      .then((response) => response.json())
      .then(() => {
        navigate('/')
      });
  };

  return (
    <div className="w-[90%] m-auto">
      <div className="flex items-center my-10 justify-between">
        <div className="flex gap-10">
          <label className="font-semibold">Title</label>
          <div>{title}</div>
        </div>
        <button type="submit" onClick={deletePost} className="px-4 py-1 font-sans text-white bg-red-500 uppercase transition-all rounded-lg middle none center">
          Delete    
        </button>
      </div>
      <label className="font-semibold">Description</label>
      <div dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  );
};

export default SinglePost;
