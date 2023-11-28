// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyCjG99NZTam-Olb0MnwHm3GvEMvhmlwMvk",
  authDomain: "netflixx-45e17.firebaseapp.com",
  projectId: "netflixx-45e17",
  storageBucket: "netflixx-45e17.appspot.com",
  messagingSenderId: "822975228281",
  appId: "1:822975228281:web:956e40a0fa633c72df67a8",
  measurementId: "G-WM9960W80Q"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);