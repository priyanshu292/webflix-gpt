// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDk1xRAM65zXUyed2tcaTqRtCxe-1Bts-U",
  authDomain: "webflixgpt.firebaseapp.com",
  projectId: "webflixgpt",
  storageBucket: "webflixgpt.appspot.com",
  messagingSenderId: "555598188965",
  appId: "1:555598188965:web:785a9f78dc6ca5843a584c",
  measurementId: "G-651F4RVVT7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();