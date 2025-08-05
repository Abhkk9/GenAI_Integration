import React, { useRef, useState } from "react";
import Header from "./Header";
import checkValidData from "../utils/validate";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import {
  signInWithEmailAndPassword,
  validatePassword,
  updateProfile,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase.js";


function Login() {
  const [isSignInForm, setisSignInForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState();
  // const navigate = useNavigate();
  const email = useRef(null);
  const userName = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    const validationMsg = checkValidData(
      email.current.value,
      password.current.value
    );
    setErrorMsg(validationMsg);
    console.log(validationMsg);

    console.log(errorMsg);
    
    if (errorMsg) return;
    
    console.log(isSignInForm);

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          updateProfile(user, {
            displayName: userName.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
              // ...
            })
            .catch((error) => {
              // An error occurred
              // ...
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" + errorMessage);
        });
    }
  };
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
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-12 bg-black w-4/12 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-70"
      >
        <h1 className="font-bold text-xl py-2 m-2">
          {isSignInForm ? "Sign In" : "Sign up"}
        </h1>
        <input
          ref={email}
          type="text"
          placeholder=" Eamil Address "
          className="py-2 m-2 w-full text-black"
        />
        {!isSignInForm ? (
          <input
            ref={userName}
            type="text"
            placeholder=" Full Name "
            className="py-2 m-2 w-full text-black"
          />
        ) : (
          ""
        )}
        <input
          ref={password}
          type="password"
          placeholder=" Password "
          className="py-2 m-2 w-full  text-black"
        />
        {errorMsg ? <p className="text-red-500 p-1 ">{errorMsg}</p> : ""}
        <button
          className=" p-1 m-2 bg-red-500 center w-full "
          onClick={handleButtonClick}
        >
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
