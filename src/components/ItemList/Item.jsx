import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ItemCount from './counter/ItemCount'

function Item(props) {

  let {title,images,stock,category}=props.producto;

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={images} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
         {category}
        </Card.Text>
        <ItemCount stock={stock}/>
      </Card.Body>
    </Card>
  )
}

export default Item