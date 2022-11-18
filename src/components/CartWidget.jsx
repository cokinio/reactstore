import React from 'react'
import imagenCarrito from './images/cart.svg';
import "./CartWidget.css"
import {useContext} from "react";
import {cartContext} from "../components/context/cartContext"
import {Link} from "react-router-dom";


function CartWidget() {
  
   const miContext =useContext(cartContext);
   let {itemsInCart}=miContext;
   let cantidad=itemsInCart();
  return (
    <div className="boxSize d-flex">

        <Link to="/cart" className="nav-link"><img src={imagenCarrito} alt="cart"/></Link>
        <small style={{color:"white"}}>{cantidad}</small>
    </div>
  )
}

export default CartWidget