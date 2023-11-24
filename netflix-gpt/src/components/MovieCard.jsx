import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {

    console.log(posterPath);

  return (
    <div className='w-52'>
        <img  src={IMG_CDN_URL+ posterPath} alt="poster-path" srcset="" />
    </div>
  )
}

export default MovieCard