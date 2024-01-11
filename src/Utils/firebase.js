// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBO5Fz1OtYs2YPNZQUja2ck9mN7e_nd8c",
  authDomain: "kettle-fire-3c25f.firebaseapp.com",
  projectId: "kettle-fire-3c25f",
  storageBucket: "kettle-fire-3c25f.appspot.com",
  messagingSenderId: "756666327591",
  appId: "1:756666327591:web:fda7fe62aa9f0eb007a402",
  measurementId: "G-RHNXFL0R58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();