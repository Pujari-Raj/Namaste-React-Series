import React, { useEffect, useState } from "react";
import { Menu, UserCircle, Search } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
  //search
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showsuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);

  /**
   * searchCache ={
   *  "virat": ["virat kohli", "virat century"];
   * }
   * searchQuery = virat
   */

  useEffect(() => {
  
    /**
     * Make an API call after every key press , but if diff btwn 2 api calls
     * is <250ms decline the API Call
     */

    const timer = setTimeout(() => {

      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      }
      else{
        getSearchSuggestions();
      }

    }, 200);

    return () => {
      clearTimeout(timer);
    };

    /**
     * HOW SEARCH QUERY API WORKS
     * key- v
     * - render the compt
     * - start timer => make API call after 200ms 
     * 
     * key - vi
     * - destroy the component(useffect return method)
     * - re-render the compt
     * - useffect()
     * - start timer => make api call after 200ms
     * 
     * 
     * setTimeout(200)
     *  (ON EVERY SEARCH THERE IS NEW USEFFECT IS RUN)
     */

    // getSearchSuggestions();
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    console.log("API Call- "+searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSuggestions(json[1]);

    // updating cache
    dispatch(cacheResults({
      // "virat" : ["virat", "virat"]
      [searchQuery] : json[1],
    }))
  };

  const dispatch = useDispatch();

  const toggleleMenuHandler = () => {
    console.log("btn clicked");
    dispatch(toggleMenu());
  };

  return (
    <>
      <div className="grid grid-flow-col items-center p-1  shadow-md">
        {/* logo & menu */}
        <div className="flex items-center col-span-1 ml-4">
          <Menu
            onClick={() => toggleleMenuHandler()}
            className="cursor-pointer"
          />

          <img
            className="h-[4rem] "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJMREE4IMAg92cKiVS4ZR8ncwqyysWuV4RiA&usqp=CAU"
            alt="youtube-logo"
            sizes=""
            srcset=""
          />
        </div>
        <div className="col-span-8 px-10 ">
          <div className="">
            <input
              className="w-2/3 p-[0.5rem] pl-[1rem] border border-gray-400 rounded-l-full
            focus:outline-none"
              type="text"
              name=""
              id=""
              placeholder="type"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setShowSuggestions(false)}
            />
            <button className="p-[0.5rem] mt-1 border border-gray-400 rounded-r-full">
              {/* <Search  className='text-center' /> */}
              🔍
            </button>
          </div>
          {showsuggestions && <div className="fixed bg-white w-[36.3rem] border py-2 px-2 shadow-lg rounded-l-lg">
            <ul>
              {suggestions.map((suggestion) =>(
              <li className="font-bold py-2 px-3 shadow-sm hover:bg-gray-100">
                🔍 {suggestion} </li>
              ))}
            </ul>
          </div>}
        </div>
        <div className="col-span-1">
          <UserCircle className="" />
        </div>
      </div>
    </>
  );
};

export default Header;
