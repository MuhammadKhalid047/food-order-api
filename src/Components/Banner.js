import React from 'react'
import './style.css'
import Meals from './img/meals.jpg'


function Banner() {
  return (
    <div style={{height:"29rem"}}>
        <div className='bannerImg w-100'>
            <img src={Meals} alt="Banner" />
        </div>
        <div className='deliverySummery text-center m-auto text-white position-relative'>
            <h2>Delicious Food, Delivered To You</h2>
            <p className='mt-5'>Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home.</p>
            <p className='mt-3 mb-3'>All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!</p>
        </div>
    </div>
  )
}

export default Banner