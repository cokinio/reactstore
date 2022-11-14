import React, {useState} from 'react'

function ItemCount(props) {

 let [quantity, modifyQuantity]=useState(0);
 
 function onDelete() {
    if (quantity>0){
        modifyQuantity(--quantity);
    }
 }

  function onAdd() {
    if (quantity<props.stock){
        modifyQuantity(++quantity);
    }
 }

  return (
    <div>
      <div>
        <button onClick={onDelete}>-</button>
        <input style={{textAlign:'center'}} size="3" type="text" value={quantity} readOnly/>
        <button onClick={onAdd}>+</button>
      </div>
      <div>
        <button onClick={()=>props.onAddToCart(quantity)} type="button" className="btn btn-secondary btn-sm my-3">Agregar al carrito</button>
      </div>
    </div>
  )
}

export default ItemCount
