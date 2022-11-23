import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";

const EditReview = () => {
  const loadReview = useLoaderData();
  console.log(loadReview);
  const [review, setReview] = useState({});

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(review);

    fetch(`https://lazy-deliver-server.vercel.app/update-review/${loadReview._id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(review),
    })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            if (data.acknowledged) {
                alert("Review updated successfully");
            }
        }
    );

  };

  const handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    const newReview = { ...review };
    newReview[field] = value;
    setReview(newReview);
  };
  return (
    <div className="p-6">
      <div className="mx-auto text-4xl text-black w-fit bg-white my-5 p-2 rounded-sm">
        <h1 className="text-center">Edit Review</h1>
      </div>
      <div className="flex items-center justify-center">
        <form
          onSubmit={handleFormSubmit}
          className="form-control w-full max-w-xs border border-1 rounded-md bg-white  p-6"
        >
          <div className="flex items-end justify-end">
            <Link to="/services">
              <button className="btn btn-primary" data-theme="lofi">
                Back
              </button>
            </Link>
          </div>
          <label className="label">
            <span className="label-text">Customer Name</span>
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="input input-bordered w-full max-w-xs"
            name="customer"
            defaultValue={loadReview.customer}
            onBlur={handleChange}
            required
          />
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full max-w-xs"
            name="email"
            defaultValue={loadReview.email}
            onBlur={handleChange}
            required
          />
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="Enter your blog description"
            name="message"
            defaultValue={loadReview.message}
            onBlur={handleChange}
            required
          ></textarea>
          <div className="flex items-center justify-center mt-4">
            <button className="btn btn-primary" data-theme="lofi">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditReview;
