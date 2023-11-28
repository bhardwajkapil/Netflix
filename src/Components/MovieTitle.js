import React from 'react'

const MovieTitle = ({title,overview}) => {
   
  return (
    <div className="pt-[20%]  absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
       <h1 className='font-bold text-white text-6xl '>{title}</h1>
       <p className='text-md py-7 w-1/3'>{overview}</p>
       <div>
        <button className='bg-white text-black py-2 px-10 bg-opacity-80 rounded-md'>PLAY </button>
        <button className='bg-yellow-400 text-white py-2 px-12 mx-2 hover:bg-opacity-50 bg-opacity-80 rounded-md'>More Info</button>
       </div>
    </div>
  )
}

export default MovieTitle
