// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
// import { getDatabase } from "firebase/database"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyDmnVqynGu_wMlTE8_UNvswHRYTl4It0WE",
  authDomain: "project-4cfa9.firebaseapp.com",
  projectId: "project-4cfa9",
  storageBucket: "project-4cfa9.appspot.com",
  messagingSenderId: "286864268800",
  appId: "1:286864268800:web:683278d2e47a41d3ea42e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export let db = getFirestore(app);
export const Auth = getAuth(app);
// export const database = getDatabase(app)