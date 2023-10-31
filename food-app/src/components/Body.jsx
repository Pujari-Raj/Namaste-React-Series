import React, { useState, useEffect } from "react";
import RestaurantCard, {withDiscountInfo} from "./RestaurantCard";
import HomeShimmer from "./HomeShimmer";
import {restaurant_list_api} from "../constants/constants"
import {Link} from 'react-router-dom'
import useOnlineStatus from "../utilities/useOnlineStatus";

const Body = () => {
  const [listofrestaurants, setListOfRestaurants] = useState([]); //all restaurant
  // search filter 
  const [filteredlistofrestaurants, setFilteredListOfRestaurants] = useState([]); 
  const [searchtext, setSearchText] = useState("");

  //
  const RestaurantCardDiscount = withDiscountInfo(RestaurantCard);

  useEffect(() => {
    console.log("useEffect called");
    fetchdata();
  }, []);

  // API call for getting restaurant lists
  const fetchdata = async () => {
    const data = await fetch(restaurant_list_api);

    const json = await data.json();
    console.log(json);
    console.log(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setListOfRestaurants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    //for filtering restauarnt on search
    setFilteredListOfRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  // onlinestatus check
  const onlinestatus = useOnlineStatus();

  if (!onlinestatus) {
    return <h2>Looks, Like Your Offline Please Check Internt Connection</h2> 
  }

  return listofrestaurants.length === 0 ? (
    <HomeShimmer />
  ) : (
    <>
      <div className="body">
        <h1 className="my-8 mx-10 text-xl font-extrabold">Filters</h1>
        <div className="my-8 mx-10 flex ">
          <div className="mx-4">
            <input
              type="text"
              className="mx-2 h-12 px-4 py-1 rounded-md border border-gray-500 text-gray-800 focus:outline-none"
              value={searchtext}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
              type="submit"
              className="inline-block px-12 py-3 text-sm font-medium text-violet-600 border border-violet-600 rounded hover:bg-violet-600 hover:text-white active:bg-indigo-500 focus:outline-none"
              onClick={() => {
                console.log(searchtext);

                const filteredRestaurant = listofrestaurants.filter((res) =>
                  res.info.name
                    .toLowerCase()
                    .includes(searchtext.toLocaleLowerCase())
                );

                setFilteredListOfRestaurants(filteredRestaurant);
                
              }}
            >
              Search{" "}
            </button>
          </div>
          <div className="mx-4">
            <button
              type="submit"
              className="inline-block px-12 py-3 text-sm font-medium text-violet-600 border border-violet-600 rounded hover:bg-violet-600 hover:text-white active:bg-indigo-500 focus:outline-none"
              onClick={() => {
                console.log("butn click");
                const topratedlist = listofrestaurants.filter(
                  (rest) => rest.info.avgRating > 4
                );
                setListOfRestaurants(topratedlist);
                console.log(topratedlist);
              }}
            >
              Top Rated{" "}
            </button>
          </div>
        </div>
        {/* res-container */}
        <h1 className="mx-10 text-xl font-extrabold">
          Best Restaurants In Banglore
        </h1>

        <div className="my-8 mx-10 grid grid-cols-1 gap-2 md:grid-cols-3">
          {filteredlistofrestaurants.map((restaurant) => (

            <Link key={restaurant.info.id} 
            to={"/restaurants/" +restaurant.info.id}>
            <RestaurantCardDiscount resData={restaurant} />
            {/* <RestaurantCard  resData={restaurant} /> */}
            </Link>
          ))}   
        </div>
      </div>
    </>
  );
};

export default Body;
