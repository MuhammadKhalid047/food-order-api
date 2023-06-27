import React from 'react'
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'
import Order from '../Components/Order'
// import Popup from '../Components/Popup'

function FoodOrder() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Order/>
      {/* <Popup/> */}
    </div>
  )
}

export default FoodOrder
