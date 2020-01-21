import React from 'react';
import logo from './logo.png';
import dance from './img.jpg';
import './Land.css';
import {Container,Row,Col} from 'react-bootstrap';
import Mailchimp from 'react-mailchimp-form'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';

function Land() {
  return (
    <div>
      <div className='w1'>
        <Container>
          <Row>
            <Col className="c1"><img src={logo} className="Land-logo" alt="Land" /></Col>
          </Row>
          <Row>
            <Col className="moto"><h1 className="slogan">Do fun stuff with cool people</h1></Col>
          </Row>
          <Row>
            <Col className="survey"> 
              <Row><h2 className="emailt">Email Address</h2></Row>
              <Row> <Mailchimp action='https://collidesocial.us4.list-manage.com/subscribe/post?u=7be45acc36096180951ba48a5&amp;id=f2fa8beb69'
            fields={[
              {
                name: 'EMAIL',
                placeholder: 'Email',
                type: 'email',
                required: true
              }]} buttonClassName="chimp" className='form'/>
              </Row>
            </Col>
          <Col md={6}><h3 className="slogan">Develop your social circle casually and meet in person with like-minded people</h3></Col>
          </Row>
          <Row>
            <Col><img src={dance} className="Dance" alt="Dance" /></Col>
          </Row>
        </Container>
      </div>
      <div className='w2'>
        <h1 className="how" >How does it work?</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(255, 255, 255)', color: '#000' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(255, 255, 255)' }}
            iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
            icon={<PhoneAndroidIcon />}
          >
            <h3 className="vertical-timeline-element-title">Step 1</h3>
            <h4 className="vertical-timeline-element-subtitle">Sign up, put your name, zip code, email address, and availability</h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: 'rgb(255,255, 255)', color: '#000' }}
            icon={<LocationOnIcon />}
          >
            <h3 className="vertical-timeline-element-title">Step 2</h3>
            <h4 className="vertical-timeline-element-subtitle">We’ll coordinate an event based off of your availability and close by so it’s convenient for you</h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
            icon={<EmojiPeopleIcon />}
          >
            <h3 className="vertical-timeline-element-title">Step 3:Meetup</h3>
            <h4 className="vertical-timeline-element-subtitle">Come to the event, where you’ll have dedicated host to liaise with so you know where to go and what to do </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: 'rgb(0,0, 0)', color: '#fff' }}
            icon={<QuestionAnswerIcon />}
          >
            <h3 className="vertical-timeline-element-title">Step 4</h3>
            <h4 className="vertical-timeline-element-subtitle">Come whenever and leave whenever</h4>
            <p>
              Creative Direction, User Experience, Visual Design, SEO, Online Marketing
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
            icon={<PersonPinIcon />}
          >
            <h3 className="vertical-timeline-element-title">Step 5: Stay in touch</h3>
            <h4 className="vertical-timeline-element-subtitle">We’ll regularly host events so you’ll likely be able to see the same people over again so you can slowly develop your network + soical circle </h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
      <div className='w3'>
      </div>
      <div className='footer'>
        <Container className='copy'>
          <p>© 2019 All rights reserved </p>
        </Container>
      </div>
    </div>
  );
}

export default Land;
