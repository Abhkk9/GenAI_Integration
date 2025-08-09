import React from "react";
import Header from "./Header";
import useMoviesList from "../hooks/useMoviesList";
import PreviewContainer from "./PreviewContainer";
import MovieListContainer from "./MovieListContainer";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";
export default function Browse() {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const categorties = [
    "discover",
    "upcoming",
    "now_playing",
    "popular",
    "top_rated",
  ];
  useMoviesList(categorties[0]);
  useMoviesList(categorties[1]);
  useMoviesList(categorties[2]);
  useMoviesList(categorties[3]);
  useMoviesList(categorties[4]);

  return (
    <div className="bg-black">
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <PreviewContainer />
          <MovieListContainer />
        </>
      )}
    </div>
  );
}
