import React from "react";
import language from "../utils/language";
import { useSelector } from "react-redux";


const GptSearchBar = () => {

  const myLang = useSelector((store) => store.language.lang);

  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={language[myLang].placeholder}
        />
        <button className="py-2 px-4 col-span-3 m-4 bg-red-700 text-white rounded-sm">
          {language[myLang].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
