import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {

    const movies = useSelector((store)=> store.movies?.nowPlayingMovies);

    if(!movies) return (
      <div className='bg-black text-white h-screen test-lg sm:text-xl md:text-2xl lg:text-4xl font-bold flex flex-col justify-center items-center p-4'>
        <h2 className="text-center">
          PLEASE USE VPN TO LOAD MOVIES...
        </h2>
      </div>
    )

    if(movies === null) return; //EARLY RETURN

    const mainMovie = movies[0];

    const {original_title, overview, id} = mainMovie;

  return ( 
    <div className='w-screen bg-black pt-[43%] md:pt-0'>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  )
}

export default MainContainer