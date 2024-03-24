import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addCast } from "../utils/moviesSlice";

const useCast = (id) => {
  const dispatch = useDispatch();

  const fetchMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/"+ id +"/credits?language=en-",
      API_OPTIONS
    );

    const json = await data.json();

    dispatch(addCast(json));
  };

  useEffect(() => {
    fetchMovie();
  }, []);
};
export default useCast;