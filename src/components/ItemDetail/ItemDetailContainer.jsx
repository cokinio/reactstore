import React, {useState,useEffect} from 'react';
import { getProduct } from '../services/mockService';
import ItemDetail from './ItemDetail';
import { useParams } from "react-router-dom";


function ItemDetailContainer(props) {

let [product,setProduct]=useState({});

// useEffect(()=>{
//   getProduct(1).then((responseData)=>
//   setProduct(responseData))}
// ,[])

const idItem= useParams().id;
// console.log(idItem);

let producto1={};
async function productoAsync(){
  producto1=await getProduct(idItem);
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