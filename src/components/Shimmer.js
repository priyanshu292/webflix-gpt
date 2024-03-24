import React from 'react'
import noResult from "../assets/noResults.png"
import language from '../utils/language';
import { useSelector } from 'react-redux';

const Shimmer = () => {

  const myLang = useSelector((store) => store.language.lang);

  return (
    <div>
      <div className="h-1/12 xl:pt-2 md:pt-8 sm:pt-16 pt-20 w-12/12 flex gap-4 justify-center flex-col items-center">
        <img
          className="xl:w-80 md:w-72 sm:w-64 w-52 lg:w-80 mt-14"
          src={noResult}
          alt="Search Img"
        ></img>
        <h1 className="xl:text-2xl text-white lg:text-2xl sm:text-lg text-lg md:text-xl font-semibold">
          {language[myLang].load}
        </h1>
      </div>
    </div>
  )
}

export default Shimmer
