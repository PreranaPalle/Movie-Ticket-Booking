import React, { Component } from 'react';
import  Dropdown from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { DropdownButtonProps } from 'react-bootstrap';
import Submit from './Submit';

class FirstScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCity: '',
      selectedTheatere: '',
      selectedMovie: '',
      selectedShowTime: '',
      selectedNo: '',
      changed: 0
    };
    this.options = {
      city: ["Select City","Hyderabad", "Bangalore", "Chennai"],
      theatere: ["Select Theatere","PVR", "AMB", "Atrium"],
      movie: ["Select Movie","ABC", "DEF", "GHI"],
      ShowTime: ["Select ShowTime","9AM", "2PM", "6PM"]
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
  handleSubmit(e){
    console.log("SubmitedData:",e);
    // return (<Submit city={this.state.selectedCity} movie={this.state.selectedMovie} theatere={this.state.selectedTheatere} no={this.state.selectedNo} ShowTime={this.state.selectedShowTime}></Submit>)
  }
  handleSelect=(e)=>{

  }
  
  render() {
    const { changed } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <input placeholder='name'/>
            <label>City</label>
            <select onSelect={this.handleSelect}>
              {this.options.city.map((option,i) =>
                  <option value={i?option:""} hidden={i?false:true}>{option}</option>)}
            </select><br/><br/>
            <label>Theatere</label>
            <select>
                {this.options.theatere.map((option,i) =>
                  <option value={i?option:""} hidden={i?false:true}>{option}</option>)}
            </select>
            <input type='submit' value={'Submit'}/>
        </form>        
      </div>
    );
  }
}

export default FirstScreen;
