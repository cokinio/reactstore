import React from "react";
import { cartContext } from "../context/cartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import {createBuyOrder} from "../services/firestore";
import Button from 'react-bootstrap/Button';
import CartForm from "./CartForm";

let orderNumber=null;

function CartView() {
	const miContext = useContext(cartContext);
	const { cart, clear, removeItem, itemsInCart, totalCart, subtotal } =
		miContext;

	async function handleBuyCart(evt){
		let order={
			buyer:{name:"Juan", phone:321856987, email:"juan@yahoo.com"},
			items:cart,
			date: new Date(),
			total: totalCart(),
		}
		orderNumber=await createBuyOrder(order);
		console.log(orderNumber);
		clear();
	}
	

  if ((itemsInCart()===0) && (orderNumber===null)){
    return(
      <div>
      <h2>Carrito Vacío</h2>
      <Link	to={`/`}><p>Presione aqui para regresar a la pagina principal</p></Link>
      </div>
    )
	}

	else if ((itemsInCart()===0) && (orderNumber!==null)) {
		return(
			<div>
				<h1>Compra realizada</h1>
				<p>su numero de orden es: {orderNumber}</p>
			</div>
		)
	}


	return (
		<div>
			<table className="table">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Producto</th>
						<th scope="col">Imagen</th>
						<th scope="col">Cantidad</th>
						<th scope="col">Precio</th>
						<th scope="col">Subtotal</th>
						<th scope="col">Borrar producto</th>
					</tr>
				</thead>
				<tbody>
					{cart.map((item, index) => {
						return (
							<React.Fragment key={item.id}>
								<tr>
									<th scope="row">{index}</th>
									<td>
										<Link
											to={`/item/${item.id}`}
											style={{ textDecoration: "none" }}
										>
											{item.title}
										</Link>
									</td>
									<td>
										<img
											src={item.images}
											alt={item.title}
											style={{ height: "50px", width: "auto" }}
										/>
									</td>
									<td>{item.cant}</td>
									<td>{item.price}</td>
									<td>${subtotal(item.price, item.cant)}</td>
									<td>
										<button onClick={() => removeItem(item.id)}>X</button>
									</td>
								</tr>
							</React.Fragment>
						);
					})}
					<tr>
						<th scope="row"></th>
            			<td></td>
						<td></td>
						<td>Cantidad productos: {itemsInCart()}</td>
						<td></td>
						<td>Total: ${totalCart()}</td>
						<td></td>
					</tr>
				</tbody>
			</table>
			<CartForm/>
			<Button onClick={clear} variant="danger" className="mx-2">Borrar Carrito</Button>
			<Button onClick={handleBuyCart} variant="success" className="mx-2">Realizar compra</Button>
		</div>
	);
}

export default CartView;
