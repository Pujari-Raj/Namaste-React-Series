import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSiginForm, setIsSiginForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSiginForm(!isSiginForm);
  };

  return (
    <>
      <Header />
      <div>
        <div className="absolute">
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/a09bb938-2d90-42ae-986e-5a3e4abf9e77/8eb1e781-3494-4aa4-9405-268ca6473e4c/IN-en-20231113-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            alt="web-logo"
          />
        </div>
        <form
          action=""
          className="w-[30%] absolute p-14 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-75"
        >
          <h1 className="text-4xl font-bold py-4">
            {isSiginForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSiginForm && (
            <input
              className="p-4 my-4 w-full py4"
              type="text"
              placeholder="Full Name"
              name="email"
              id=""
            />
          )}
          <input
            className="p-4 my-4 w-full py4"
            type="text"
            placeholder="Email Or Phone Number"
            name="email"
            id=""
          />
          <input
            className="p-4 my-4 w-full py4"
            type="password"
            placeholder="password"
            name="email"
            id=""
          />
          <button
            type="submit"
            className="p-4 my-6 bg-red-600 w-full rounded-lg"
          >
            {isSiginForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
            {isSiginForm
              ? "New To Netflix? Sign Up Now"
              : "Already Registered ? Sign In Now"}
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
