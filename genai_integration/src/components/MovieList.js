import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ moviesList, title }) {
  return (
    <div className="p-6 ">
    <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
      <div className=" flex overflow-x-scroll">
        <div className="flex  ">
          {moviesList &&
            moviesList.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default MovieList;
