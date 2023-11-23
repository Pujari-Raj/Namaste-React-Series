import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video absolute pt-[20%] px-20 text-white bg-gradient-to-left from-black'>
        <h1 className='font-bold text-6xl'>{title}</h1>
        <p className='py-6 text-lg w-1/2'>{overview}</p>
        <div className="">
          <button className='bg-white text-black hover:bg-opacity-40 p-4 text-xl  rounded-lg'>▶ Play</button>
          <button className='mx-3 bg-gray-500 text-white p-4 text-xl bg-opacity-40 rounded-lg '>View More</button>
        </div>
    </div>
  )
}

export default VideoTitle