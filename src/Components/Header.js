import React from 'react'
import { useEffect } from 'react';
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import {useSelector} from "react-redux"
import {  onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';

const Header = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch()
  const user=useSelector((store)=>store.user);

function clickHandler(){
  const auth = getAuth();
  signOut(auth).then(() => {
     
  }).catch((error) => {
   
  });

}

useEffect(()=>{
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const {uid,email,displayName}=user;
      dispatch(addUser({uid:uid,email:email,displayName:displayName}));
      navigate("/browse")
      
    } else {
      dispatch(removeUser());
      navigate("/");
    }
  });
     
 },[])


  return (
    <div className=' flex justify-between absolute z-10 shadow-lg w-full'>
      <img  className ="w-40" src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt="netflix-logo"/>
      {
         user && <button className='bg-red-800 p-3 m-3 text-white font-semibold' onClick={clickHandler}>
        SIGNOUT
       </button>

      }
        
    </div>
  )
}

export default Header
