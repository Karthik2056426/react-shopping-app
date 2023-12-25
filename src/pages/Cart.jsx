import React from 'react'
import Cartlist from '../components/Cartlist'

function Cart({cartItems, handleDecrement, handleIncrement, totalprice, removecart}) {
  
  return (
    <div>

      <Cartlist removecart={removecart} cartItems = {cartItems} handleDecrement={handleDecrement} handleIncrement={handleIncrement} totalprice={totalprice} />
    </div>
  )
}

export default Cart