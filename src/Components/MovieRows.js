import React from 'react'
import MovieCard from './MovieCard'
import "./styling.css"

const MovieRows = ({title,movies}) => {
  return (
    <div className='bg-black scroll-auto'>
      <h1 className='text-3xl py-4 text-white'>{title}</h1>
      <div className='flex overflow-hidden hover:overflow-x-scroll'>
      <div className="flex ">
        {
          movies?.map(movie=>(<MovieCard  key={movie.id} poster_path={movie.poster_path} />))
        }
        </div>
      </div>
    </div>
  )
}



export default MovieRows
