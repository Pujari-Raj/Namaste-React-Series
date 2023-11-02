import React from "react";

const VideoCard = ({ info }) => {
  // console.log(info);
  const { snippet, statistics } = info;
    // const { snippet } = info;
    // console.log(snippetvalue);
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <>
      <div className="p-2 m-2 w-[18rem] shadow-lg">
            <img src={thumbnails.medium.url} alt="videothumb" srcset="" />
            <div className="">
                <p>{title}</p>
                <p>{channelTitle}</p>
                <p>{statistics.viewCount} views</p>
            </div>
      </div>
    </>
  );
};

export default VideoCard;
