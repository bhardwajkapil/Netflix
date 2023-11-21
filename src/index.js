import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";


const root = ReactDOM.createRoot(document.getElementById('root'));

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


 //export const auth = getAuth();


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
