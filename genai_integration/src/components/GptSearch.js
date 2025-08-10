import React from 'react';
import GptSearchPage from './GptSearchPage';
import GptSearchBar from "./GptSearchBar";
function GptSearch() {
  return (
    <>
    <div className='fixed -z-10'>
      <img
        className=" h-screen object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_small.jpg"
        alt="Background poster"
      />
    </div>
    
      <div  className=''>
    
    <GptSearchBar/>
    <GptSearchPage/>

    </div>
    </>
    
  )
}

export default GptSearch
