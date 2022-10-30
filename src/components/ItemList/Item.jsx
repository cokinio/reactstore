import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ItemCount from './counter/ItemCount'

function Item(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.imgurl} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
         {props.descriptiom}
        </Card.Text>
        <ItemCount stock={props.stock}/>
      </Card.Body>
    </Card>
  )
}

export default Item