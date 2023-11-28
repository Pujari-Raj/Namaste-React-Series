import React from "react";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  // search movie in TMDB
  // const searchMovieTMDB = async (movie) => {
  //   const data = await fetch(
  //     "https://api.themoviedb.org/3/search/movie?query=" +
  //       movie +
  //       "&include_adult=false&language=en-US&page=1",
  //     API_OPTIONS
  //   );
  //   const json = await data.json();

  //   return json.results;
  // };

  // const handleGptSearchClick = async () => {
  //   console.log(searchText.current.value);

  //   // Make an API call to GPT API and get Movie Results

  //   const gptQuery =
  //     "Act as a Movie Recommendation system and suggest some movies for the query : " +
  //     searchText.current.value +
  //     ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

  //   const gptResults = await openai.chat.completions.create({
  //     messages: [{ role: "user", content: gptQuery }],
  //     model: "gpt-3.5-turbo",
  //   });

  //   if (!gptResults.choices) {
  //     // TODO: Write Error Handling
  //   }

  //   // console.log(gptResults.choices);
  //   console.log(gptResults.choices?.[0]?.message?.content);

  //   // Splitting the array with comma, to separate each movie name with comma
  //   // Andaz Apna Apna, Hera Pheri, Chupke Chupke, Jaane Bhi Do Yaaro, Padosan
  //   const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

  //   // splitted array result ⬇
  //   // ["Andaz Apna Apna", "Hera Pheri", "Chupke Chupke", "Jaane Bhi Do Yaaro", "Padosan"]

  //   /**  For each movie I will search TMDB API
  //    * We're getting 5 different movie names , so when call the the API
  //    * for getting data about the each movie, it will return (5 Promises)
  //    *
  //    */
  //   const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
  //   // [Promise, Promise, Promise, Promise, Promise]

  //   /**
  //    * As we're getting results as (5-Promises), that's why we're making async-await
  //    * function , bcz it will take some amount of time to get the result
  //    *
  //    */
  //   const tmdbResults = await Promise.all(promiseArray);

  //   console.log(tmdbResults);

  //   // we're passing the payload as object , with movienames& movieResults
  //   dispatch(
  //     addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
  //   );
  // };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className=" p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          // onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
