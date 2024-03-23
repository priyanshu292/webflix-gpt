import { API_OPTIONS } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from 'react';

const useTopRatedMovies = () => {
    //FETCHING THE DATA FROM TMDB API AND UPDATING THE STORE
    const dispatch = useDispatch();
    const topRatedMovies = useSelector(store => store.movies.topRatedMovies);


    const getTopRatedMovies = async() => {
        const data = await fetch('https://api.themoviedb.org/3/tv/top_rated', API_OPTIONS);
        const json = await data.json();
        
        dispatch(addTopRatedMovies(json.results));
    }

    useEffect(()=>{
        !topRatedMovies && getTopRatedMovies();
    },[])
}

export default useTopRatedMovies;