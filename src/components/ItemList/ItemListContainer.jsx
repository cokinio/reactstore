import React, {useState,useEffect} from 'react';
import "./ItemListContainer.css";
import Item from "./Item";
import getProducts from '../services/mockService';
import { useParams } from "react-router-dom";

function ItemListContainer(props) {

let [producto, setProducto]=useState([]);
let categ= useParams().id; 


useEffect(()=>{
  getProducts(categ).then((responseData)=>{
    setProducto(responseData);
    //console.log(responseData);
    }
  ).catch((error)=>{console.error("error")})
},[categ])


  return (
    <div>
        <h1>{props.greeting}</h1>
        <div id="flex">
        {producto.map((product)=>{return (
          <Item 
          key={product.id}
          producto={product}/>)
          })}
      </div>
    </div>
  )
}

export default ItemListContainer