import React, { Component, useState } from 'react';
import  Dropdown  from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.css';
import { DropdownButtonProps } from 'react-bootstrap';
import Submit from './Submit';
import Allotment from './Allotment';
import matchers from '@testing-library/jest-dom/matchers';
import Form from 'react-bootstrap/Form';
import Header from './Header';

class MyDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCity: 'Select City',
      selectedTheatere: 'Select Theatere',
      selectedMovie: 'Select Movie',
      selectedShowTime: 'Select timings',
      selectedNo: 'Select No',
      changed: 0,
      s:true
    };
    this.options = {
      city: ["Hyderabad", "Bangalore", "Chennai"],
      theatere: ["PVR", "AMB", "Atrium"],
      movie: ["ABC", "DEF", "GHI"],
      ShowTime: ["9AM", "2PM", "6PM"]
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCityChange = (event) => {
    this.setState({
      selectedCity: event,
      changed: 1
    });
    console.log(event)
  };

  handleTheatereChange = (event) => {
    this.setState({
      selectedTheatere: event,
      changed: 2
    });
    console.log("tghy")
  };

  handleMovieChange = (event) => {
    this.setState({
      selectedMovie: event,
      changed: 3
    });
  };

  handleTimeChange = (event) => {
    this.setState({
      selectedShowTime: event,
      changed: 4
    });
  };

  handleSeatsChange = (event) => {
    this.setState({
      selectedNo: event,
      changed: 5
    });
  };
  handleSubmit(){
   this.setState({s:false})
  }
  
  render() {
    const { changed,s ,selectedCity,selectedMovie,selectedNo,selectedShowTime,selectedTheatere} = this.state;

    return (
      <div class="Dropdown">
        <Header name={this.props.name}></Header>
        {s?
          <Form>
            <label >City:</label>
            <Dropdown onSelect={this.handleCityChange}>
              <Dropdown.Toggle variant='Primary'>{selectedCity}</Dropdown.Toggle>
              <Dropdown.Menu>
                {this.options.city.map(option =>
                  <Dropdown.Item key={option} eventKey={option} value={option}>{option}</Dropdown.Item>)}
              </Dropdown.Menu>
            </Dropdown>

            <label>Theater:</label>
            <Dropdown onSelect={this.handleTheatereChange}>
              <Dropdown.Toggle variant='Secondary'>{selectedTheatere}</Dropdown.Toggle>
              <Dropdown.Menu>
                {this.options.theatere.map(option =>
                  <Dropdown.Item disabled={!(changed > 0)} key={option} eventKey={option} value={option}>{option}</Dropdown.Item>)}
              </Dropdown.Menu>
            </Dropdown>

            <label>Movie:</label>
            <Dropdown onSelect={this.handleMovieChange}>
              <Dropdown.Toggle variant='Secondary'>{selectedMovie}</Dropdown.Toggle>
              <Dropdown.Menu>
                {this.options.movie.map(option =>
                  <Dropdown.Item disabled={!(changed > 1)} key={option} eventKey={option}>{option}</Dropdown.Item>)}
              </Dropdown.Menu>
            </Dropdown>

            <label>ShowTime:</label>
            <Dropdown onSelect={this.handleTimeChange}>
              <Dropdown.Toggle variant='Secondary'>{selectedShowTime}</Dropdown.Toggle>
              <Dropdown.Menu>
                {this.options.ShowTime.map(option =>
                  <Dropdown.Item disabled={!(changed > 2)} key={option} eventKey={option}>{option}</Dropdown.Item>)}
              </Dropdown.Menu>
            </Dropdown>

            <label>No of seats:</label>
            <Dropdown onSelect={this.handleSeatsChange}>
              <Dropdown.Toggle variant='Secondary'>{selectedNo}</Dropdown.Toggle>
              <Dropdown.Menu>
                {[1, 2, 3].map(option =>
                  <Dropdown.Item disabled={!(changed > 3)} key={option} eventKey={option}>{option}</Dropdown.Item>)}
              </Dropdown.Menu>
            </Dropdown>
          {changed != 5 ? '':<button onClick={this.handleSubmit}>Next</button>}
          </Form>:
       <Allotment city={this.state.selectedCity}movie={this.state.selectedMovie} theatere={this.state.selectedTheatere} no={this.state.selectedNo} ShowTime={this.state.selectedShowTime}></Allotment>}
        {/* <Submit city={this.state.selectedCity} movie={this.state.selectedMovie} theatere={this.state.selectedTheatere} no={this.state.selectedNo} ShowTime={this.state.selectedShowTime}></Submit> */}
        
      </div>
    );
  }
}

export default MyDropdown;
