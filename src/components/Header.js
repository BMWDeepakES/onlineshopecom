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
          <h3 style={{color:"white",fontFamily:"Arial",alignContent:"center"}}>Online Shop Admin Portal</h3>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
