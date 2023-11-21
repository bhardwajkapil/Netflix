import React from 'react'
import Header from './Header'
import { useState } from 'react'

const Login = () => {

    const[isLoggedInForm,setIsLoggedInForm]=useState(true);

    function handleAuth(){
        setIsLoggedInForm(!isLoggedInForm);
    }
  return (
    <div>
       
       <Header/>
       <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/a09bb938-2d90-42ae-986e-5a3e4abf9e77/8eb1e781-3494-4aa4-9405-268ca6473e4c/IN-en-20231113-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt ="logo"/>
       </div>
        <div className='bg-black  bg-opacity-70  w-3/12 absolute left-96  mx-auto my-32'>
            <h1 className=' mx-4 my-4 text-yellow-50  font-extrabold h-4'>{isLoggedInForm?"SignIn":"SignUp"}</h1>
            <form className='text-white p-5'>
                {!isLoggedInForm && (<input className='my-2 p-2 w-full bg-gray-600 rounded-lg' placeholder='Enter Name'/>)}
                <input className='my-2 p-2 w-full bg-gray-600 rounded-lg' placeholder='Email address'/>
                <input className='my-2 p-2 bg-gray-600 w-full rounded-lg' placeholder='Enter Password'/>
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
