import React, { Component } from 'react'
import './Styles.css'
import logoImage from './logo.png'
import { Button, Form } from 'react-bootstrap'
import MyDropdown from './First'

export class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:'',
             submit:true
        }
    }
    handleInputChange=(event)=>{
        this.setState({...this.state,
            username:event.target.value
        })
    }
    submitHandler=(event)=>{
      this.setState({
        submit:false
      })
    }
    
  render() {
    console.log('User:',this.state)
    return (
        <div>
        {this.state.submit?
      <div className="container-class">
        <img src={logoImage} width={200}height={100}/>  
        <div class="form-class">
        <Form>
            <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control type='text' value={this.state.username} placeholder='Enter Name' onChange={this.handleInputChange}></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' placeholder='EnterPassword'></Form.Control>
            </Form.Group>
            <br/>
            <Button variant='primary' type='submit' onClick={this.submitHandler}>Submit</Button>
        </Form>
        </div>
      </div>:
      <MyDropdown name={this.state.username} ></MyDropdown>}
      </div>

    )
  }
}

export default Login