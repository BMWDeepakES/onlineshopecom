import React from "react";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Home from "./Home";
import AllUsers from "./AllUsers";
import UserRegistration from "./UserRegistration";

function Header() {
  return (
    <div>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Users</Nav.Link>
            <Nav.Link href="#features">Products</Nav.Link>
            <Nav.Link href="#pricing">Orders</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/* <Home users={{userId:1,firstName:"Deepak",lastName:"Salve"}}/>
      <AllUsers />
      <UserRegistration /> */}
    </div>
  );
}

export default Header;
