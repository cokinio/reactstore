import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import {getOrder} from "../services/firestore";
import { Link } from "react-router-dom";

function YourOrder() {

let [order, setOrder]=useState([]);
const idOrder = useParams().idOrder;

useEffect(()=>{getOrder(idOrder).then((responseData)=>{
    setOrder(responseData);})},[idOrder])

console.log(order)
let itemData=order.items;
console.log(itemData)

if (itemData===[]){
    return(
        <h1>Orden Inexistente</h1>
    )
}

if (itemData===undefined){
return(<div className="d-flex justify-content-center">
        <div className="spinner-border" style={{width: "3rem", height: "3rem"}} role="status">
        <span className="visually-hidden">Cargando...</span>
        </div>
    </div>)
}

  return (
    <div>
        <h1>Felicitaciones su compra ha sido realizada!</h1>
		<p>Su numero de orden es: <span className="fw-bold">{idOrder}</span> e incluye los siguientes productos</p>
        <table className="table">
            <thead>
            <tr>
                <th scope="col">Producto</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Precio</th>
                <th scope="col">Subtotal</th>
            </tr>
            </thead>
            <tbody>
            {itemData.map((item, index) => {
                return (
                    <React.Fragment key={item.id}>
                        <tr>
                            <td>
                                <Link
                                    to={`/item/${item.id}`}
                                    style={{ textDecoration: "none" }}
                                >
                                    {item.title}
                                </Link>
                            </td>
                            <td>{item.cant}</td>
                            <td>{item.price}</td>
                            <td>{item.price}</td>
                        </tr>
                    </React.Fragment>
                );
            })}
        </tbody>
     </table>
    </div>
  )
}

export default YourOrder