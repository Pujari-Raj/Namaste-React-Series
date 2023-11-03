import React from "react";
import {  UserCircle  } from "lucide-react";

const commentsData = [
  {
    name: "Pujari Basvaraj",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid!",
    replies: [],
  },
  {
    name: "Pujari Basvaraj",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid!",
    replies: [],
  },
  {
    name: "Pujari Basvaraj",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid!",
    replies: [
      {
        name: "Pujari Basvaraj",
        text: "By making this change, you will correctly map over the replies prop of each comment within the CommentsList component, ",
        replies: [],
      },
      {
        name: "Pujari Basvaraj",
        text: "By making this change, you will correctly map over the replies prop of each comment within the CommentsList component, ",
        replies: [],
      },
    ],
  },
  {
    name: "Pujari Basvaraj",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid!",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg m-2">
      <UserCircle className="" />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({comments}) => {
  //
  return comments.map((comment, index) => (
  <div className="">
    <Comment key={index} data={comment} />
    <div className="p-4 border border-l-black">
      {/* <Comment data={comment} />
      <Comment data={comment} />
      <Comment data={comment} />
      <Comment data={comment} /> */}
      <CommentsList comments={comment.replies} />
    </div>
  </div>
  ));
}

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1>Comments:</h1>
      {/* <Comment data={commentsData[0]} /> */}
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
