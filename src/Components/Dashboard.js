import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

import Table from "./Table.js";
import Pie from "./Pie.js";
import Line from "./Line.js";
import Area from "./Area.js";
import Bar from "./Bar.js";
import Radar from "./Radar.js";
import Diagram from "./Diagram.js";



class App extends Component {
  render(){
    return (
      <Container className="pt-5">

        <Card className="text-center">
          <Card.Header>Evolution des données</Card.Header>
          <Card.Body>
        <Row>
          <Col xs={12} md={4} className="pb-2">
            <Line></Line>
          </Col>
          <Col xs={12} md={4} className="pb-2">
              <Area></Area>
          </Col>
          <Col xs={12} md={4}>
          <Bar></Bar>
          </Col>

        </Row>
        </Card.Body>

      </Card>
      <Card className="text-center">
        <Card.Header>Répartition</Card.Header>
        <Card.Body>
      <Row>
      <Col xs={12} md={4}>
      <Pie></Pie>
      </Col>
      <Col xs={12} md={4}>
      <Radar></Radar>
      </Col>
      <Col xs={12} md={4}>
      <Diagram></Diagram>
      </Col>
      </Row>
      </Card.Body>

    </Card>

      <Card className="text-center">
      <Card.Header>LES MESURES</Card.Header>
      <Card.Body>
      <Table></Table>
      </Card.Body>
      <Card.Footer className="text-muted"></Card.Footer>
      </Card>
      </Container>
    );
  }
}


export default App;
