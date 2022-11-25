// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcfdLitEv0ylbs3EYWFZODSUbvIhQAj8k",
  authDomain: "my-portfolio-app-c5a67.firebaseapp.com",
  projectId: "my-portfolio-app-c5a67",
  storageBucket: "my-portfolio-app-c5a67.appspot.com",
  messagingSenderId: "310813936546",
  appId: "1:310813936546:web:009dcee1a4bd5f687600fb",
  measurementId: "G-5LHQB8DPGV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const FirestoreDB = getFirestore(app);
const analytics = getAnalytics(app);