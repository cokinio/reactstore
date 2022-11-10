import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

function Item(props) {

  let {title,images,stock,category,price,id}=props.producto;
  const urldetail=`/item/${id}`;

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
        <Link to={urldetail}>
          <Button className="btn btn-secondary">Ver mas</Button>
        </Link>
      </Card.Body>
    </Card>
  )
}

export default Item