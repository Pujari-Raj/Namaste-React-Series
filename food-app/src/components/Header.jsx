import React, { useState, useEffect,useContext } from "react";
import { Link, Route } from "react-router-dom";
import { PercentCircle, ShoppingCart, User, HeartHandshake } from "lucide-react";
import { render } from "react-dom";
import UserContext from "../utilities/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [activeLink, setActiveLink] = useState("");
  // (Keep Sigin for in future)
  const [btnNameReact, setBtnNameReact] = useState("LogIn");

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  const {loggedInUser} = useContext(UserContext);


  /*
  If no dependecny Array -> useEffect is called on every render
  If dependecny Array is Empty -> useEffect is called on initial render of component(only once)
  If dependecny Array is [btnNameReact] -> useEffect is called everytime when btnNameReact is updated
  
  */
  useEffect(() => {
    console.log("useEffect called-header");
  }, [btnNameReact])
  

  // for getting cart value from store(dummy value)
  const cartItems = useSelector((store)=> store.cart.items);
  console.log(cartItems);

  return (
    <>
      <nav className="w-full shadow-[rgba(0,_0,_0,_0.24)_0px_1px_8px]">
        <div className="w-full mx-auto px-2 sm:px-6 lg:px-8 py-2">
          <div className="flex items-center justify-between h-16 w-full">
            <div className="flex-1 flex items-center justify-between">
              <div className="flex-shrink-0 flex items-center">
                {/* <span className="text-xl font-bold">Logo</span> */}
                <Link to="/">
                  <img
                    className="object-fill w-[13rem]"
                    src="../assets/Vanakkam.png"
                    alt="website-logo"
                  />
                </Link>
              </div>
              {/* Pages */}
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  {/*  */}
                  {/* <p>{loggedInUser}</p> */}
                  <Link
                    to="/about"
                    className="flex text-gray-500 hover:text-orange-500 hover:font-semibold px-3 py-2 capitalize font-semibold"
                  >
                    <PercentCircle style={{marginRight: "5px"}} /> Offers
                  </Link>
                  <Link
                    to="/help"
                    className="flex text-gray-500 hover:text-orange-500 hover:font-semibold px-3 py-2 capitalize font-semibold"
                  >
                    <HeartHandshake  style={{marginRight: "5px"}}  /> Help
                  </Link>
                  <Link
                    to=""
                    className="flex text-gray-500 hover:text-orange-500 hover:font-semibold px-3 py-2 capitalize font-semibold"
                  onClick={() => {
                    btnNameReact ==="LogIn" ? setBtnNameReact("Logout") : setBtnNameReact("LogIn")
                  }}
                  >
                    <User  style={{marginRight: "5px"}}  />
                     {btnNameReact}
                  </Link>
                  <Link
                    to="/cart"
                    className="flex text-gray-500 hover:text-orange-500 hover:font-semibold px-3 py-2 capitalize font-semibold"
                  >
                    <ShoppingCart  style={{marginRight: "5px"}}  />
                    ({cartItems.length} items)
                     Cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
