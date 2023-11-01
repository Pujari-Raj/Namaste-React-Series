import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className='px-5 py-2 bg-gray-300 rounded-lg font-semibold'>{name}</button>
    </div>
  )
}

export default Button