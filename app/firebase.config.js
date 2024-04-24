// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCP9LX36M6y0ZAcsIENDM-C4e-5wDapTqE",
  authDomain: "login-ff957.firebaseapp.com",
  projectId: "login-ff957",
  storageBucket: "login-ff957.appspot.com",
  messagingSenderId: "854852989976",
  appId: "1:854852989976:web:d1b3f9dd167adb55a23f6d",
  measurementId: "G-S0FLBB6NLV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);