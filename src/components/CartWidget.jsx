import React from 'react'
import imagenCarrito from './images/cart-36-64.ico';
import "./CartWidget.css"
import {useContext} from "react";
import {cartContext} from "../components/context/cartContext"
import {Link} from "react-router-dom";


function CartWidget() {
  
   const miContext =useContext(cartContext);
   let {itemsInCart}=miContext;

  return (
    <div className="boxSize d-flex">

        <Link to="/cart" className="nav-link"><img src={imagenCarrito} alt="cart"/></Link>
        <p style={{color:"white", fontSize:"0.75rem"}} className="mt-4">{itemsInCart()}</p>
    </div>
  )
}

export default CartWidget