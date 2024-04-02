import React from 'react'
import { IMG_LINK } from "../utils/constants";

const dateCSS =
  "font-semibold text-white pr-0.5 text-[8px] lg:text-base md:text-sm sm:text-sm";
const valueCSS =
  "px-2 py-0.5 text-base py-1 m-0.5 text-white bg-black opacity-70 border rounded-full border-black";

const MovieContent = ({info}) => {
 
  return (
    <div className="md:flex md:flex-row md:justify-between gap-3 lg:gap-1 xl:h-[100vh] lg:h-[100vh] md:h-[100vh] sm:h-[80vh] xs:h-[50vh] h-[30vh] w-full items-start lg:pt-32 xl:pt-32 lg:px-20 xl:px-20 pt-[20%] px-3">
      <div className="lg:w-3.5/12 w-4/12 mt-24 lg:mt-20 ml-30 lg:ml-40">
        <img
          className="xl:w-72 lg:w-64 md:w-60 sm:w-48 w-28  rounded-2xl"
          src={IMG_LINK + info?.poster_path}
          alt="movieicon"
        ></img>
      </div>

      <div className="mt-24 lg:mt-20 lg:w-8/12 w-full flex flex-col justify-start items-start">
        <div className="">
          <span className="lg:text-6xl text-4xl font-extrabold text-gray-50">
            {info?.title || info?.original_name}
          </span>
          <span className="lg:text-xl text-base lg:pl-4 pl-2 font-normal text-gray-50">
            ({info?.release_date?.slice(0, 4) || info?.first_air_date?.slice(0, 4)})
          </span>
        </div>

        <div className="mt-8 lg:pt-8 lg:gap-6 gap-0 text-white flex flex-wrap flex-row">
          <div>
            <span className={dateCSS}>Date:</span>
            <span className={valueCSS}>{info?.release_date || info?.first_air_date}</span>
          </div>
          <div className="">
            <span className={dateCSS}>Genre:</span>
            {info?.genres?.map((gen) => (
              <span key={gen?.name} className={valueCSS}>{gen?.name}</span>
            ))}
          </div>
          {info?.runtime && <div>
            <span className={dateCSS}>Runtime:</span>
            <span className={valueCSS}>
              {Math.floor(info?.runtime / 60)} Hrs
            </span>
          </div>}
          {info?.languages && <div>
            <span className={dateCSS}>Language:</span>
              {info?.languages?.map((lang,index) => (
                <span key={lang?.index} className={valueCSS}>{lang}</span>
              ))}
          </div>}
        </div>

        {info?.tagline !== "" && <div className="mt-8 flex flex-row justify-center items-center py-0.5 lg:py-4 md:py-3 sm:py-2">
          <span className="lg:text-xl text-base font-semibold  text-white pr-0.5">
            Tagline:{" "}
          </span>
          <span className="text-gray-50 opacity-50 lg:text-2xl text-base">
            "{info?.tagline}"
          </span>
        </div>}

        <div className="mt-8 flex flex-col justify-start items-start w-full">
          <span className="text-white font-semibold text-[9px] lg:text-xl md:text-lg sm:text-base">
            Overview:
          </span>
          <span className="text-white text-[7px] lg:text-lg text-sm  tracking-wider">
            {info?.overview}
          </span>
        </div>

      </div>
    </div>
  );
}

export default MovieContent;
