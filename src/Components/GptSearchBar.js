import React, { useRef } from 'react'
import openai from '../utils/openai';
import { API_options } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addGptMovies } from '../utils/gptSlice';





const GptSearchBar = () => {
 
     const searchText=useRef(null);
     const dispatch=useDispatch()

     async function getMovies(movie){
        const data= await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=hi&page=1",API_options);
        const json=await data.json();

        return json.results;
  }

  async function handleGptSerach(){
       console.log(searchText.current.value);

        const gptQuery=`Act as a movie recommendation system and suggest some movies for the query ${searchText.current.value} and plz only give me name of 5 movies comma seprated like the given example ahead . Example : Gadar,Leo,Godfather,Pink,Aligarh  ,i hope you got it how you have to give answer`

      // const result= await openai.chat.completions.create({
        //messages: [{ role: 'user', content: gptQuery }],
        //model: 'gpt-3.5-turbo',
      //});
     // console.log(result.choices?.[0]?.message.content);
      //const gptMovies=result.choices?.message.content.split(",");
        const gptMovies=searchText.current.value.split(",");
      const arr=["dhoom","gadar","3 idiots"]
      const data=gptMovies.map((movie)=>getMovies(movie));
      const resultTmdb=await Promise.all(data)
      console.log(resultTmdb);
      dispatch(addGptMovies(resultTmdb));
   }

  return (
    <div className=' pt-[10%] flex justify-center'>
        <form className=' w-1/2 grid grid-cols-10  bg-black' onSubmit={(e)=>e.preventDefault()}>
            <input ref={searchText}
            className='col-span-7 p-2 m-2' type='text' placeholder='Search Whatever You Wanna See'/>
            <button className='col-span-3 p-2 m-3 bg-red-500 rounded-sm text-white' onClick={handleGptSerach}>SEARCH</button>
        </form>
    </div>
  )
}

export default GptSearchBar
