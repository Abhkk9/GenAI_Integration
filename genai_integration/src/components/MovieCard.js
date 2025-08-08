import React from 'react'
import { IMG_URL } from '../utils/constants';

function Moviecard({posterPath}) {
  const poster_path = IMG_URL + posterPath;
  console.log(posterPath);
  return (
    // w-48
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