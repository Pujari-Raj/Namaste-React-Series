import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidate } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { BG_URL, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSiginForm, setIsSiginForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  // Toggle-form
  const toggleSignInForm = () => {
    setIsSiginForm(!isSiginForm);
  };

  //
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleFormSubmit = () => {
    console.log("" + email.current.value);
    console.log("" + password.current.value);

    const message = checkValidate(
      // name.current.value,
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    console.log(message);

    // if there is error, then it'll return error or Sign-Up/Sign-In
    if (message) return;

    if (!isSiginForm) {
      // Sign-Up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log("user-data", user);
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: USER_AVATAR,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
              const errorCode = error.code;
              const errorMessage = error.message;
              // ..
              console.log(errorCode + "--" + errorMessage);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          console.log(errorCode + "--" + errorMessage);
        });
    } else {
      // Sign-In logic
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
          console.log(errorCode + "--" + errorMessage);
          setErrorMessage(errorMessage);
        });
    }
  };

  return (
    <>
      <Header />
      <div>
        <div className="absolute">
          <img
            src={BG_URL}
          />
        </div>
        <form
          onSubmit={handleFormSubmit}
          className="w-[30%] absolute p-14 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-75"
        >
          <h1 className="text-4xl font-bold py-4">
            {isSiginForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSiginForm && (
            <input
              ref={name}
              className="p-4 my-4 w-full bg-gray-700"
              type="text"
              placeholder="Full Name"
              name="name"
            />
          )}
          <input
            ref={email}
            className="p-4 my-4 w-full bg-gray-700"
            type="text"
            placeholder="Email Or Phone Number"
            name="email"
          />
          <input
            ref={password}
            className="p-4 my-4 w-full bg-gray-700"
            type="password"
            placeholder="password"
            name="email"
          />
          <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
          <button
            className="p-4 my-6 bg-red-600 w-full rounded-lg"
            onClick={handleFormSubmit}
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
