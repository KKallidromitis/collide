import React from 'react';
import logo from './images/logo.png';
import dance from './images/img.png';
import './Main.css';
import {Container,Row,Col} from 'react-bootstrap';

function Main() {
  return (
    <div>
      <div className='w1'>
        <Container>
          <Row>
            <Col className="c1"><img src={logo} className="rounded float-left" alt="Land" /></Col>
          </Row>
          <Row>
            <Col className="moto"><h1 className="slogan">Do fun stuff with cool people</h1></Col>
          </Row>
          <Row>
            <Col className="survey"> 
            </Col>
          <Col md={6}><h3>Develop your social circle casually and meet in person with like-minded people</h3></Col>
          </Row>
          <Row>
            <Col><img src={dance} className="Dance" alt="Dance" /></Col>
          </Row>
          </Container>
      </div>
    </div>
  );
}

export default Main;
