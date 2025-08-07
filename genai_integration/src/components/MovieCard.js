import React from 'react'

function Moviecard(props) {
  const poster_path = `https://image.tmdb.org/t/p/w500${props.movie.poster_path}`;
  return (
    <div className='px-2 min-w-[180px] max-w-[220px]'>
      <img
        alt="poster"
        src={poster_path}
        className="rounded-lg shadow-lg w-full h-[250px] object-cover"
      />
    </div>
  );
}

export default Moviecard