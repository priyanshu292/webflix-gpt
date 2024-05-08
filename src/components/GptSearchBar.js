import React, { useRef } from "react";
import language from "../utils/language";
import { useDispatch, useSelector } from "react-redux";
//import openai from "../utils/openai"
import { genAI } from "../utils/constants";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice"


const GptSearchBar = () => {

  const dispatch =useDispatch();
  const myLang = useSelector((store) => store.language.lang);
  const searchText = useRef(null);

  // Search movie in TMDB.
  const searchMovieTMDB = async(movie)=>{
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_OPTIONS);

    const json = await data.json();
  
    return json.results;
  }

  const handleGptSearch = async() => { 
    // Make an API call to GPT API and get Movie Results

     const gptQuery = "Act as a Movie Recommendation System and suggest some movies for the query : " + searchText.current.value + ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Results: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    //  const gptResults = await openai.chat.completions.create({
    //     messages: [{ role: 'user', content: gptQuery }],
    //     model: 'gpt-3.5-turbo',
    //   });

    //   if(!gptResults?.choices){
    //     //TODO write error handling
    //   }

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(gptQuery);
    const response = await result.response;
    const gptResults = response.text();

    const gptMovies = gptResults.split(",");
    
    //const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
    
    //For each movie i will search TMDB API.
    const promiseArray = gptMovies.map((movie)=>searchMovieTMDB(movie)); //it returns me 5 Promises because search        
    //is a async function.

    const finalResults = await Promise.all(promiseArray);

    dispatch(addGptMovieResult({movieNames: gptMovies ,movieResults: finalResults})); //added array of arrays in gptSlice

  }

  return (
    <div className="pt-[40%] md:pt-[10%] sm:pt-[25%] flex justify-center">
      <form className="w-full sm:w-1/2 md:w-1/2 bg-black grid grid-cols-12" onSubmit={(e)=>e.preventDefault()}>
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={language[myLang].placeholder}
        />
        <button className="py-2 px-2 md:px-4 col-span-3 m-4 bg-red-700 text-white rounded-sm"
        onClick={handleGptSearch}>
          {language[myLang].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;