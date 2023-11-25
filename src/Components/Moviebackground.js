import React, { useState,useEffect } from 'react'
import { API_options } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux';
import { addMovieTrailer } from '../utils/movieSlice';


const Moviebackground = ({movie_id}) => {
    const [isLoading, setIsLoading] = useState(true);
    const dispatch=useDispatch();
    const movieTrailer=useSelector((store)=>store.movie?.movieTrailer);
    

   

    useEffect(() => {
        async function getMovieTrailer() {
          const data = await fetch('https://api.themoviedb.org/3/movie/'+ movie_id +'/videos?language=en-US', API_options);
          const json = await data.json();
          const filterData = json.results.filter((data) => data.type === "Trailer");
          const trailer = filterData.length ? filterData[0] : json.results[0];
          dispatch(addMovieTrailer(trailer));
          setIsLoading(false);
        }
      
        getMovieTrailer();
      }, []);

  return (
      <div>
        {isLoading ? (
  <div>Loading movie trailer...</div>
) : (
  <div>
    <iframe
      className="w-screen aspect-video"
      src={"https://www.youtube.com/embed/" + movieTrailer.key +"?&autoplay=1&mute=1"}
    ></iframe>
  </div>
)}
      </div>    
  )
}

export default Moviebackground
