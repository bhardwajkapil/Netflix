import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptRecommend from './GptRecommend'

const GptSearch = () => {
  return (
    <div >    
        <div className='absolute -z-10'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/a09bb938-2d90-42ae-986e-5a3e4abf9e77/8eb1e781-3494-4aa4-9405-268ca6473e4c/IN-en-20231113-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt ="logo"/>
       </div>
        <GptSearchBar/>
        <GptRecommend/>
    </div>
  )
}

export default GptSearch
