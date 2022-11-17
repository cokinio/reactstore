import React from 'react'
import imagenCarrito from './images/cart.svg';
import "./CartWidget.css"
import {useContext} from "react";
import {cartContext} from "../components/context/cartContext"


function CartWidget() {
  
   const miContext =useContext(cartContext);
   let {itemsInCart}=miContext;
   let cantidad=itemsInCart();
   console.log(cantidad)
  return (
    <div className="boxSize">
        <img src={imagenCarrito} alt="cart"/>
        <h1 style={{color:"white"}}>{cantidad}</h1>
    </div>
  )
}

export default CartWidget