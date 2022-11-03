import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ItemCount from './counter/ItemCount'

function Item(props) {

  let {title,description,images,stock}=props.producto;

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={images[0]} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
         {description}
        </Card.Text>
        <ItemCount stock={stock}/>
      </Card.Body>
    </Card>
  )
}

export default Item