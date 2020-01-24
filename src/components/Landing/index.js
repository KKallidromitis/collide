import React from 'react';
import logo from '../images/logo.png';
import { Icon } from 'react-icons-kit'
import { home } from 'react-icons-kit/icomoon/home'
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
      <div className='w2'>
        <Container className='c2'>
          <Row >
          <Col md={4}>
          <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}} ><i class="circle-icon"><Icon icon={home}/></i></div>
          <h1 className="c2t1 ">Convenient</h1>
          <h1 className="c1t1">We host small group happy hours within walking distance of your home and which fit around your schedule</h1>
          </Col>

          <Col md={4}><h1 className="c1t1">Do fun stuff with cool people</h1></Col>
          <Col md={4}><h1 className="c1t1">Do fun stuff with cool people</h1></Col>
          </Row>
        </Container>
      </div>
      <div className='w3'>
        <Container className='c3'>
          <Row>
          <Col><h1 className="c1t1">Do fun stuff with cool people</h1></Col>
          <Col><h1 className="c1t1">Do fun stuff with cool people</h1></Col>
          <Col><h1 className="c1t1">Do fun stuff with cool people</h1></Col>
          </Row>
        </Container>
      </div>
      <div className='w4'>
        <Container className='c4'>
          <Row>
          <Col><h1 className="c1t1">Do fun stuff with cool people</h1></Col>
          <Col><h1 className="c1t1">Do fun stuff with cool people</h1></Col>
          <Col><h1 className="c1t1">Do fun stuff with cool people</h1></Col>
          </Row>
        </Container>
      </div>
      <div>
        <Container className='footer'>
          <p>© 2019 All rights reserved </p>
        </Container>
      </div>
    </div>
  );
}

export default Landing;
