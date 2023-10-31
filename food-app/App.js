import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import Body from "./src/components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Cart from "./src/components/Cart";
import Help from "./src/pages/Help";
import Pagenotfound from "./src/pages/Pagenotfound";
import RestaurantMenu from "./src/components/RestaurantMenu";
import UserContext from "./src/utilities/UserContext";
import { Provider } from "react-redux";
import appStore from "./src/store/appStore";
// import About from "./src/pages/About";

/* This Concept is Known as Chunking/Code Splitting/Dynamic Bundling/Lazy-Loading/On-Demand-Loading
 * It is used to create a separate bundle of code for reducing the whole app bundle
 *  size, It is very important to use this kind of approach in big scale app
 */
const About = lazy(() => import("./src/pages/About"));

const AppLayout = () => {
  // if we have authentication code

  const [username, setuserName] = useState();

  useEffect(() => {
    // Make API call get value of user and send it
    const data = {
      name: "King",
    };
    setuserName(data.name);
  }, []);

  return (
    // we can also use more than one contextprovider in app
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser: username}}>
      <div className="app">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/Help",
        element: <Help />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart/>
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loadding.....</h1>}>
            <About />
          </Suspense>
        ),
      },
    ],
    errorElement: <Pagenotfound />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
