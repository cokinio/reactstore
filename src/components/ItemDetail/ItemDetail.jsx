import React from 'react'
import Card from 'react-bootstrap/Card';

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
      </Card.Body>
    </Card>
  )
}

export default ItemDetail