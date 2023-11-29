import React from 'react'
import { useEffect } from 'react';
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import {useSelector} from "react-redux"
import {  onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import { setViewGptPage } from '../utils/gptSlice';
import Faviourate from './Faviourate';

const Header = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch()
  const user=useSelector((store)=>store.user);
  const {viewGptPage}=useSelector((store)=>store.gpt)

function clickHandler(){
  const auth = getAuth();
  signOut(auth).then(() => {
     
  }).catch((error) => {
   
  });

}

useEffect(()=>{
  const auth = getAuth();
  const unsubscribe= onAuthStateChanged(auth, (user) => {
    if (user) {
      const {uid,email,displayName}=user;
      dispatch(addUser({uid:uid,email:email,displayName:displayName}));
      navigate("/browse")
      
    } else {
      dispatch(removeUser());
      navigate("/");
    }
  });
     return ()=>unsubscribe;
 },[])

 function handleGptView(){
     dispatch(setViewGptPage());
 }


  return (
    <div className=' justify-between flex   bg-gradient-to-b from-black absolute z-10  w-full '>
      <img  className ="w-40 mr-11" src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt="netflix-logo"/>
      <div>
      {
         user && <div className='flex justify-between'>
          <Faviourate/>
          <button className='p-3 mx-10 bg-purple-800' onClick={handleGptView}>{viewGptPage?"Home Page":"GPT Search "}</button>
          <button className='bg-yellow-800 p-3 m-3 hover:bg-red-600 text-white font-semibold' onClick={clickHandler}>
        SIGNOUT
       </button>
         </div>
      }
      </div>
     
        
    </div>
  )
}

export default Header
