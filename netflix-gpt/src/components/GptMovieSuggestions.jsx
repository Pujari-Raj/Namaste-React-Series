import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from './MovieList'

const GptMovieSuggestions = () => {

  // const gpt = useSelector((store) => store.gpt);
  // const {movieResults, movieNames } = gpt;

  // const { movieResults, movieNames } = useSelector((store) => store.gpt);
  // if (!movieNames) return null;

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      <div>
        // mapping all movies acc' to movie name
        {/* {movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            // getting index from movieResults to increment the map
            movies={movieResults[index]}
          />
        ))} */}
      </div>
    </div> 
  )
}

export default GptMovieSuggestions