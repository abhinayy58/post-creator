import React from 'react'
import {Link} from 'react-router-dom'
import {extractDate} from '../helper/extractDate.js'
const PostCard = ({title,id,date}) => {
  return (
    <div className="flex flex-col w-[220px] bg-white border shadow-sm  dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
  <img className="w-full h-auto" src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80" alt="Card Image" />
  <div className="p-4 md:p-5 bg-white">
    <h3 className="text-lg font-bold text-gray-800 dark:text-white">
      {title}
    </h3>
    <p className="mt-1 text-gray-500 dark:text-neutral-400">
     {extractDate(date)}
    </p>
    <Link to={`/posts/${id}`} className="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-[#3795BD] text-white hover:bg-[#3795BD] focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
      Go To Post
    </Link>
  </div>
</div>
  )
}

export default PostCard