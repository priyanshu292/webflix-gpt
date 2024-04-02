import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS, IMG_LINK } from '../utils/constants';
import { addMovieInfo } from '../utils/moviesSlice';
import MovieContent from './MovieContent';
import MovieMid from './MovieMid';

const MovieInfo = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true); 
  const movieInfo = useSelector((store) => store.movies.movieInfo);
  const path = window.location.pathname;

  const fetchMovie = async () => {
    try {
      let apiUrl;
      if (path.includes('/movie/')) {
        apiUrl = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
      } else if (path.includes('/tv/')) {
        apiUrl = `https://api.themoviedb.org/3/tv/${id}?language=en-US`;
      } else {
        // Handle invalid path
        return;
      }

      const response = await fetch(apiUrl, API_OPTIONS);
      const data = await response.json();
      dispatch(addMovieInfo(data));
      setLoading(false); 
    } catch (error) {
      console.error('Error fetching movie information:', error);
      setLoading(false); 
    }
  };

  useEffect(() => {
    fetchMovie();
  }, [id, path]);

  if (loading) {
    return (
      <div>
        <Header />
        <div className="bg-black w-full h-screen h-1/12 xl:pt-2 md:pt-8 sm:pt-16 pt-20 w-12/12 flex gap-4 justify-center flex-col items-center">
          <h1 className="xl:text-2xl text-white lg:text-2xl sm:text-lg text-lg md:text-xl font-semibold">
            LOADING...
          </h1>
        </div>
      </div>
    ); 
  }

  return (
    <div className="relative w-full">
      <Header />
      <div className="h-[100vh] w-[100%] top-0 absolute -z-10 overflow-hidden bg-black">
        <img className='w-12/12 mx-auto brightness-[.3] scale-125  xl:scale-105 ' 
        src={IMG_LINK + (movieInfo?.backdrop_path || movieInfo?.belongs_to_collection?.backdrop_path)}  
        alt="movieInfoBG" />
      </div>
      <MovieContent info={movieInfo} />
      <div className="hidden md:block lg:block xl:block">
        <MovieMid id={movieInfo?.id}/>
      </div>
    </div>
  );
};

export default MovieInfo;
