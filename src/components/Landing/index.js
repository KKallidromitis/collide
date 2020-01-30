import React from 'react';
import logo from '../images/logo.png';
import { Icon } from 'react-icons-kit'
import { home } from 'react-icons-kit/icomoon/home'
import './index.css';
import {Container,Row,Col,Button} from 'react-bootstrap';

function Landing() {
  return (
    <div className='body'>
      <div className='w1'>
      <img src={logo} className="logo" alt="logo_collide"/>
        <Container className='c1'>
          <Row>
            <Col><p className="c1t1">Grab drinks and meet cool people</p></Col>
          </Row>
          <Row>
            <Col><h3 className="c1t2">New to the city, or looking to expand your social circle? Meet cool people through casual happy hours we organize around the city.</h3></Col>
          </Row>
          <Row className='con_btn'>
            <Button variant="primary" size="lg" className='btn_fb'>Connect with Facebook</Button>
          </Row>
        </Container>
      </div>
      <div className='w2'>
        <Container className='c2'>
          <Row >
          <Col md={{ span: 4}}>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}} className='icons'><i class="circle-icon"><Icon size={26} icon={home}/></i></div>
            <h1 className="c2t1">Convenient</h1>
            <p className="c2t2">We host small group happy hours within walking distance of your home and which fit around your schedule</p>
          </Col>
          <Col md={{ span: 4}}>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}} className='icons'><i class="circle-icon"><Icon size={26} icon={home}/></i></div>
            <h1 className="c2t1">Connect</h1>
            <p className="c2t2">Meet people who live nearby, and have similar interests and availability. See them again at another event!</p>
          </Col>
          <Col md={{ span: 4}}>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}} className='icons'><i class="circle-icon"><Icon size={26} icon={home}/></i></div>
            <h1 className="c2t1">Casual</h1>
            <p className="c2t2">Come whenever, and leave whenever. There is no agenda, no set schedule, and no pressure or awkward conversation</p>
          </Col>
          </Row>
        </Container>
      </div>
      <div className='w3'>
        <Container className='c3'>
          <Col>
            <Row className="how"><h1 className="c3t1">How does it work?</h1></Row>
            <Row>
              <h1 className="c3t2">Step 1:</h1>
              <p className="c3t3">Provide your zip code and availability and we'll send you updates about the happy hours we host that are convenient for your location and schedule.</p>
            </Row>
             <Row>
              <h1 className="c3t2">Step 2:</h1>
              <p className="c3t3">Each event will have a dedicated liaison to help you locate the group, make introductions, and answer any questions.</p>
            </Row>
            <Row>
              <h1 className="c3t2">Step 3:</h1>
              <p className="c3t3">Come whenever and leave whenever. Our events are unstructured and casual, and meant to ensure everyone feels comfortable and included.</p>
            </Row>
            <Row>
              <h1 className="c3t2">Step 4:</h1>
              <p className="c3t3">We regularly host events so you’ll likely see the same people multiple times allowing you to slowly build connections and develop new friendships.</p>
            </Row>
          </Col>
        </Container>
      </div>
      <div className='w4'>
        <Container className='c4'>
          <Row>
          <h1 className="c1t1">Sounds cool? Try it out!</h1>
          <Button variant="primary" size="lg" className='btn_fb'>Connect with Facebook</Button>
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
