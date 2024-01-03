// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTz0EyhrWHxRys7TfdnbiMtjeme9IZXTQ",
  authDomain: "myshop-606ef.firebaseapp.com",
  projectId: "myshop-606ef",
  storageBucket: "myshop-606ef.appspot.com",
  messagingSenderId: "893805094863",
  appId: "1:893805094863:web:8ea3b7ce58882f437f54ba",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
