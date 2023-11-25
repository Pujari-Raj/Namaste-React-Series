import { useEffect } from "react";
import { API_OPTIONS, now_playing_url } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector((store) => store.moview.nowPlayingMovies);

  const getNowPlayingMovies = async () => {
    const data = await fetch(now_playing_url, API_OPTIONS);
    const json = await data.json();
    console.log(json?.results);
    dispatch(addNowPlayingMovies(json?.results));
  };

  useEffect(() => {
    /**
     * we're using memoization concept of React
     * Whenever we hit API Request even after the response is saved in redux-store 
     * this increases the load on our website, So we're making API call only
     * if we don't have the data in redux-store
     */
    if (!nowPlayingMovies) getNowPlayingMovies();
    
    /*!nowPlayingMovies && getNowPlayingMovies(); */

  }, []);
};

export default useNowPlayingMovies;
