import React from 'react'
import {useSelector} from "react-redux"
import Moviebackground from './Moviebackground';
import MovieTitle from './MovieTitle';

const MovieContainer = () => {
    const movies=useSelector((store)=>store.movie.nowPlayingMovies);
    if(!movies)return;

   const mainMovie=movies[3];
   const {original_title,overview,id}=mainMovie;

  return (
    <div className='bg-black'>
        <MovieTitle title={original_title} overview={overview} />
        <Moviebackground movie_id={id} />
    </div>
  )
}

export default MovieContainer
