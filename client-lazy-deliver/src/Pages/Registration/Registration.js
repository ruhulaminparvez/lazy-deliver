import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Registration = () => {
  const [user, setUser] = useState({});
  const { createUser } = useContext(AuthContext);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    const { email, password } = user;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        alert("Registration Successful");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        alert(errorMessage);
      });


    e.target.reset();
  };

  const handleBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newUser = { ...user };
    newUser[field] = value;
    setUser(newUser);
  };

  return (
    <div className="p-6">
      <div className="mx-auto text-4xl text-black w-fit bg-white my-5 p-2 rounded-sm">
        <h1 className="text-center">Registration</h1>
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
            <span className="label-text">Enter username?</span>
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
            <span className="label-text">Enter email address?</span>
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
            <span className="label-text">Create your password?</span>
          </label>
          <input
            type="password"
            placeholder="password"
            className="input input-bordered w-full max-w-xs"
            name="password"
            onBlur={handleBlur}
            required
          />
          <div className="mt-3 text-center">
            <p>
              Go to the {" "}
              <Link
                to="/login"
                className="text-black hover:text-sky-500"
              >
                LogIn
              </Link>{" "}
            </p>
          </div>

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

export default Registration;
