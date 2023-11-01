import React from 'react'
import { useSelector } from 'react-redux'


const Sidebar = () => {

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className='p-5 shadow-lg w-[12rem]'>
        <ul>
          <li>Home</li>
          <li>Shorts</li>
          <li>Videos</li>
          <li>Movies</li>
        </ul>
          <h1 className='pt-4 font-extrabold'>Subscriptions</h1>
        <ul>
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>
        <h1 className='pt-4 font-extrabold'>Watch Later</h1>
        <ul>
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Mixes</li>
        </ul>
    </div>
  )
}

export default Sidebar