import React from 'react'
import imagenCarrito from './images/cart.svg';
import "./CartWidget.css"

function CartWidget() {
  return (
    <div className="boxSize">
        <img src={imagenCarrito} alt="cart"/>
    </div>
  )
}

export default CartWidget