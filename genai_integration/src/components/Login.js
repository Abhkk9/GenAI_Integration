import React, { useState } from "react";
import Header from "./Header";

function Login() {
  const [isSignInForm, setisSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <img
        className="absolute rounded-lg"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_small.jpg"
        alt="Background poster"
      />
      <form className="absolute p-12 bg-black w-4/12 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-70">
        <h1 className="font-bold text-xl py-2 m-2">
          {isSignInForm ? "Sign In" : "Sign up"}
        </h1>
        <input
          type="text"
          placeholder=" Eamil Address "
          className="py-2 m-2 w-full text-black"
        />
        {!isSignInForm ? (
          <input
            type="text"
            placeholder=" Full Name "
            className="py-2 m-2 w-full text-black"
          />
        ) : (
          ""
        )}
        <input
          type="password"
          placeholder=" Password "
          className="py-2 m-2 w-full  text-black"
        />
        <button className=" p-1 m-2 bg-red-500 center w-full ">
          {" "}
          {isSignInForm ? "Sign In" : "Sign up"}
        </button>
        <p className="py-2 m-2 text-white" onClick={toggleSignInForm}>
          {" "}
          {isSignInForm ? "New user? Sign up now" : "Sign Up"}
        </p>
      </form>
    </div>
  );
}

export default Login;
