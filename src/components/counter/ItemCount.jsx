import React, {useState} from 'react'
function ItemCount(props) {

 let [quantity, modifyQuantity]=useState(props.cant);

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
        <button onClick={onDelete}  type="button" className="btn btn-outline-secondary btn-sm">-</button>
        <input style={{textAlign:'center'}} size="3" type="text" value={quantity} readOnly/>
        <button onClick={onAdd}  type="button" className="btn btn-outline-secondary btn-sm">+</button>
      </div>
      <div>
        <button onClick={()=>props.onAddToCart(quantity)} type="button" className="btn btn-secondary btn-sm my-3">Agregar al carrito</button>
      </div>
    </div>
  )
}

export default ItemCount
