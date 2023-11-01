import React from 'react';
import Filterbuttons from "./Filterbuttons";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className='p-4'>
        <Filterbuttons/>
        <VideoContainer/>
    </div>
  )
}

export default MainContainer