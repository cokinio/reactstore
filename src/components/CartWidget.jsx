import React from 'react'
import imagenCarrito from './images/cart.svg';
function CartWidget() {
  return (
    <div>
        <img src={imagenCarrito} alt="cart" />
    </div>
  )
}

export default CartWidget