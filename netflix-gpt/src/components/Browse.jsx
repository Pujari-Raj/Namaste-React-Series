import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../utils/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from "../utils/usePopularMovies";

const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();

  return (
    <div>
      <Header />
      {/* Design Of Browse Page
        - Main Container
          - VideoBg
          - VideoTitle
        - Secondary Container
          - Movielist * n
          - Cards * n 
      */}
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  );
};

export default Browse;
