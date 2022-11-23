import React, { useState } from "react";
import { Link } from "react-router-dom";

const AddBlog = () => {
  const [blog, setBlog] = useState({});

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(blog);

    fetch("https://lazy-deliver-server.vercel.app/addBlog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blog),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("Blog added successfully");
        }
      });
    
    e.target.reset();
  };

  const handleBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    const newBlog = { ...blog };
    newBlog[field] = value;
    setBlog(newBlog);
  };

  return (
    <div className="p-6">
      <div className="mx-auto text-4xl text-black w-fit bg-white my-5 p-2 rounded-sm">
        <h1 className="text-center">Add Blog</h1>
      </div>
      <div className="flex items-center justify-center">
        <form
          onSubmit={handleFormSubmit}
          className="form-control w-full max-w-xs border border-1 rounded-md bg-white  p-6"
        >
          <div className="flex items-end justify-end">
            <Link to="/blog">
              <button className="btn btn-primary" data-theme="lofi">
                Back
              </button>
            </Link>
          </div>
          <label className="label">
            <span className="label-text">Enter your blog name?</span>
          </label>
          <input
            type="text"
            placeholder="Enter your blog name"
            className="input input-bordered w-full max-w-xs"
            name="name"
            onBlur={handleBlur}
            required
          />
          <label className="label">
            <span className="label-text">Write blog description</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="Enter your blog description"
            name="description"
            onBlur={handleBlur}
            required
          ></textarea>
          <div className="flex items-center justify-center mt-4">
            <button className="btn btn-primary" data-theme="lofi">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
