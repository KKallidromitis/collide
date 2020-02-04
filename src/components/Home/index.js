import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
// import ReactDOM from "react-dom";
//import { Dropdown } from 'semantic-ui-react'
// import { Container, Header, List } from "semantic-ui-react";
import Example from "./example";
// import PropTypes from 'prop-types';
import WeekdayOptions from './WeekdayOptions';
import WeekendOptions from './WeekendOptions';
import Checkbox from './checkbox';
import {Row,Col} from 'react-bootstrap';
// import Firebase from "firebase";
import { withFirebase } from '../Firebase/context';
import { compose } from 'recompose';

const App = ({ children }) => (
  <div style={{ margin: 20 }}>
    <p> At what time are you available starting on the weekdays? </p>
    {children}
  </div>
);

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

class HomeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checkedItems: new Map(),
    }

    this.handleChange = this.handleChange.bind(this);
  }

  writeUserData = (event) => {
    event.preventDefault(); 
    console.log("hi")
    this.props.firebase.set({
      blah: "hi",
      roles: {},
    });
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
              <p>
                Which days would you like to hang out?
              </p>

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
              <p>
                When are you free on the weekends?
              </p>
            </div>
          </div>
        </div>

        <div className='temp'>
          <Row >
          <Col md={{ span:4}}>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}} className='icons'> </div>
            <p>
              Saturday
            </p>
          </Col>

          <Col md={{ span: 4}}>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}} className='icons'> </div>
            <p>
              Sunday
            </p>
          </Col>
          </Row>
        </div>

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

const Home = compose(
  withRouter,
  withFirebase,
)(HomeComponent);

export default Home;