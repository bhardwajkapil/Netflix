import React, { useRef, useState } from 'react'
import { API_options } from '../utils/constants';
import FavPage from './FavPage';
import { Link } from 'react-router-dom';
import { IMG_CDN } from '../utils/constants';


const Temp = ({fav,show,setShow}) => {

    window.addEventListener('click', () => {
        setShow(false);
      });
   
    return (
         <div>
            {
                show && <div className=' bg-slate-400  relative w-72 rounded-md opacity-80 left-2 z-30 '>
                     
                <ul>
                  {    
                          fav.map((m)=>(
                            
                            <Link to={`/browse/${m.id}`}><div className='text-black bg-slate-300 flex'>
                                 <img className='w-10 h-10' src={IMG_CDN + m.poster_path}/>
                                <li className='hover:text-yellow-500  ml-2 border-slate-500'>{m.original_title}<span className='mx-8'>{m.original_language}</span></li></div></Link>
                              
                          ))
                  }
              </ul>
          </div>
            }
         </div>
    )
  }
  
  
  
  
  
  
  const Faviourate = () => {
      const query=useRef(null);
      const[fav,setFav]=useState([]);
      const[show,setShow]=useState(false);
   
      async  function handleFaviourateSerach(){
          const data= await fetch("https://api.themoviedb.org/3/search/movie?query="+ query.current.value +"&include_adult=false&page=1",API_options);
          const json=await data.json();
         
          setFav(json.results);
          setShow(true);
          console.log(fav);
  
       }
      
  
    return (
      <div className='absolute right-72'> 
           <form className='mr-28 grid grid-cols-10  bg-black' onSubmit={(e)=>e.preventDefault()}>
              <input ref={query}
              className='col-span-8 p-2 mt-4 rounded-l-lg' type='text' placeholder='Search Any Movie'/>
              <button className='col-span-2 p-2 mt-4 bg-red-500 rounded-sm rounded-r-lg text-white' onClick={handleFaviourateSerach}>SEARCH</button>
          </form>
          
              <Temp fav={fav} show={show} setShow={setShow}/>
      </div>
    )
  }
  
  export default Faviourate