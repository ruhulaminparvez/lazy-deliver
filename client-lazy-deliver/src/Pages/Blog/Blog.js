import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import BlogItem from "./BlogItem";

const Blog = () => {
  const [blogs, setBlogs] = React.useState([]);

  useEffect(() => {
    fetch("https://lazy-deliver-server.vercel.app/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="p-6">
      <div className="mx-auto text-4xl text-black w-fit bg-white my-5 p-2 rounded-sm">
        <h1 className="text-center">{blogs.length} Available Blogs</h1>
      </div>
      <div className="flex flex-col justify-end items-end mr-20">
        <Link to="/add-blog">
          <button className="btn btn-primary bg-white text-black hover:bg-white hover:text-black" data-theme="lofi">
            Add Blog
          </button>
        </Link>
      </div>
      <div className="flex items-center justify-center p-5">
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4">
          {
            blogs.map(blog => <BlogItem key={blog._id} blog={blog}></BlogItem>)
          }
        </div>
      </div>
    </div>
  );
};

export default Blog;
