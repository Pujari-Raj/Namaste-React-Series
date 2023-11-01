import React from 'react'
import Button from './Button'

const list = ["All","Music", "Mixes"];

const Filterbuttons = () => {
  return (
    <div className='flex space-x-4'>
      <Button name="All"/>
      <Button name="Music"/>
      <Button name="Mixes"/>
    </div>
  )
}

export default Filterbuttons