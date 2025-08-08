import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";
function VideoBackground({ movieId }) {
  // try with redux store to save value for trailer
  // const dispatch = useDispatch();
  const [trailerLink, setTrailerLink] = useState();

  const getMovieTrailer = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const trailer = await data.json();
    console.log(trailer);
    setTrailerLink(
      "https://www.youtube.com/embed/a6VVrAZUnsc?si=ATCCnDwGiADkzUNe"
    );

    // youtube embeding for SRC  "si=ADwj03Qo_lnxumrY" parameter not working so using hardcoded trailer
    //src="https://www.youtube.com/embed/9KmGybp4y_Q?si=ADwj03Qo_lnxumrY"
    // src="https://www.youtube.com/embed/d9erkpdh5o0?si=ruqAQb_mESVbNPrR"
    // setTrailerLink( `https://www.youtube.com/embed/${trailer.key}`);
    // dispatch(addDiscoverMovieList(json.results))
  };

  useEffect(() => {
    getMovieTrailer();
  }, []);

  return (
    <div className="w-screen ">
      <iframe
        className="w-screen aspect-video"
        src={trailerLink + "&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
}

export default VideoBackground;
