import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const BlogItem = ({blog}) => {
    const [blogs, setBlogs] = useState([]);
    const {_id ,name, description} = blog;
    console.log(blog);

    const handleDelete = (blog) => {
        const deleteBlog = window.confirm(`Are you sure to delete this blog? ${blog.name}`);
        if(deleteBlog){
            fetch(`https://lazy-deliver-server.vercel.app/blog/${blog._id}`, {
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    alert("Blog deleted successfully");
                    // display remaining blogs
                    const remainingBlogs = blogs.filter(b => b._id !== blog._id);
                    setBlogs(remainingBlogs);

                }
            })
        }
    }
  return (
    <div>
      <div className="card card-compact h-52 w-96 shadow-xl" data-theme="lofi">
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <Link to={`/update/${_id}`}>
                <button className="btn btn-primary">Edit</button>
            </Link>
            <button className="btn btn-primary" onClick={() => handleDelete(blog)}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
