import React, {useState,useEffect} from 'react';
import { getProduct } from '../services/mockService';
import ItemDetail from './ItemDetail';

function ItemDetailContainer(props) {

let [product,setProduct]=useState();

async function obtengoProducto(){
    let producto1= await getProduct(0);
    console.log(producto1);
    setProduct(producto1)
}

useEffect(obtengoProducto(),[]);

  return (
    <div>
        {product.title}
        {/* <ItemDetail producto={product}/> */}
    </div>
  )
}

export default ItemDetailContainer