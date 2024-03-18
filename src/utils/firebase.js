// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJNeIYgGWFoOi8tqoSWQi7LTeAruBtyC0",
  authDomain: "netflixgpt-330b5.firebaseapp.com",
  projectId: "netflixgpt-330b5",
  storageBucket: "netflixgpt-330b5.appspot.com",
  messagingSenderId: "299753118608",
  appId: "1:299753118608:web:8094bcbb95d1326fadb115",
  measurementId: "G-B658W51MW2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();