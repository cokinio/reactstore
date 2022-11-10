import React from 'react'
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemList/counter/ItemCount'

function ItemDetail(props) {

  let {title,images,stock,category,price}=props.producto;


  return (
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={images} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
        Categoria:{category}
        </Card.Text>
        <Card.Text>
         {price}
        </Card.Text>
        <ItemCount stock={stock}/> 
      </Card.Body>
    </Card>
  )
}

export default ItemDetail