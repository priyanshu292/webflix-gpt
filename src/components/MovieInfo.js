import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS, IMG_LINK } from '../utils/constants';
import { addMovieInfo } from '../utils/moviesSlice';

const MovieInfo = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true); 
  const movieInfo = useSelector((store) => store.movies.movieInfo);
  console.log(movieInfo);

  const fetchMovie = async () => {
    try {
      const response = await fetch('https://api.themoviedb.org/3/movie/'+ id +'?language=en-US', API_OPTIONS);
      const data = await response.json();
      dispatch(addMovieInfo(data));
      setLoading(false); 
    } catch (error) {
      console.error('Error fetching movie information:', error);
      setLoading(false); 
    }
  };

  useEffect(() => {
    const intervalId = setInterval(fetchMovie, 1000); // Fetch every minute
    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [id]);

  if (loading) {
    return <div>
      <Header />
      <div className="bg-black w-full h-screen h-1/12 xl:pt-2 md:pt-8 sm:pt-16 pt-20 w-12/12 flex gap-4 justify-center flex-col items-center">
        <h1 className="xl:text-2xl text-white lg:text-2xl sm:text-lg text-lg md:text-xl font-semibold">
          LOADING...
        </h1>
      </div>
    </div>; 
  }

  return (
    <div className='relative w-full'>
      <Header />
      <div className='w-12/12 mx-auto brightness-[.3] scale-125  xl:scale-105'>
        <img src={IMG_LINK + (movieInfo?.backdrop_path || movieInfo?.belongs_to_collection?.backdrop_path)}  alt='movieInfoBG' />
      </div>
    </div>
  );
};

export default MovieInfo;
