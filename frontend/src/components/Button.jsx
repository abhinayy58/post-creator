import React from "react";
import { IoMdAdd } from "react-icons/io";

const Button = ({ setOpen }) => {
  return (
    <div className="bg-[#3795BD] items-center gap-2 flex text-white select-none rounded-lg py-3 px-6 text-center align-middle ">
       <IoMdAdd size={24} />
      <button
        onClick={() => setOpen(true)}
        className="text-xl"
      >
       
        Create Post
      </button>
    </div>
  );
};

export default Button;
