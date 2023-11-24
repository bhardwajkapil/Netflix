import React, { useEffect } from 'react'
import Header from './Header'
import { API_options } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/movieSlice';



const Browse = () => {
  const dispatch=useDispatch();

  async function nowPlayingMovies(){
        const data= await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_options);
        const res=await data.json();
        console.log(res);
        dispatch(addNowPlayingMovies(res.results));
  }

  useEffect(()=>{
    nowPlayingMovies();
  },[])

  return (
    <div>
      <Header/>
    </div>
  )
}

export default Browse
