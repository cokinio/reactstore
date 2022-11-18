import React from 'react'
import { cartContext } from '../context/cartContext'
import {useContext} from "react";
import {Link} from "react-router-dom";

function CartView() {

  const miContext = useContext(cartContext);
  const {cart,clear,removeItem,itemsInCart, totalCart, subtotal}=miContext;

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Producto</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Precio</th>
            <th scope="col">Subtotal</th>
            <th scope="col">Borrar producto</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item,index)=>{ return(
              <tr>
                <th scope="row">{index}</th>
                <td><Link to={`/item/${item.id}`} style={{textDecoration:'none'}}>{item.title}</Link></td>
                <td>{item.cant}</td>
                <td>{item.price}</td>
                <td>${subtotal(item.price,item.cant)}</td>
                <td><button onClick={()=>removeItem(item.id)}>X</button></td>
              </tr>)
              })}
         <tr>
          <th scope="row"></th>
          <td></td>
          <td>Cantidad productos: {itemsInCart()}</td>
          <td>Total: ${totalCart()}</td>
          <td></td>
        </tr>
        </tbody>

      </table>
      <button onClick={clear}>Borrar Carrito</button>
    </div>
  )
}

export default CartView