import { API_OPTIONS } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from 'react';

const usePopularMovies = () => {
    //FETCHING THE DATA FROM TMDB API AND UPDATING THE STORE
    const dispatch = useDispatch();
    const popularMovies = useSelector(store => store.movies.popularMovies);


    const getPopularMovies = async() => {
        const data = await fetch('https://api.themoviedb.org/3/tv/popular', API_OPTIONS);
        const json = await data.json();
        
        dispatch(addPopularMovies(json.results));
    }

    useEffect(()=>{
        !popularMovies && getPopularMovies();
    },[])
}

export default usePopularMovies;