import React, { Component } from "react";
import ReactDOM from "react-dom";
//import { Dropdown } from 'semantic-ui-react'
import { Container, Header, List } from "semantic-ui-react";
import Example from "./example";
import PropTypes from 'prop-types';
import WeekdayOptions from './WeekdayOptions';
import WeekendOptions from './WeekendOptions';
import Checkbox from './Checkbox';
import {Row,Col,Button,Carousel} from 'react-bootstrap';
import Firebase from "firebase";
import { withFirebase } from '../Firebase/context';

const App = ({ children }) => (
  <Container style={{ margin: 20 }}>
    <text> At what time are you available starting on the weekdays? </text>
    {children}
  </Container>
);

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checkedItems: new Map(),
    }

    this.handleChange = this.handleChange.bind(this);
  }

  writeUserData = () => {
    withFirebase.database()
      .ref("/survey/")
      .set({
        test: "temp"
        //user_id: "temp",
        //week_time: "pop",
        //weekends: ["Saturday", "Sunday"],
        //weekdays: ["Monday", "Tuesday"],
      });
      //.set(this.state);
    console.log("DATA SAVED");
  };

  handleChange(e) {
    const item = e.target.name;
    const isChecked = e.target.checked;
    this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
  }

  handleCheckboxChange = changeEvent => {
    const { name } = changeEvent.target;
    console.log(name);
    this.setState(prevState => ({
      checkboxes: {
        ...prevState.checkboxes,
        [name]: !prevState.checkboxes[name]
      }
    }));
  };

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();

    Object.keys(this.state.checkboxes)
      .filter(checkbox => this.state.checkboxes[checkbox])
      .forEach(checkbox => {
        //console.log(checkbox, "is selected.");
      });
  };

  render() {
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col-sm-12">

            <div className='container'>
              <text>
                Which days would you like to hang out?
              </text>

              <React.Fragment>
                {
                  WeekdayOptions.map(item => (
                  <label key={item.key}>
                  {item.name}
                  <Checkbox name={item.name} checked={this.state.checkedItems.get(item.name)} onChange={this.handleChange} />
                </label>
                 ))
                }
              </React.Fragment>
            </div>
          </div>
        </div>

        <App>
          <Example />
        </App>,

        <div className="row mt-5">
          <div className="col-sm-12">

            <div className='container'>
              <text>
                When are you free on the weekends?
              </text>
            </div>
          </div>
        </div>

        <Container className='temp'>
          <Row >
          <Col md={{ span:4}}>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}} className='icons'> </div>
            <text>
              Saturday
            </text>
          </Col>

          <Col md={{ span: 4}}>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}} className='icons'> </div>
            <text>
              Sunday
            </text>
          </Col>
          </Row>
        </Container>

        <div className="row mt-5">
          <div className="col-sm-12">
            <div className='container'>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}} className='icons'> </div>
              <React.Fragment>
                {
                  WeekendOptions.map(item => (
                  <label key={item.key}>
                  {item.name}
                  <Checkbox checked={this.state.checkedItems.get(item.name)} name={item.name} onChange={this.handleChange} />
                </label>
                 ))
                }
              </React.Fragment>
            </div>
          </div>
        </div>

        <form onSubmit={this.writeUserData}>
          <div className="form-group mt-2">
            <button type="submit" className="btn btn-primary">
              Save
            </button>
           </div>
        </form>
      </div>
    );
  }
}
export default Home;