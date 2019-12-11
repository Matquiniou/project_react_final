import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom";

class App extends Component {
  render(){

    return (
      <Navbar bg="dark" variant="dark">
      <Link to="/">
              <Navbar.Brand href="#">Accueil</Navbar.Brand>
      </Link>
        <Nav className="mr-auto">
            <Form>
              <Link to="/Measure">
                <Button variant="outline-info">Measure</Button>
              </Link>
            </Form>
            <Form>
              <Link to="/Sensors">
                <Button variant="outline-info">Sensors</Button>
              </Link>
            </Form>
        </Nav>
        <Form inline>
        <Link to="/Users">
        <Button variant="outline-info">Users</Button>
        </Link>
        </Form>
      </Navbar>
    );
  }
}

export default App;
