import React from "react";
import { CDN_URL } from "../constants/constants";
import {useDispatch} from "react-redux"
import {addItem} from '../utilities/cartSlice'

const CategoryList = ({ items }) => {
  console.log(items);

  // calling dispacth functn which is used to subscribe the methods 
  const dispatch = useDispatch();

  const hanleAddItem = (item) => {
    dispatch(addItem(item));
  }

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="border-gray-400 border-b-[1px] py-8 m-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="">
              <h5 className="font-extrabold ">{item.card.info.name}</h5>
              <h5 className="font-medium text-sm">
                ₹{" "}
                {item.card.info.price / 100
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </h5>
            </div>
            <p className="text-[#636160]">{item.card.info.description}</p>
          </div>
          <div className="w-3/12">
            <div className="absolute">
            <button className="bg-transparent text-green-400 border-[1px] border-gray-400
            p-[1rem] mx-8 my-24 rounded-lg"
            onClick={() => hanleAddItem(item)}>
              Add +</button>
            </div>
            <img src={CDN_URL+item.card.info.imageId} alt="" srcset="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
