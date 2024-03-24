import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import Shimmer from "./Shimmer";

const GptMovieSuggestions = () => {
  
  const gpt = useSelector((store) => store.gpt);
  const { movieNames, movieResults } = gpt;

  if (!movieNames && !movieResults) {
    return <Shimmer />;
  }

  return (
    <div className="bg-black p-5 text-white">
      <div>
        {movieNames.map((i, index) => (
          <MovieList key={i} title={i} movies={movieResults[index]} />
        ))}
      </div>
    </div>
  ); 
};

export default GptMovieSuggestions;
