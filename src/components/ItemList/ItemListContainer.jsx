import React, {useState,useEffect} from 'react';
import "./ItemListContainer.css";
import Item from "./Item";
import getProducts from '../services/mockService';

function ItemListContainer(props) {

let [producto, setProducto]=useState([]);

useEffect(()=>{
  getProducts().then((responseData)=>{
    setProducto(responseData);
    console.log(responseData);
    }
  ).catch((error)=>{console.error("error")})
},[])


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