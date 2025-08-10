import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
function MovieListContainer() {

    // category can be: "discover", "upcoming", "now_playing", "popular", "top_rated"
    const discoverMovieList = useSelector((state) => state.movies.discoverMovieList);
    const upcomingMovieList = useSelector((state) => state.movies.upcomingMovieList);
    const now_playingMovieList = useSelector((state) => state.movies.nowPlayingMovieList);
    const popularMovieList = useSelector((state) => state.movies.popularMovieList);
    const top_ratedMovieList = useSelector((state) => state.movies.topRatedMovieList);
    
  if(!discoverMovieList) return;
  return (
    <div className='bg-black '>
      <div className='mt-0 md:-mt-52  relative  z-20'>
    <MovieList moviesList={discoverMovieList} title={"Discover"}/>
      <MovieList moviesList={upcomingMovieList} title={"Upcoming"}/>
      <MovieList moviesList={now_playingMovieList} title={"Now playing"}/>
      <MovieList moviesList={popularMovieList} title={"Popular"}/>
      <MovieList moviesList={top_ratedMovieList} title={"Top Rated"}/>
      </div>
      
    </div>
  )
}

export default MovieListContainer
