import React from 'react'
import MovieRows from './MovieRows'
import { useSelector } from 'react-redux'

const MovieList = () => {
    const movies=useSelector((store)=>store.movie);
  return (
    <div className= ' bg-black -mt-34' >
      <div >
        <MovieRows title="Now Playing Movies" movies={movies.nowPlayingMovies}/>
        <MovieRows title="Trending Movies" movies={movies.popularMovies}/>
        <MovieRows title="Now Playing Movies" movies={movies.topRatedMovies}/>
        <MovieRows title="Upcoming" movies={movies.upComingMovies}/>
       
      </div>
    </div>
  )
}

export default MovieList
