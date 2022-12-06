import React, {useState, useEffect, useContext} from 'react'
import { cartContext } from "../context/cartContext";
import { useParams } from "react-router-dom";
import {getOrder} from "../services/firestore";
import { Link } from "react-router-dom";

function YourOrder() {

const miContext = useContext(cartContext);
const {subtotal} =miContext;

let [order, setOrder]=useState({
    buyer:"",
    items:[],
    total:0
});
const idOrder = useParams().idOrder;

useEffect(()=>{getOrder(idOrder).then((responseData)=>{
    setOrder(responseData)
    })},[idOrder])

let itemData= order!==undefined? order.items: null;

if (itemData===null){
    return(
        <h1>Orden Inexistente</h1>
    )
}

if (order.items.length===0){
return(<div className="d-flex justify-content-center">
        <div className="spinner-border" style={{width: "3rem", height: "3rem"}} role="status">
        <span className="visually-hidden">Cargando...</span>
        </div>
    </div>)
}

  return (
    <div>
                <h1 className="text-uppercase my-5">Felicitaciones {` ${order.buyer.nombre} ${order.buyer.apellido} `} su compra ha sido realizada!</h1>
		<p className="mb-5">Su numero de orden es: <span className="fw-bold">{idOrder}</span> e incluye los siguientes productos</p>
        <table className="table">
            <thead>
            <tr>
                <th scope="col">Producto</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Precio unitario</th>
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
                            <td>{subtotal(item.price,item.cant)}</td>
                        </tr>
                    </React.Fragment>
                );
            })}
            <tr>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col">Total: {order.total}</th>
            </tr>
        </tbody>
     </table>
    </div>
  )
}

export default YourOrder