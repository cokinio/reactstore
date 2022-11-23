import React, {useState,useEffect} from 'react';
import "./ItemListContainer.css";
import Item from "./Item";
//import getProducts from '../services/mockService';
import getProducts from '../services/firestore';
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

  //console.log(producto)
  if (producto.length===0) return(
      <div className="d-flex justify-content-center">
        <div className="spinner-border" style={{width: "3rem", height: "3rem"}} role="status">
        <span className="visually-hidden">Loading...</span>
        </div>
    </div>
  )

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