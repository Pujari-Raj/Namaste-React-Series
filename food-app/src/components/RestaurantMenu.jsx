import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HomeShimmer from '../components/HomeShimmer'
import useRestaurantMenu from '../utilities/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';

const RestaurantMenu = () => {

  // const [restMenu, setRestMenu] = useState(null);
  const {resId}  = useParams();

  const restMenu = useRestaurantMenu(resId);

  // state for giving toggling component 
  const [showIndex, setShowIndex] = useState(0);

  const setShowIndexProps = (index) => {
    if (index === showIndex) {
      setShowIndex(null);
    }
    else{
      setShowIndex(index);
    }
  }
  // (above code) & closing single compt

  useEffect(() => {
    //fetchMenu();
  }, [])
  
  //  const fetchMenu = async () => {
  //    const data = await fetch(swiggy_menu_api_URL+resId);

  //    const json = await data.json();
  //    console.log(json);
  //    setRestMenu(json);
  //    setRestMenu(json?.data?.cards[0]?.card?.card?.info);
  //    console.log(json?.data?.cards[0]?.card?.card?.info);

  //    console.log(restMenu);

  //  };

  if (restMenu === null) return  <HomeShimmer/> ; 

  // RestaurantMenu details
  const {name, costForTwoMessage,cuisines} = restMenu?.data?.cards[0]?.card?.card?.info;
  
  const {itemCards} = restMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  // for all the menu lists(categories)
  const categories = restMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((categorycard) => categorycard.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")


  // console.log(categories);
  return (
    <div className='text-center mx-10 my-10'>
      <div className="">
        <h2 className='font-extrabold text-2xl'>{name}</h2>
        <h4 className='text-[0.95rem]'>{cuisines.join(",")} - {costForTwoMessage}</h4>
      </div>
      <div className="">
      {categories.map((category, index) => (
        <RestaurantCategory key={category?.card?.card?.title} 
        categorydata={category?.card?.card}
        showItems={index === showIndex ? true : false}
        setShowIndex={() => setShowIndexProps(index) } 
        />
      ))}
      </div>
    </div>
  )
}

export default RestaurantMenu