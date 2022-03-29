import React from 'react'
import './General.css'

const General = () => {
  const currentDate = 0;
  return (
    <div className='general__container'>
        <h3 className='gen__title'>{currentDate}</h3>
        <div className='gen__block1'>
        </div>
    </div>
  )
}

export default General