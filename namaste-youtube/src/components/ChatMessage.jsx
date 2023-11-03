import React from 'react'
import { UserCircle  } from "lucide-react";

const ChatMessage = ({name, message}) => {
  return (
    <div className='flex items-center'>
        <UserCircle className="" />
        <span className='font-bold p-4'>{name}</span>
        <span>{message}</span>
    </div>
  )
}

export default ChatMessage