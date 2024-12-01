// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// import firebase from "firebase/app";
// import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER,
  appId: process.env.REACT_APP_APP_ID
  // apiKey: "AIzaSyCC9_OawTa8NFRvTK3l5T0Er7c7UIhk4D0",
  // authDomain: "netflix-clone-b8a53.firebaseapp.com",
  // projectId: "netflix-clone-b8a53",
  // storageBucket: "netflix-clone-b8a53.firebasestorage.app",
  // messagingSenderId: "1076780781970",
  // appId: "1:1076780781970:web:eaa2447ad48534c77db14b"
};
console.log(process.env.REACT_APP_FIREBASE_API_KEY);

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);