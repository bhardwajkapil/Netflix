import React from 'react'
import { IMG_CDN } from '../utils/constants'

const MovieCard = ({poster_path}) => {
  return (
    <div className=' hover:scale-105 pr-3 w-40 '>
        <img  src={IMG_CDN + poster_path}/>
    </div>
  )
}

export default MovieCard
