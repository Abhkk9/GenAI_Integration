import React from 'react'
import MovieCard from './MovieCard'
import { useSelector } from 'react-redux'

function MovieList() {
    // category can be: "discover", "upcoming", "now_playing", "popular", "top_rated"
    const discoverMovieList = useSelector((state) => state.movies.discoverMovieList);
    const upcomingMovieList = useSelector((state) => state.movies.upcomingMovieList);
    const now_playingMovieList = useSelector((state) => state.movies.nowPlayingMovieList);
    const popularMovieList = useSelector((state) => state.movies.popularMovieList);
    const top_ratedMovieList = useSelector((state) => state.movies.topRatedMovieList);
    
    if(!discoverMovieList) return;
    // console.log(discoverMovieList);

    return (
        <div className=' text-white text-xl'>
        <div>{"Discover"}</div>
        
         <div className='flex px-2 overflow-x-auto scrollbar-thin'>
            {discoverMovieList && discoverMovieList.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
        <div>{"Upcoming"}</div>
        
         <div className='flex px-2 overflow-x-auto scrollbar-thin'>
            {upcomingMovieList && upcomingMovieList.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
        <div>{"Now playing"}</div>
        
         <div className='flex px-2 overflow-x-auto scrollbar-thin'>
            {now_playingMovieList && now_playingMovieList.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
        <div>{"Popular"}</div>
        
         <div className='flex px-2 overflow-x-auto scrollbar-thin'>
            {popularMovieList && popularMovieList.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
        <div>{"Top Rated"}</div>
        
         <div className='flex px-2 overflow-x-auto scrollbar-thin'>
            {top_ratedMovieList && top_ratedMovieList.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
        </div>
       
    );
}

export default MovieList
