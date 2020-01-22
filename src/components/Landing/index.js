import React from 'react';
import logo from '../images/logo.png';
import './index.css';
import {Container,Row,Col} from 'react-bootstrap';

function Landing() {
  return (
    <div className='body'>
      <div className='w1'>
      <img src={logo} className="logo" alt="logo_collide"/>
        <Container className='c1'>
          <Row>
            <Col><h1 className="c1t1">Do fun stuff with cool people</h1></Col>
          </Row>
          <Row>
          <Col><h3 className="c1t2">Whether you are visiting or new in town or looking to expand your social circle. Collide is the least awkward and best way to meet new people.</h3></Col>
          </Row>
          <Col md={6}/>
          </Container>
      </div>
    </div>
  );
}

export default Landing;
