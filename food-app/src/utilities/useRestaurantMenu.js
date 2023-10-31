import { useEffect, useState } from "react";
import { swiggy_menu_api_URL } from '../constants/constants';

// getting restId from props => fetching data of that Restaurant'sMenu => and passing it
const useRestaurantMenu = (resId) => {

    const [restInfo, setRestInfo] = useState(null);

    useEffect(() => {
        fetchData();
    }, [])
    
    const fetchData = async () => {
        const data = await fetch(swiggy_menu_api_URL+resId);

        const json = await data.json();
        console.log(json);
        setRestInfo(json);
    }

    return restInfo
}

export default useRestaurantMenu;