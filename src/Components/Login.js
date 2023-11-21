import React from 'react'
import Header from './Header'
import { useState,useRef } from 'react'
import validateForm from '../utils/ValidationForm'
import {   getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword  } from "firebase/auth";


const Login = () => {

    const[isLoggedInForm,setIsLoggedInForm]=useState(true);
    const [errmsg,setErrormsg]=useState(null);

    const email=useRef(null);
    const password=useRef(null);

    function handleAuth(){
        setIsLoggedInForm(!isLoggedInForm);
    }

    function submitHandler(e){
        //const auth = getAuth();
        e.preventDefault();
        const data=validateForm(email.current.value,password.current.value);
        setErrormsg(data);
        if(data) return;
        
        if(!isLoggedInForm){
            const auth = getAuth();
            createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
              .then((userCredential) => {
                const user = userCredential.user;
                 console.log(user);
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                 setErrormsg(errorMessage);
               
              });
            
        }else{
            const auth = getAuth();
             signInWithEmailAndPassword(auth, email.current.value,password.current.value)
             .then((userCredential) => {
    
             const user = userCredential.user;
             console.log(user);
  
             })
               .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrormsg(errorMessage)
        });


        }
    }

  return (
    <div>
       
       <Header/>
       <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/a09bb938-2d90-42ae-986e-5a3e4abf9e77/8eb1e781-3494-4aa4-9405-268ca6473e4c/IN-en-20231113-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt ="logo"/>
       </div>
        <div className='bg-black  bg-opacity-70  w-3/12 absolute left-96  mx-auto my-32'>
            <h1 className=' mx-4 my-4 text-yellow-50  font-extrabold h-4'>{isLoggedInForm?"SignIn":"SignUp"}</h1>
            <form  onSubmit={submitHandler}  className='text-white p-5'>
                {!isLoggedInForm && (<input className='my-2 p-2 w-full bg-gray-600 rounded-lg' placeholder='Enter Name'/>)}
                <input ref={email} className='my-2 p-2 w-full bg-gray-600 rounded-lg' placeholder='Email address'/>
                <input ref={password} className='my-2 p-2 bg-gray-600 w-full rounded-lg' placeholder='Enter Password'/>
                <p className='text-red-700 font-thin p-2 m-2'>{errmsg}</p>
                <button className='bg-red-800 w-full h-10 rounded-lg'>
                    {isLoggedInForm?"SignIn":"SignUp"}
                </button>
            </form>
            <p className=' text-yellow-400  py-2 mx-10 cursor-pointer' onClick={handleAuth}>{isLoggedInForm?"New User?SignUp First":"Already a user?signin"}</p>
        </div>
       
    </div>
  )
}

export default Login
