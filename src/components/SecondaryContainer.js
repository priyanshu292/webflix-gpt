import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const movies = useSelector((store) => store.movies)

  return (
    (movies.nowPlayingMovies && movies.popularMovies && movies.topRatedMovies && movies.upcomingMovies ) && (
    <div className=' bg-black'>
        <div className='mt-0 lg:-mt-[152px] relative z-20'>
      <MovieList title={"Now Playing"}  movies={movies?.nowPlayingMovies} />
      <MovieList title={"Top Rated"}  movies={movies?.topRatedMovies} />
      <MovieList title={"Upcoming"}  movies={movies?.upcomingMovies} />
      <MovieList title={"Popular"}  movies={movies?.popularMovies} />
      </div>
    </div>
    )
  )
}

export default SecondaryContainer