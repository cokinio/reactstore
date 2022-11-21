import React, {useState,useEffect} from 'react';
import { getProduct } from '../services/mockService';
import ItemDetail from './ItemDetail';
import { useParams } from "react-router-dom";


function ItemDetailContainer(props) {

let [product,setProduct]=useState(null);

// useEffect(()=>{
//   getProduct(1).then((responseData)=>
//   setProduct(responseData))}
// ,[])

const idItem= useParams().id;


let producto1={};
async function productoAsync(){
  producto1=await getProduct(idItem);
  setProduct(producto1);
}

useEffect(()=>{productoAsync()})

if (product===null) return(
  <div className="d-flex justify-content-center">
    <div className="spinner-border" style={{width: "3rem", height: "3rem"}} role="status">
    <span className="visually-hidden">Loading...</span>
    </div>
</div>
)

  return (
    <div>
        <ItemDetail producto={product}/>
    </div>
  )
}

export default ItemDetailContainer