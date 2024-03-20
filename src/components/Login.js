import React, { useState , useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { BG } from "../utils/constants";



const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

    const handleButtonClick = () => {
      //Validate the form data
      const message = checkValidData(email.current.value , password.current.value);
      setErrorMessage(message);
      if(message) return;

      //SignIn/SignUp Logic
      if(!isSignInForm){
        //SignUp Logic
        createUserWithEmailAndPassword(auth, email.current.value , password.current.value)
          .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage("You have already signed up with this account information.");
        });
      }
      else{
        //SignIn Logic
        signInWithEmailAndPassword(auth, email.current.value , password.current.value)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage("Incorrect password. Please try again.");
        });
      }


    };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    setErrorMessage(null);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={BG}
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-12 bg-black text-white bg-opacity-80 rounded-lg">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && <input
          type="text"
          placeholder="Name"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />
        <p className="text-red-500 font-bold py-2">{errorMessage}</p>
        <button className="p-4 my-6 bg-red-700 w-full" onClick={handleButtonClick}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-white cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm ? "New to netflix? Sign up now." : "Already Registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
