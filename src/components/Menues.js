import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

const Menues = () => {
  return (
    <div className="container my-2">
      <ListGroup as="ul">
        <ListGroupItem as="li" tag="a" href="/home" active> Home </ListGroupItem>
        <ListGroupItem as="li" tag="a" href="#"> Customers </ListGroupItem>
        <ListGroupItem as="li" tag="a" href="#"> Products </ListGroupItem>
        <ListGroupItem as="li" tag="a" href="#"> Orders </ListGroupItem>
        <ListGroupItem as="li" tag="a" href="#"> Stocks </ListGroupItem>
        <ListGroupItem as="li" tag="a" href="#"> Account Setting </ListGroupItem>
      </ListGroup>
    </div>
  );
}

export default Menues;
