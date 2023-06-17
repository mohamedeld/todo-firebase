import {handleAuth} from "./auth";
import {handleTodo} from "./todos";

import './style.css'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRbAz8ySjE514hSResTCUtz2tIWoy4kUs",
  authDomain: "clips-498d1.firebaseapp.com",
  projectId: "clips-498d1",
  storageBucket: "clips-498d1.appspot.com",
  messagingSenderId: "356900126007",
  appId: "1:356900126007:web:798a80f5c07df2b2c72eb2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


handleAuth();
handleTodo();