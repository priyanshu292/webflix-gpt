import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'

const GptSearch = () => {
  return (
    <div className='bg-black w-screen h-screen object-cover -z-10'>
      <div className=''>
      <GptSearchBar />
      <GptMovieSuggestions />
      </div>
    </div>
  )
}

export default GptSearch
