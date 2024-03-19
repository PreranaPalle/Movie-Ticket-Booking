import React, { Component } from 'react'
import ticketimg from './barcode.png'

export class Ticket extends Component {
  render() {
    return (
      <div className='ticket'>
        <img className='ticketimg' src={ticketimg} width={100} height={200}></img>
        <div className='details'>
            <h1 style={{color:'white'}}>Movie</h1>
        </div>
      </div>
    )
  }
}

export default Ticket