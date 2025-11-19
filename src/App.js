import { Col, Container, Row } from "reactstrap";
import "./App.css";
import Header from "./components/Header"
import Menues from "./components/Menues";
import Home from "./components/Home";
import {Routes, BrowserRouter as Router, Route } from "react-router-dom";
import UserRegistration from "./components/UserRegistration";
import AllUsers from "./components/AllUsers";

/* The following line can be included in a src/App.scss */

function App() {
  return (
    <div>
      <Router>
        <Container>
       <Header />
        <Row>
          <Col md={3} >
            <Menues />
          </Col>
          <Col md={9}>
           <Routes>
             <Route path="/" Component={Home} exact />
             <Route path="/home" Component={Home} exact />
             <Route path="/user-register" Component={UserRegistration} exact />
             <Route path="/user-view" Component={AllUsers} exact />
           </Routes>
          </Col>
        </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
