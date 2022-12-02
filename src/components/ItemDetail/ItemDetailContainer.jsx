import React, {useState,useEffect} from 'react';
//import { getProduct } from '../services/mockService';
import { getProduct } from '../services/firestore';
import ItemDetail from './ItemDetail';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


function ItemDetailContainer(props) {

let [product,setProduct]=useState(null);

const idItem= useParams().id;

useEffect(()=>{getProduct(idItem).then((responseData)=>
                setProduct(responseData)).catch(()=>{
                setProduct("notValidID"); 
                console.log("error de id de producto no existe")})
              },[]);

if (product===null) return(
  <div className="d-flex justify-content-center">
    <div className="spinner-border" style={{width: "3rem", height: "3rem"}} role="status">
    <span className="visually-hidden">Loading...</span>
    </div>
</div>
)

if (product==="notValidID") return(
  <div>
    <h3>El id de producto que usted desea buscar no existe</h3>
    <Link	to={`/`}><p>Presione aqui para regresar a la pagina principal</p></Link>
  </div>
    )

  return (
    <div>
        <ItemDetail producto={product}/>
    </div>
  )
}

export default ItemDetailContainer