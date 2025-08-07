// import React, { useEffect } from 'react'
// import { API_OPTIONS } from '../utils/constants'
// import { useDispatch } from 'react-redux'
// import {addDiscoverMovieList} from '../utils/moviesSlice'

// // 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1'
// // 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1'
// // 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'
// // https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1

// const useMoviesList =() =>{

//      const dispatch = useDispatch();
    
//       const getMovieList = async () =>{
//         const data = await fetch('https://api.themoviedb.org/3/discover/movie?include_video=false&language=en-US&page=1&sort_by=popularity.desc', API_OPTIONS)
//         const json = await data.json();                  
//         console.log(json);
//         dispatch(addDiscoverMovieList(json.results))                 
//       }
//       useEffect(()=>{
//         getMovieList();
//       } ,[]);

// }

// export default useMoviesList;

import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import {
  addDiscoverMovieList, addNowPlayingMovieList, addUpcomingMovieList, addPopularMovieList,addTopRatedMovieList
} from '../utils/moviesSlice';

// category can be: "discover", "upcoming", "now_playing", "popular", "top_rated"
const useMoviesList = (category) => {
  const dispatch = useDispatch();

  const endpoints = {
    discover: 'https://api.themoviedb.org/3/discover/movie?include_video=false&language=en-US&page=1&sort_by=popularity.desc',
    upcoming: 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',
    now_playing: 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
    popular: 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
    top_rated: 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1'
  };

  const dispatchers = {
    discover: addDiscoverMovieList,
    upcoming: addUpcomingMovieList,
    now_playing: addNowPlayingMovieList,
    popular: addPopularMovieList,
    top_rated: addTopRatedMovieList
  };

  useEffect(() => {
    const getMovieList = async () => {
      const url = endpoints[category] ;
      const data = await fetch(url, API_OPTIONS);
      const json = await data.json();
      const dispatcher = dispatchers[category] ;
      dispatch(dispatcher(json.results));
    };
    getMovieList();
  }, [category, dispatch]);

};

export default useMoviesList;