import React, { Component } from "react";
import Checkbox from "./checkbox";
import {Container,Row,Col,Button,Carousel} from 'react-bootstrap';

const OPTIONS_1 = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const OPTIONS_2 = ["Morning (10-1 PM)", "Afternoon(2-6 PM)", "Evening (8-11 PM)"];

class Home extends Component {
  state = {
    checkboxes: OPTIONS_1.reduce(
      (options, option) => ({
        ...options,
        [option]: false
      }),
      {}
    )
  }
  
  state_2 = {
    checkboxes: OPTIONS_2.reduce(
      (options, option) => ({
        ...options,
        [option]: false
      }),
      {}
    )
  }

  state_3 = {
    checkboxes: OPTIONS_2.reduce(
      (options, option) => ({
        ...options,
        [option]: false
      }),
      {}
    )
  }
  ;

  selectAllCheckboxes = isSelected => {
    Object.keys(this.state.checkboxes).forEach(checkbox => {
      // BONUS: Can you explain why we pass updater function to setState instead of an object?
      this.setState(prevState => ({
        checkboxes: {
          ...prevState.checkboxes,
          [checkbox]: isSelected
        }
      }));
    });
  };

  selectAll = () => this.selectAllCheckboxes(true);

  deselectAll = () => this.selectAllCheckboxes(false);

  handleCheckboxChange = changeEvent => {
    const { name } = changeEvent.target;

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
        console.log(checkbox, "is selected.");
      });
  };

  createCheckbox = option => (
    <Checkbox
      label={option}
      isSelected={this.state.checkboxes[option]}
      onCheckboxChange={this.handleCheckboxChange}
      key={option}
    />
  );

  createCheckboxes = () => OPTIONS_1.map(this.createCheckbox);
  createCheckboxes_2 = () => OPTIONS_2.map(this.createCheckbox);
  createCheckboxes_3 = () => OPTIONS_2.map(this.createCheckbox);

  render() {
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col-sm-12">

            <div className='container'>
                <text>
                    Which days would you like to hang out?
                </text>
            </div>

            <form onSubmit={this.handleFormSubmit}>
              {this.createCheckboxes()}

              <div className="form-group mt-2">
                <button
                  type="button"
                  className="btn btn-outline-primary mr-2"
                  onClick={this.selectAll}
                >
                  Select All
                </button>
                <button
                  type="button"
                  className="btn btn-outline-primary mr-2"
                  onClick={this.deselectAll}
                >
                  Deselect All
                </button>
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-sm-12">

            <div className='container'>
                <text>
                    When do you want to hang out on Saturday?
                </text>
            </div>

            <form onSubmit={this.handleFormSubmit}>
              {this.createCheckboxes_2()}

              <div className="form-group mt-2">
                <button
                  type="button"
                  className="btn btn-outline-primary mr-2"
                  onClick={this.selectAll}
                >
                  Select All
                </button>
                <button
                  type="button"
                  className="btn btn-outline-primary mr-2"
                  onClick={this.deselectAll}
                >
                  Deselect All
                </button>
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-sm-12">

            <div className='container'>
                <text>
                    When do you want to hang out on Sunday?
                </text>
            </div>

            <form onSubmit={this.handleFormSubmit}>
              {this.createCheckboxes_3()}

              <div className="form-group mt-2">
                <button
                  type="button"
                  className="btn btn-outline-primary mr-2"
                  onClick={this.selectAll}
                >
                  Select All
                </button>
                <button
                  type="button"
                  className="btn btn-outline-primary mr-2"
                  onClick={this.deselectAll}
                >
                  Deselect All
                </button>
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;



/*import React from "react";
import ReactDOM from "react-dom";

//import "./styles.css";
import './index.css';

import { useForm, useField, splitFormProps } from "react-form";

function SelectField(props) {
  const [field, fieldOptions, { options, ...rest }] = splitFormProps(props);

  const {
    value = "",
    setValue,
    meta: { error, isTouched }
  } = useField(field, fieldOptions);

  const handleSelectChange = e => {
    setValue(e.target.value);
  };

  return (
    <>
      <select {...rest} value={value} onChange={handleSelectChange}>
        <option disabled value="" />
        {options.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>{" "}
      {isTouched && error ? <em>{error}</em> : null}
    </>
  );
}

function MultiSelectField(props) {
  const [field, fieldOptions, { options, ...rest }] = splitFormProps(props);

  const {
    value = [],
    setValue,
    meta: { isTouched, error }
  } = useField(field, fieldOptions);

  const handleSelectChange = e => {
    const selected = Array.from(e.target.options)
      .filter(option => option.selected)
      .map(option => option.value);

    setValue(selected);
  };

  return (
    <>
      <select {...rest} value={value} onChange={handleSelectChange} multiple>
        <option disabled value="" />
        {options.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {isTouched && error ? <em>{error}</em> : null}
    </>
  );
}

function MyForm() {
  const {
    Form,
    meta: { canSubmit }
  } = useForm({
    debugForm: true,
    onSubmit: values => {
      console.log("Huzzah!", values);
    }
  });

  return (
    <Form>
      <div>
        <label>
          Favorite Color:{" "}
          <SelectField
            field="favoriteColor"
            options={["Red", "Blue", "Green", "Yellow"]}
            validate={value => (!value ? "This is required!" : false)}
          />
        </label>
      </div>

      <div>
        <label>
          Favorite Colors:{" "}
          <MultiSelectField
            field="favoriteColors"
            options={["Red", "Blue", "Green", "Yellow"]}
            validate={value =>
              value.length < 2 ? "At least 2 colors are required!" : false
            }
          />
        </label>
      </div>

      <div>
        <button type="submit" disabled={!canSubmit}>
          Submit
        </button>
      </div>
    </Form>
  );
}

function App() {
  return <MyForm />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);*/