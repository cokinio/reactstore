import React from 'react'
// import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemList/counter/ItemCount'

function ItemDetail(props) {

  let {title,images,stock,category,price}=props.producto;


  return (
        <div className="row fluid mx-5 mt-5">
          <div className="col-md-4"> 
              <img src={images} alt={title}/>
          </div>
          <div className="col-md-8"> 
              <h1>{title}</h1>
              <p className='mb-5'>Categoria: {category}</p>
              <h2 className='mt-5'>Precio: {price}</h2>
              <p>Cantidad en stock {stock}</p>
              <ItemCount stock={stock}/>
          </div>
        </div>
  )
}

export default ItemDetail