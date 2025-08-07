import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";

export const getMovieTrailer = async (movieId) => {
    // const dispatch = useDispatch();

    // const data = await fetch(
    //   `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
    //   API_OPTIONS
    // );
    // const trailer = await data.json();
    // console.log(trailer);
    const trailerLink= "https://www.youtube.com/embed/9KmGybp4y_Q?si=ADwj03Qo_lnxumrY";
    
    // youtube embeding for SRC  "si=ADwj03Qo_lnxumrY" parameter not working so using hardcoded trailer
    //src="https://www.youtube.com/embed/9KmGybp4y_Q?si=ADwj03Qo_lnxumrY"  
    // src="https://www.youtube.com/embed/d9erkpdh5o0?si=ruqAQb_mESVbNPrR" 
    // setTrailerLink( `https://www.youtube.com/embed/${trailer.key}`);
    // dispatch(addDiscoverMovieList(json.results))
   
    return trailerLink;
};
  
  
  

