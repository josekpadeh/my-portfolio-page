// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUy3YsejQphDDlouezbpedWmPh9p5sI1g",
  authDomain: "josekeyz-c28c1.firebaseapp.com",
  projectId: "josekeyz-c28c1",
  storageBucket: "josekeyz-c28c1.appspot.com",
  messagingSenderId: "1041956515578",
  appId: "1:1041956515578:web:2a265234618bc9b7b8e343"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const FirebasaeDB = getFirestore(app)