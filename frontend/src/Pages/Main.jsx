import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { toolbarOptions } from "../helper/toolbarOption";
import Modal from "../components/Modal";
import Button from "../components/Button";

const Main = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState({
    title: "",
    description: ``,
  });

  // console.log(value);
  const modules = {
    toolbar: toolbarOptions,
  };
  const submitHandler = async(e) => {
    e.preventDefault();
    await fetch("/api/posts", {
      method:'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value),
    })
   if(value.title && value.description){
    setOpen(false)
   }
    setValue({
      title: "",
      description: ``,
    })
  };

  return (
    <div className="flex justify-center items-center h-[70vh]">
      <Button setOpen={setOpen} />
      <Modal setOpen={setOpen} open={open}>
        <form className="space-y-6 p-6" onSubmit={submitHandler}>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              placeholder="title..."
              value={value.title}
              name="title"
              onChange={(e) =>
                setValue((prevState) => ({
                  ...prevState,
                  [e.target.name]: e.target.value,
                }))
              }
              className="mt-1 p-2 py-4 block w-full border border-[#cccccc] shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <ReactQuill
              theme="snow"
              value={value.description}
              onChange={(newValue) =>
                setValue((prevState) => ({
                  ...prevState,
                  description: newValue,
                }))
              }
              modules={modules}
              className="mt-2 bg-white"
            />
          </div>
          <div className="flex flex-wrap items-center justify-end p-4 shrink-0 text-blue-gray-500">
            <button
              onClick={() => setOpen(false)}
              className="px-6 py-3 mr-1 font-sans text-xs font-bold text-red-500 uppercase transition-all rounded-lg middle none center hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              Cancel
            </button>
            <button
              className="middle none center rounded-lg bg-[#3795BD] py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-white-500/20 transition-all hover:shadow-lg hover:shadow-white-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              Confirm
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default Main;
