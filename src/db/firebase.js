// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFx2wrMk048ANED4cK6gikPwEaX8jWq5M",
  authDomain: "jose-5eb93.firebaseapp.com",
  projectId: "jose-5eb93",
  storageBucket: "jose-5eb93.appspot.com",
  messagingSenderId: "121203881793",
  appId: "1:121203881793:web:59428a94e55577234753c0",
  measurementId: "G-M6PWNP6Q1G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const FirebasaeDB = getFirestore(app)