import React from 'react'


const Popup = () => {
  return (
    <>
      <div className="backgroundBlur position-fixed"></div>
        <div className="Popup position-fixed">
            <div>
                <ul className="Cart-items">
                    <li className="Cart-items-li d-flex justify-contant-space-between align-items-center">
                        <div>
                            <h2>Barbecue Burger</h2>
                            <div className="Cart-summary d-flex justify-contant-space-between align-items-center">
                                <span className="Cart-price font-bold">$12.99</span>
                                <span className="Cart-amount font-bold">x 1</span>
                            </div>
                        </div>
                        <div className="CartItem-Actions d-flex-col">
                            <button>−</button>
                            <button>+</button>
                        </div>
                    </li>
                </ul>
                <div className="Cart-total d-flex justify-contant-space-between align-items-center">
                    <span>Total Amount</span>
                    <span>$0.00</span>
                </div>
                <div className="cartActions">
                        <button className="Cart-button">Close</button>
                        <button className="Cart-button-order">Order</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Popup
