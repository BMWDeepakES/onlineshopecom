import { Col, Container, Row } from "reactstrap";
import "./App.css";
import Header from "./components/Header"
import Menues from "./components/Menues";
import Home from "./components/Home";
import { Route, BrowserRouter as Router } from "react-router-dom";
import ViewUsers from "./components/ViewUsers";
import UserRegistration from "./components/UserRegistration";

/* The following line can be included in a src/App.scss */

function App() {
  return (
    <div>
      <Router>
       <Header />
        <Row>
          <Col md={3} >
            <Menues />
          </Col>
          <Col md={9}>
           <Route path="/" Component={Home} exract />
           <Route path="/user-register" Component={UserRegistration} exract />
           <Route path="/user-view" Component={ViewUsers} exract />
          </Col>
        </Row>
      </Router>
    </div>
  );
}

export default App;
