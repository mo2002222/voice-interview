// Import the functions you need from the SDKs you need
import { initializeApp,getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXn8lS6dXdCi6w-Xpv5IjcwM4WjLCNgL4",
  authDomain: "prepwise-7e6f6.firebaseapp.com",
  databaseURL: "https://prepwise-7e6f6-default-rtdb.firebaseio.com",
  projectId: "prepwise-7e6f6",
  storageBucket: "prepwise-7e6f6.firebasestorage.app",
  messagingSenderId: "688209554379",
  appId: "1:688209554379:web:f5bb7c119586ca2f08244e",
  measurementId: "G-EZDSPXYXTX"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);