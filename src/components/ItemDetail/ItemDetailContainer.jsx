import React, {useState,useEffect} from 'react';
import { getProduct } from '../services/mockService';
import ItemDetail from './ItemDetail';

function ItemDetailContainer(props) {

let [product,setProduct]=useState({});

// useEffect(()=>{
//   getProduct(1).then((responseData)=>
//   setProduct(responseData))}
// ,[])

let producto1={};
async function productoAsync(){
  producto1=await getProduct(1);
  setProduct(producto1);
}

useEffect(()=>{productoAsync()})

  return (
    <div>
        <ItemDetail producto={product}/>
    </div>
  )
}

export default ItemDetailContainer