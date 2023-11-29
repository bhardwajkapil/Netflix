import React from 'react'

const FavPage = ({m}) => {

    console.log(m);
  return (
    <div >
        <div className='text-white bg-yellow-400 z-20 relative '>
            <p>{m.original_title}</p>
        </div>
    </div>
  )
}

export default FavPage
