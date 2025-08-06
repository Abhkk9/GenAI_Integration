import React from 'react'
import Header from './Header'
import useMoviesList from '../hooks/useMoviesList'
import PreviewContainer from './PreviewContainer';
import MovieListContainer from './MovieListContainer';

export default function Browse() {

  useMoviesList();

  return (
    <div>
      <Header/>
      <PreviewContainer/>
      <MovieListContainer/>
    </div>
  )
}

