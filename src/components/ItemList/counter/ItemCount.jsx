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
      <button onClick={onDelete}>-</button>
      <input style={{textAlign:'center'}}type="text" value={quantity}/>
      <button onClick={onAdd}>+</button>
    </div>
  )
}

export default ItemCount
