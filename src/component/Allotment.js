import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import Submit from './Submit';

export class Allotment extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             seatNo:'',
             submit:true,
             no:0
        }
    }
    getNo=(event)=>{
        this.setState({
            seatNo:[...this.state.seatNo,event.target.value]
        })
        this.setState(prevState=>{
         return { no:prevState.no+1}
        })
    }
    SubmitHandler=()=>{
        this.setState({
            submit:false
        })

    }
    
  render() {
    return (
      <div>
        {this.state.submit?
        <div>
        <Table>
      <tbody>
      {Array.from({ length: 10}).map((_,row) => (
        <tr>
        {Array.from({ length: 10 }).map((_,column) => (
            <td>
            <input type="checkbox" name='check' onChange={this.getNo} value={String.fromCharCode(row+65)+" "+(column+1)}></input>
            {/* <p>{String.fromCharCode(row+65)}{column+1}</p> */}
            </td>
          ))}     
        </tr>
        ))}  
      </tbody>
    </Table>
    <button onClick={this.SubmitHandler}>Submit</button>
    </div>:
    <Submit ticket={this.state.seatNo} number={this.state.no} city={this.props.city} movie={this.props.movie} theatere={this.props.theatere} no={this.props.no} ShowTime={this.props.ShowTime}></Submit>}

      </div>
    )
  }
}

export default Allotment