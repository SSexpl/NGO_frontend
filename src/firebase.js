// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apikey,
  //"AIzaSyAFDLnfWxAhXgXsVr4dwrbL3KXFnJY7NlM",
  authDomain: "fire1-288d8.firebaseapp.com",
  projectId: "fire1-288d8",
  storageBucket: "fire1-288d8.appspot.com",
  messagingSenderId: "940030801065",
  appId: "1:940030801065:web:f7d8d67d4a88ad80ada5b8",
  measurementId: "G-QWW8JGCJD5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const storage=getStorage(app);