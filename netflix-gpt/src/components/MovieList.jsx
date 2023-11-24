import React from 'react'
import MovieCard from './MovieCard';

const MovieList = ({title, movies}) => {

    console.log(movies);
  return (
    <div className='p-6 text-white'>
            <h1 className='text-[1.2rem]'>{title}</h1>
        <div className="flex overflow-x-scroll">
            <div className="flex">
                {movies.map((movie) => (
                    <MovieCard key={movie?.id} posterPath={movie?.poster_path} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default MovieList