import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const AddService = () => {
    const [addService, setAddService] = useState({});

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(addService);

        fetch("https://lazy-deliver-server.vercel.app/add-service", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(addService),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.acknowledged) {
                    alert("Service added successfully");
                }
            });

        e.target.reset();
    };

    const handleBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;

        const newAddService = { ...addService };
        newAddService[field] = value;
        setAddService(newAddService);
    };


  return (
    <div className="p-6">
      <div className="mx-auto text-4xl text-black w-fit bg-white my-5 p-2 rounded-sm">
        <h1 className="text-center">Add Service</h1>
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
            <span className="label-text">Enter your service title?</span>
          </label>
          <input
            type="text"
            placeholder="Enter your service title"
            className="input input-bordered w-full max-w-xs"
            name="title"
            onBlur={handleBlur}
            required
          />
          <label className="label">
            <span className="label-text">Write service description</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="Enter your service description"
            name="description"
            onBlur={handleBlur}
            required
          ></textarea>
          <label className="label">
            <span className="label-text">Enter your service price?</span>
          </label>
          <input
            type="text"
            placeholder="Enter your service price"
            className="input input-bordered w-full max-w-xs"
            name="price"
            onBlur={handleBlur}
            required
          />
          <label className="label">
            <span className="label-text">Enter your service imageURL?</span>
          </label>
          <input
            type="text"
            placeholder="Enter your service imageURL"
            className="input input-bordered w-full max-w-xs"
            name="image"
            onBlur={handleBlur}
            required
          />
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

export default AddService;
