import React,{useContext} from "react";
import { useLoaderData } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ViewReview from './../ViewReview/ViewReview';


const SingleService = () => {
  const {_id, title, price, image, description} = useLoaderData();
  const { user } = useContext(AuthContext);
  const [review, setReview] = useState({});

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    const form = e.target;
        const name = `${form.name.value}`;
        const email = user?.email || 'unregistered';
        const message = form.message.value;

    const review = {
      service: _id,
      serviceName: title,
      price,
      customer: name,
      email,
      message,
    }


    fetch("https://lazy-deliver-server.vercel.app/add-review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("Review added successfully");
          // display latest review
          setReview(review);
        }
      });

    e.target.reset();
  };

  const handleBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newReview = { ...review };
    newReview[field] = value;
    setReview(newReview);
  };

  return (
    <div className="p-6">
      <div className="mx-auto text-4xl text-black w-fit bg-white my-5 p-2 rounded-sm">
        <h1 className="text-center">Single Service Detail View</h1>
      </div>
      <div className="flex items-center justify-center p-5">
        <div className="grid lg:grid-cols-1 sm:grid-cols-1 gap-4">
          <div className="card w-96 bg-base-100 shadow-xl" data-theme="lofi">
            <figure className="px-3 pt-3">
              <PhotoProvider>
                <PhotoView src={image}>
                  <img src={image} alt="" className="rounded-md h-72" />
                </PhotoView>
              </PhotoProvider>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{title}</h2>
              <p>{description}</p>
              <p className="text-2xl font-bold">${price}</p>
            </div>
          </div>
        </div>
      </div>

      {/* review section */}
      <div className="mx-auto text-4xl text-black w-fit bg-white my-5 p-2 rounded-sm">
        <h1 className="text-center">Give Your Review</h1>
      </div>

      <div className="flex items-center justify-center">
        <form
          onSubmit={handleFormSubmit}
          className="form-control w-full max-w-xs border border-1 rounded-md bg-white  p-6"
        >
          <div className="flex items-end justify-end">
            <Link to="/services">
              <button className="btn btn-primary" data-theme="lofi">
                Back Services Page
              </button>
            </Link>
          </div>

          <label className="label">
            <span className="label-text">Enter your name?</span>
          </label>
          <input
            type="text"
            placeholder="username"
            className="input input-bordered w-full max-w-xs"
            name="name"
            onBlur={handleBlur}
            required
          />

          <label className="label">
            <span className="label-text">Enter your email address?</span>
          </label>
          <input
            type="email"
            placeholder="example@gmail.com"
            className="input input-bordered w-full max-w-xs"
            name="email"
            onBlur={handleBlur}
            required
          />

          <label className="label">
            <span className="label-text">Enter your review?</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="Write your review"
            name="message"
            onBlur={handleBlur}
            required
          ></textarea>

          <button
            type="submit"
            className="btn btn-primary w-full max-w-xs mt-4"
            data-theme="lofi"
          >
            Submit
          </button>
        </form>
      </div>
      {/* review section end */}

      {/* ViewReview  */}
      <ViewReview />


    </div>
  );
};

export default SingleService;
