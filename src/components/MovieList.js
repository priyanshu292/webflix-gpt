import React from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

const MovieList = ({ title, movies , tv }) => {
  
  return (
    <div className="px-6 text-white">
      <h1 className="text-lg sm:text-2xl md:text-3xl py-4">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-hidden">
        <div className="flex">
          {movies?.map((i) => (
            <Link to={"/movie/" + i?.id} key={i?.id}>
              <MovieCard
                key={i?.id}
                posterPath={i?.poster_path || i?.profile_path}
              />
            </Link>
          ))}
          {tv?.map((i) => (
            <Link to={"/tv/" + i?.id} key={i?.id}>
              <MovieCard
                key={i?.id}
                posterPath={i?.poster_path || i?.profile_path}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
