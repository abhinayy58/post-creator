import React, { useState } from "react";

const Modal = ({ children, setOpen, open }) => {
  return (
    <div>
      {open && (
        <div className="fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300">
          <div className="relative m-4 w-8 min-w-[85%] max-w-[85%] rounded-lg bg-white font-sans text-base font-light leading-relaxed text-blue-gray-500 antialiased shadow-2xl">
            <div className="flex items-center p-4 font-sans text-2xl antialiased font-semibold leading-snug shrink-0">
              Create Posts
            </div>
            <div className="relative p-4 font-sans text-base antialiased font-light leading-relaxed border-t border-b border-t-blue-gray-100 border-b-blue-gray-100 text-blue-gray-500">
              {children}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
