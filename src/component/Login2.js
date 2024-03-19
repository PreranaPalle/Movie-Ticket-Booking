import React,{useState} from 'react'
import './Styles.css'
import logoImg from'./logo.png'
import { Button, Form} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { redirect } from 'react-router-dom'

function Login2() {
    const [userName,setUserName]=useState("");
    const nav=useNavigate();
    const data = { name: "John", age: 30 };
    const handleSubmit=(event)=>{
        event.preventDefault();
        nav(`/next`)
    }
  return (
    <div className='container-class'>
    <img src={logoImg} width={200}height={100}></img>
    <div className="form-class">
    <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control type='text' value={userName} placeholder='Enter Name' onChange={(event)=>{setUserName(event.target.value);}}></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' placeholder='EnterPassword'  autoComplete="on"></Form.Control>
            </Form.Group>
            <br/>
            <Button variant='primary' type='submit'>Submit</Button>
        </Form>
    </div>
    </div>
  )
}

export default Login2