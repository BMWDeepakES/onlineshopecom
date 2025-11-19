import React from "react";
import { Link, Links } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";

const Menues = () => {
  return (
    <div className="container my-2">
      <ListGroup as="ul">
        <Link className="list-group-item list-group-action" as="li" tag="a" to="/home" active> Home </Link>
        <Link className="list-group-item list-group-action" as="li" tag="a" to="/user-view"> Users </Link>
        <Link className="list-group-item list-group-action" as="li" tag="a" to="/user-register"> Register User </Link>

        <Link className="list-group-item list-group-action" as="li" tag="a" to="#"> Orders </Link>
        <Link className="list-group-item list-group-action" as="li" tag="a" to="#"> Stocks </Link>
        <Link className="list-group-item list-group-action" as="li" tag="a" to="#"> Account Setting </Link>
      </ListGroup>
    </div>
  );
}

export default Menues;
