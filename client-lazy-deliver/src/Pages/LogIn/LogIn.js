import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const LogIn = () => {
  const [user, setUser] = useState({});
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.form?.pathname || "/";

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    const { email, password } = user;

    login(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        alert("Login Successful");
        e.target.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        alert("Login Failed"+errorMessage);
      });

    
  };

  const { providerLogin } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleLogin = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
        alert("Login Successful");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        alert("Login Failed"+errorMessage);
      });
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
        <h1 className="text-center">LogIn</h1>
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
            <span className="label-text">Enter your password?</span>
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
              Not Registered Yet? Go for{" "}
              <Link
                to="/registration"
                className="text-black hover:text-sky-500"
              >
                Registration
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

      <div className="mt-4 flex items-center justify-center">
        <button onClick={handleGoogleLogin} className="btn gap-2 bg-white text-black hover:bg-white hover:text-black rounded-md" data-theme="lofi">
          SignIn with Google
        </button>
      </div>
    </div>
  );
};

export default LogIn;
