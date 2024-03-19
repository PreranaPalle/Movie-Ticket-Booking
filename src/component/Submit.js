import React, { Component } from 'react'
import './Styles.css'

export class Submit extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       submit:true
    }
  }
  submitValues=()=>{
    this.setState({
      submit:false
    })
  }
  
  render(props) {
    return (
      <div>
        <br/>
        Theatere:{this.props.theatere}
        <br/>
        <br/>
        Seat:{this.props.ticket}
        <br/>
        <br/>
        Movie:{this.props.movie}
        <br/>
        <br/>
        Show Time:{this.props.ShowTime}
      <br/>
      <br/>
      <button onClick={this.submitValues}>Pay {200*this.props.number}</button>
      </div>



    )
  }
}

export default Submit