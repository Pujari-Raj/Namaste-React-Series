import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import CategoryList from './CategoryList';


const RestaurantCategory = ({categorydata, showItems, setShowIndex}) => {
    // console.log(categorydata);
    // const [togglecategory, settoggleCategory] = useState(true);

    // const handleCategory = () => {
    //     settoggleCategory(!togglecategory);
    // }

    /* Uncomment above code and comment below code for not using uncontrolled cmpt
    For Giving the control of toggling menu-category uncomment in props(showItems, setShowIndex)  
    */
    const handleCategory = () => {
        console.log('handleCategory clicked');
        setShowIndex();
    }
    
  return (
    // Main Body
    <div>
    {/* Header  */}
    <div className="w-6/12 mx-auto my-6 shadow-lg p-6 bg-gray-100">
        <div className="flex justify-between cursor-pointer" onClick={handleCategory}>
        <span className='font-extrabold'>
            {categorydata.title}  
            ({categorydata.itemCards.length})
        </span>
        {/*  */}
        <ChevronDown />
        </div>
    {/* Accordion Body  */}
        {/* { togglecategory && <CategoryList items={categorydata.itemCards} />} */}
        {showItems  && <CategoryList items={categorydata.itemCards} /> }
    </div>
    </div>
  )
}

export default RestaurantCategory