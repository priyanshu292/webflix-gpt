import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addCast } from "../utils/moviesSlice";


const useCast = (id) => {
  const dispatch = useDispatch();
  const path = window.location.pathname;

  const fetchMovie = async () => {
    try{
      let apiUrl;
      if (path.includes('/movie/')){
        apiUrl = "https://api.themoviedb.org/3/movie/"+ id +"/credits?language=en-";
      } else if (path.includes('/tv/')) {
        apiUrl =  "https://api.themoviedb.org/3/tv/"+ id +"/credits?language=en-";
      }else {
        // Handle invalid path
        return;
      }
      const response = await fetch(apiUrl, API_OPTIONS);
      const data = await response.json();
      dispatch(addCast(data));
    }catch (error) {
      console.error('Error fetching movie information:', error); 
    }
  };

  useEffect(() => {
    fetchMovie();
  }, [path]);
};
export default useCast;