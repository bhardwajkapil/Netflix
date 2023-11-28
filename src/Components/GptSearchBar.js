import React from 'react'

const GptSearchBar = () => {
  return (
    <div className=' pt-[10%] flex justify-center'>
        <form className=' w-1/2 grid grid-cols-10  bg-black '>
            <input className='col-span-7 p-2 m-2' type='text' placeholder='Search Whatever You Wanna See'/>
            <button className='col-span-3 p-2 m-3 bg-red-500 rounded-sm text-white'>SEARCH</button>
        </form>
    </div>
  )
}

export default GptSearchBar
