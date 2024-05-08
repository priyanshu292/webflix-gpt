export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const IMG_LINK = "https://image.tmdb.org/t/p/original";

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const SUPPORTED_LANG = [
  { id: "en", name: "English" },
  { id: "hindi", name: "Hindi" },
  { id: "spanish", name: "Spanish" },
  { id: "russian", name: "Russian" }, 
  { id: "german", name: "German" },
];

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;

const { GoogleGenerativeAI } = require("@google/generative-ai");
export const genAI = new GoogleGenerativeAI("AIzaSyCPKxV87yUypJMTndSdJ7jyl9agKIi2azQ");