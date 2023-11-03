import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomMessage, generateRandomName } from "../utils/helper";

const LiveChat = () => {

    const [livemessage, setLiveMessage] = useState("");
    const dispatch = useDispatch(); 

    const chatmessages = useSelector((store) => store.chat.messages);

    useEffect(() => {
      
        const i = setInterval(() => {
            console.log("API Polling");

            dispatch(addMessage({
                name: generateRandomName(),
                message: generateRandomMessage(20)+"🚀"
            }))
        }, 1500);

        return () => {
            clearInterval(i);
        }

    }, [])
    

  return (
    <>
    <div className="">
      <div className="w-full h-[600px] p-2  border border-black bg-slate-100 rounded-md overflow-y-scroll flex flex-col-reverse">
        {chatmessages.map((chat, index) =>(
            <ChatMessage key={index} name={chat.name} message={chat.message} />
        ))
        }
      </div>
      <form action="" className="w-full p-2  border border-black" 
      onSubmit={(e) => {
        e.preventDefault(); 
        console.log("message-"+livemessage);
        dispatch( addMessage({
          name: "Pujari",
          // message:"Hey Champ💖"
          message: livemessage,
        }))
        setLiveMessage("");
      }}>
        <input className="px-2 " type="text" name="" placeholder="enter message" id="" value={livemessage} onChange={(e) => setLiveMessage(e.target.value)} />
        <button className="px-2 mx-2 bg-green-700">Send</button>
      </form>
    </div>
    </>
  );
};

export default LiveChat;
