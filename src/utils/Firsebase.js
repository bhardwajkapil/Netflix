// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyDw06E4MHcuHGjEFzsdMC1i_U7j24fdphc",
  authDomain: "netflixgpt-91e72.firebaseapp.com",
  projectId: "netflixgpt-91e72",
  storageBucket: "netflixgpt-91e72.appspot.com",
  messagingSenderId: "308195394376",
  appId: "1:308195394376:web:872ea8c0217f768355297d",
  measurementId: "G-KRTQ7W4B8D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

 //export const auth = getAuth();