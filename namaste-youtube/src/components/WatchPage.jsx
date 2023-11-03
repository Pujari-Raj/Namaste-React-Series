import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu, toggleMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <>
    <section className="flex flex-col p-5 w-full">
    <div className="flex w-full">
      <div className="">
      <iframe
        width="850"
        height="600"
        src={"https://www.youtube.com/embed/"+searchParams.get("v")}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      </div>
      <div className="w-full ml-2">
        <LiveChat/>
      </div>
    </div>
    <div className="">
      <CommentsContainer/>
    </div>
    </section>
    </>
  );
};

export default WatchPage;
