import React from 'react'
import MovieCard from './MovieCard'
import "./styling.css"
import { Link } from 'react-router-dom';

const MovieRows = ({title,movies}) => {
  //console.log(movies);
  return (
    <div className='bg-black movie-row scroll-auto'>
      <h1 className='text-3xl p-4 text-white'>{title}</h1>
      <div className='flex overflow-hidden movie-row hover:overflow-x-scroll'>
      <div className="flex movie-row ">
      {
             movies?.map(movie => (
              <Link to={`/browse/${movie.id}`}>
              <MovieCard  key={movie.id} poster_path={movie.poster_path} />
            </Link>
      ))
     }
      
        </div>
      </div>
    </div>
  )
}



export default MovieRows
