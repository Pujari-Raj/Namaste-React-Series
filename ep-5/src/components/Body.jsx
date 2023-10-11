import React,{useState} from 'react'
import RestaurantCard from './RestaurantCard'
import restaurantsList from '../constants/constants'

const Body = () => {

  const  [dummyrestaurants, setDummyRestaurants] = useState(restaurantsList);

  return (
    <>
      <div className='body'>
        <div className="my-8 mx-10">
          <h1 className=' text-xl font-extrabold'>Filters</h1>
          <button type='submit' className="inline-block px-12 py-3 text-sm font-medium text-violet-600 border border-violet-600 rounded hover:bg-violet-600 hover:text-white active:bg-indigo-500 focus:outline-none"
          onClick={()=> {
            console.log('butn click');
            const topratedlist = dummyrestaurants.filter(
              (rest) => rest.info.avgRating > 4
            );
            setDummyRestaurants(topratedlist)
            console.log(topratedlist);
          }}>Top Rated </button>
        </div>
        {/* res-container */}
        <h1 className='mx-10 text-xl font-extrabold'>Best Restaurants In Banglore</h1>
       
        <div className="my-8 mx-10 grid grid-cols-1 gap-2 md:grid-cols-3">
          {dummyrestaurants.map((restaurant) => (  
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))
          }
          {/* <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/> */}
        </div>
      </div>
    </>
  )
}

export default Body