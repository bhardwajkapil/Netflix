import React, { useEffect } from 'react'
import Header from './Header'
import { API_options } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addNowPlayingMovies, addPopularMovies, addTopRatedMovies, addUpcomingMovies } from '../utils/movieSlice';
import MovieContainer from './MovieContainer';
import MovieListContainer from './MovieListContainer';
import GptSearch from './GptSearch';





const Browse = () => {
  const dispatch=useDispatch();
  const {viewGptPage}=useSelector((store)=>store.gpt)

  async function nowPlayingMovies(){
        const data= await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_options);
        const res=await data.json();
       // console.log(res);
        dispatch(addNowPlayingMovies(res.results));
  }

  async function popularMovies(){
    const data= await fetch('https://api.themoviedb.org/3/movie/popular?page=2', API_options);
    const res=await data.json();
    //console.log(res);
    dispatch(addPopularMovies(res.results));
  }

  async function topRatedMovies(){
    const data= await fetch('https://api.themoviedb.org/3/movie/top_rated?page=2', API_options);
    const res=await data.json();
   // console.log(res);
    dispatch(addTopRatedMovies(res.results));
  }
  
  async function upComingMovies(){
    const data= await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_options);
    const res=await data.json();
   // console.log(res);
    dispatch(addUpcomingMovies(res.results));
}
  



  useEffect(()=>{
    nowPlayingMovies();
    popularMovies();
  },[])

  useEffect(()=>{
    topRatedMovies();
    upComingMovies();
  },[])

  return (
    <div className=''>
      <div>
      <Header/>
      </div>
      {
        viewGptPage ? 
        ( <GptSearch/>):
        (<div><MovieContainer/>
        <MovieListContainer/></div>)
      }
      
    
    </div>
  )
}

export default Browse
