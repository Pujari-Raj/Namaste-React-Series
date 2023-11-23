import { useEffect } from "react";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useDispatch} from "react-redux";
import { API_OPTIONS } from "../utils/constants";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();

    // fetch Trailer/Teaser video
    const getMovieVideo = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",
        API_OPTIONS
      );
      const json = await data.json();
      console.log(json);
  
      const filterData = json.results.filter((video) => video.type === "Trailer");
      // condition for handling error when there will'be no video type as trailer
      const trailer = filterData.length ? filterData[0] : json.results[0];
      console.log(trailer);
      /**
       * There can 2 ways passing the id of video
       * 1. using usestate
       *    -   const [trailerId, setTrailerId] = useState(null);
       *    -// setTrailerId(trailer.key);
       * 2. using redux
       */
      
      dispatch(addTrailerVideo(trailer));
    };
  
    useEffect(() => {
      getMovieVideo();
    }, []);
}

export default useMovieTrailer;