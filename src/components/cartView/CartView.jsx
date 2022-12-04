import React from "react";
import { cartContext } from "../context/cartContext";
import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import CartForm from "./CartForm";
import CartTable from "./CartTable";

function CartView() {
	const miContext = useContext(cartContext);
	const {clear, itemsInCart,handleBuyCart} =
		miContext;


	//buying step=0 items in cart displayed
	//buying step=1 buy button already pressed //user mail typed once
	//buying step=2 user data completed // create order
	//buying step=3 buy order

	let [buyingStep,setBuyingStep]=useState(0);
	let [orderNumber, setOrderNumber]=useState(null);
	let [isClientDataSet, setClientDataSet]=useState(null);
	let [client,setClient]=useState({
        nombre:"",
        apellido:"",
        telefono:"",
        mail:"",
})

	function handleBuy(evt){
		setBuyingStep(++buyingStep);
		console.log(buyingStep)
	}
	
	function onSubmit(client){
		console.log(client)
		if (isClientDataSet===null){
			setClientDataSet(true);
			console.log(isClientDataSet)
			return;
		}
		setBuyingStep(++buyingStep);
		console.log(buyingStep)
	}
	
	async function createOrder(client){
		let order = await handleBuyCart(client);
		setOrderNumber(order);
	}
	
  if ((itemsInCart()===0) && (orderNumber===null)){
    return(
      <div>
      <h2>Carrito Vacío</h2>
      <Link	to={`/`}><p>Presione aqui para regresar a la pagina principal</p></Link>
      </div>
    )
	}

	//buying step =0 items in cart displayed
	if ((itemsInCart()!==0) && (orderNumber===null) && (buyingStep===0)){
	return (
		<div>
			<CartTable/>
			<Button onClick={clear} variant="danger" className="mx-2">Borrar Carrito</Button>
			<Button onClick={handleBuy} variant="success" className="mx-2">Realizar compra</Button>
		</div>
	);
	}

	//buying step=1 buy button already pressed // user mail typed once
	if ((itemsInCart()!==0) && (orderNumber===null) && (buyingStep===1)){
		return (
			<div>
				<h2>Para poder continuar con su compra por favor ingrese sus datos</h2>
				<CartForm onSubmit={onSubmit} client={client} setClient={setClient} isClientDataSet={isClientDataSet}/>
			</div>
		);
		}
	
		//buying step=2 user data completed // create order
	if ((itemsInCart()!==0) && (orderNumber===null) && (buyingStep===2)){
		let client1={...client};
		delete client1.mail;
		createOrder(client1);
	}
	//buying step =5
	else if ((itemsInCart()===0) && (orderNumber!==null)) {
		return(
			<div>
				<h1>Compra realizada</h1>
				<p>su numero de orden es: {orderNumber}</p>
			</div>
		)
	}


	return (
		<div className="d-flex justify-content-center">
        <div className="spinner-border" style={{width: "3rem", height: "3rem"}} role="status">
        <span className="visually-hidden">Cargando...</span>
        </div>
    </div>
	);
}

export default CartView;
