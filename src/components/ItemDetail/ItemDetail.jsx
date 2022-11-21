import React from 'react'
import ItemCount from '../counter/ItemCount'
import { useContext } from "react";
import { cartContext} from "../context/cartContext"

function ItemDetail(props) {

  const miContext =useContext(cartContext);
  let {addToCart,isInCart,cart}=miContext;

  let {title,images,stock,category,price,id}=props.producto;
  let cant=0;

  let index=isInCart(id);
  if (index!==-1){
    cant=cart[index].cant
  }

  function onAdd(quantity){
    addToCart(props.producto, quantity);
  }

  return (
        <div className="row fluid mx-5 mt-5">
          <div className="col-md-4"> 
              <img src={images} alt={title}/>
          </div>
          <div className="col-md-8"> 
              <h1>{title}</h1>
              <p className='mb-5'>Categoria: {category}</p>
              <h2 className='mt-5'>Precio: {price}</h2>
              <p>Cantidad en stock {stock}</p>
              <ItemCount stock={stock} onAddToCart={onAdd} cant={cant} />
          </div>
        </div>
        )}

export default ItemDetail;