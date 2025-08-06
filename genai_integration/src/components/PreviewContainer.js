import React from 'react'
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

function PreviewContainer() {

  const movies = useSelector ((store)=> store.movies?.movieList);
  if(movies === null) return;
  const displayMovie =movies[0];
  console.log(displayMovie);
  const {original_title,overview,id} =displayMovie;
  return (
    <div>
      <VideoTitle title={original_title} overview ={overview}/>
      <VideoBackground movieId={id}/>
    </div>
  )
}

export default PreviewContainer
