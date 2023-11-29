import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { API_options } from '../utils/constants';
import { useEffect,useState } from 'react';
import { IMG_CDN } from '../utils/constants';
import { Link } from 'react-router-dom';
import Header from './Header';



const InfoPage = () => {
  const {id}=useParams();
  const [trailerKey,setTrailerKey]=useState(null);
  const navigate=useNavigate();
  const [movieDetails,setMovieDetails]=useState(null);
 // console.log(id);
 useEffect(() => {
  async function getMovieTrailer() {
    try {
      const data = await fetch('https://api.themoviedb.org/3/movie/'+ id +'/videos?language=en-US', API_options);
      const json = await data.json();
      const filterData = json.results.filter((data) => data.type === "Trailer");

      if (filterData.length > 0 && filterData[0].key) {
        setTrailerKey(filterData[0].key);
      } else {
        console.error("No trailer key found.");
        // Handle the case when no trailer is available, e.g., show a message or set a default trailer key.
      }
    } catch (error) {
      console.error("Error fetching trailer data:", error);
      // Handle the error, e.g., show an error message to the user.
    }
  }

  getMovieTrailer();
}, [id]);
  

  useEffect(() => {
    async function getMovieDetails() {
      const data = await fetch('https://api.themoviedb.org/3/movie/'+id+'?language=en-US', API_options);
      const json = await data.json();
      console.log(json);
      setMovieDetails(json);
      //console.log(movieDetails);
      
    }
  
    getMovieDetails();
  }, []);


  function handllePrevPage(){
      navigate(-1);
  }


  

  return (
   movieDetails && <div className='bg-black'>
         
         <h1 className='text-blue-600 text-center text-5xl bg-blue-200'>
        {movieDetails.original_title}
        <button className='bg-red-400 mx-48 text-lg rounded-md hover:bg-red-300   my-2 p-2  text-white' onClick={handllePrevPage}>GO BACK</button>
       </h1>
    <iframe
      className="w-full  aspect-video  border-spacing-0 mx-auto m-4 p-4"
      src={"https://www.youtube.com/embed/" + trailerKey +"?&autoplay=1&mute=1"}
    ></iframe>

      
       <h1 className='text-red-800  font-bold text-2xl mx-96 italic underline'><a href={movieDetails.homepage}> VISIT OFFICIAL HOMEPAGE:{movieDetails.homepage}</a> </h1>
      <div>
        <div className='flex justify-center'>
        <img className='w-40 h-40  ' src={IMG_CDN + movieDetails.backdrop_path}/>
        <h1 className='w-1/2 font-extrabold text-blue-600  p-2  m-2'>{movieDetails.overview}</h1>
        
        </div >
        <div className="content-center flex">
        
        <h1 className='text-red-600 text-xl '>VOTE AVERAGE:{movieDetails.vote_average}</h1>
        <h1 className='text-red-600 text-xl '>VOTE COUNT:{movieDetails.vote_count}</h1>
        </div>
      </div>
    </div>
  )
}

export default InfoPage
