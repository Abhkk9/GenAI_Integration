import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import {addMoviesList} from '../utils/moviesSlice'


const useMoviesList =() =>{

     const dispatch = useDispatch();
    
      const getMovieList = async () =>{
        const data = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', API_OPTIONS)
        const json = await data.json();                  
        console.log(json);
        dispatch(addMoviesList(json.results))                 
      }
      useEffect(()=>{
        getMovieList();
      } ,[]);

}

export default useMoviesList;