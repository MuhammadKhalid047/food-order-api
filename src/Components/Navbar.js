import React, { useState } from 'react'
import Cart from './img/cart.svg'
import './style.css'
import Popup from 'reactjs-popup'
import { useSelector ,useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { updateCart } from '../Slice/orderSlice'
import {totalamount} from '../Slice/totalSlice'
// import PopupComponent from './Popup'

function Navbar() {
    const dispatch = useDispatch();

    const [totalCount, setTotalCount] = useState(0);
  
    const selectOrderValue = (state, itemName) => {
      const item = state.order.addToCart.find(item => item.name === itemName);
      return item ? { order: item.order, price: item.price } : { order: 0, price: 0 };
    };
  
    const sushiData = useSelector(state => selectOrderValue(state, 'Sushi'));
    const sushiOrder = sushiData.order;
    const sushiPrice = sushiData.price;
  
    const schnitzelData = useSelector(state => selectOrderValue(state, 'Schnitzel'));
    const schnitzelOrder = schnitzelData.order;
    const schnitzelPrice = schnitzelData.price;
  
    const burgerData = useSelector(state => selectOrderValue(state, 'Burger'));
    const burgerOrder = burgerData.order;
    const burgerPrice = burgerData.price;
  
    const bowlData = useSelector(state => selectOrderValue(state, 'Bowl'));
    const bowlOrder = bowlData.order;
    const bowlPrice = bowlData.price;
  
    const totalAmount = useSelector(state => state.total.TotalPrice);
  
    useEffect(() => {
      setTotalCount(sushiOrder + schnitzelOrder + burgerOrder + bowlOrder);
      dispatch(totalamount(sushiPrice * sushiOrder + schnitzelPrice * schnitzelOrder + burgerPrice * burgerOrder + bowlPrice * bowlOrder));
    }, [sushiOrder, schnitzelOrder, sushiPrice, schnitzelPrice, burgerOrder, burgerPrice, bowlOrder, bowlPrice, dispatch]);   

  return (
    <div className='bg-deep-violet navbar d-flex justify-contant-space-between align-items-center position-fixed'>
        <h1 className='text-white'>Meals</h1>
        <Popup trigger=
        {<div className='text-white yourCartBtn d-flex align-items-center gap-2 font-bold'>
            <img src={Cart} alt="Basket" className='yourCartImg'/>
            <span >Your Cart</span> 
            <span className='cartValue'>{totalCount}</span>
        </div>} modal nested>{close => (
            <>
                <div className="backgroundBlur position-fixed"></div>
                <div className="Popup position-fixed">
                    <div>
                        <ul className="Cart-items">
                            {sushiOrder > 0 && ( <>
                                <li className="Cart-items-li d-flex justify-contant-space-between align-items-center">
                                <div>
                                    <h2>Sushi</h2>
                                    <div className="Cart-summary d-flex justify-contant-space-between align-items-center">
                                        <span className="Cart-price font-bold">${sushiPrice}</span>
                                        <span className="Cart-amount font-bold">x {sushiOrder}</span>
                                    </div>
                                </div>
                                <div className="CartItem-Actions d-flex-col">
                                    <button onClick={()=>dispatch(updateCart({ name: 'Sushi', quantity: -1 }))}>−</button>
                                    <button onClick={()=>dispatch(updateCart({ name: 'Sushi', quantity: 1 }))}>+</button>
                                </div>
                            </li>
                            </>)
                            }{schnitzelOrder > 0 && ( <>
                            <li className="Cart-items-li d-flex justify-contant-space-between align-items-center">
                                <div>
                                    <h2>Schnitzel</h2>
                                    <div className="Cart-summary d-flex justify-contant-space-between align-items-center">
                                        <span className="Cart-price font-bold">${schnitzelPrice}</span>
                                        <span className="Cart-amount font-bold">x {schnitzelOrder}</span>
                                    </div>
                                </div>
                                <div className="CartItem-Actions d-flex-col">
                                    <button onClick={()=>dispatch(updateCart({ name: 'Schnitzel', quantity: -1 }))}>−</button>
                                    <button onClick={()=>dispatch(updateCart({ name: 'Schnitzel', quantity: 1 }))}>+</button>
                                </div>
                            </li> </>)}
                            {burgerOrder > 0 && (<>
                            <li className="Cart-items-li d-flex justify-contant-space-between align-items-center">
                                <div>
                                    <h2>Barbecue Burger</h2>
                                    <div className="Cart-summary d-flex justify-contant-space-between align-items-center">
                                        <span className="Cart-price font-bold">${burgerPrice}</span>
                                        <span className="Cart-amount font-bold">x {burgerOrder}</span>
                                    </div>
                                </div>
                                <div className="CartItem-Actions d-flex-col">
                                    <button onClick={()=>dispatch(updateCart({ name: 'Burger', quantity: -1 }))}>−</button>
                                    <button onClick={()=>dispatch(updateCart({ name: 'Burger', quantity: 1 }))}>+</button>
                                </div>
                            </li> </>)}
                            {bowlOrder > 0 && (<>
                            <li className="Cart-items-li d-flex justify-contant-space-between align-items-center">
                                <div>
                                    <h2>Green Bowl</h2>
                                    <div className="Cart-summary d-flex justify-contant-space-between align-items-center">
                                        <span className="Cart-price font-bold">${bowlPrice}</span>
                                        <span className="Cart-amount font-bold">x {bowlOrder}</span>
                                    </div>
                                </div>
                                <div className="CartItem-Actions d-flex-col">
                                    <button onClick={()=>dispatch(updateCart({ name: 'Bowl', quantity: -1 }))}>−</button>
                                    <button onClick={()=>dispatch(updateCart({ name: 'Bowl', quantity: 1 }))}>+</button>
                                </div>
                            </li> </>)}
                        </ul>
                        <div className="Cart-total d-flex justify-contant-space-between align-items-center">
                            <span>Total Amount</span>
                            <span>${totalAmount.toFixed(2)}</span>
                        </div>
                        <div className="cartActions">
                                <button className="Cart-button" onClick={()=> close()}>Close</button>
                                <button className="Cart-button-order">Order</button>
                        </div>
                    </div>
                </div>
            </>
        )}</Popup>
    </div>
  )
}

export default Navbar
