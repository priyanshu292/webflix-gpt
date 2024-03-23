import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from 'react';

const useTopRatedMovies = () => {
    //FETCHING THE DATA FROM TMDB API AND UPDATING THE STORE
    const dispatch = useDispatch();

    const getTopRatedMovies = async() => {
        const data = await fetch('https://api.themoviedb.org/3/tv/top_rated', API_OPTIONS);
        const json = await data.json();
        
        dispatch(addTopRatedMovies(json.results));
    }

    useEffect(()=>{
        getTopRatedMovies();
    },[])
}

export default useTopRatedMovies;