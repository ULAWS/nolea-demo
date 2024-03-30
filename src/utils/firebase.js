// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "nolea-ulaws.firebaseapp.com",
  projectId: "nolea-ulaws",
  storageBucket: "nolea-ulaws.appspot.com",
  messagingSenderId: "404562347859",
  appId: "1:404562347859:web:085323dadcd1e986b5c3a6",
  measurementId: "G-N0SS7ZNH1T",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
