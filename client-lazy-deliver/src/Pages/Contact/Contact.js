import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Contact = () => {
    const [contact, setContact] = useState({});

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(contact);
    
        fetch("https://lazy-deliver-server.vercel.app/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(contact),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.acknowledged) {
              alert("Your message sent successfully!");
            }
          });
        
        e.target.reset();
      };

    const handleBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
    
        const newContact = { ...contact };
        newContact[field] = value;
        setContact(newContact);
      };
  return (
    <div className="p-6">
      <div className="mx-auto text-4xl text-black w-fit bg-white my-5 p-2 rounded-sm">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="flex items-center justify-center">
        <form
          onSubmit={handleFormSubmit}
          className="form-control w-full max-w-xs border border-1 rounded-md bg-white  p-6"
        >
          <div className="flex items-end justify-end">
            <Link to="/">
              <button className="btn btn-primary" data-theme="lofi">
                Back Home
              </button>
            </Link>
          </div>
          <label className="label">
            <span className="label-text">Enter your name?</span>
          </label>
          <input
            type="text"
            placeholder="ruhul amin"
            className="input input-bordered w-full max-w-xs"
            name="name"
            onBlur={handleBlur}
            required
          />
          <label className="label">
            <span className="label-text">Enter your email?</span>
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
            <span className="label-text">
              Write what you want to share with us?
            </span>
          </label>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="Awesome Service/Bad Service"
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

export default Contact;
