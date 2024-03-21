import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import backGround from '../assets/backGround.jpg'

const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img
          src={backGround}
          alt="background"
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  )
}

export default GptSearch
