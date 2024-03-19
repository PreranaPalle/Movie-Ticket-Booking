import React from 'react'
import { Button } from 'react-bootstrap'
import ModalToDo from './ModalToDo';

function Main() {
  const [show,setShow]=React.useState(false);
  return (
    <div style={{backgroundColor:"#f8f8ff"}}>
        <h1>To Do List</h1>
        <Button onClick={()=>setShow(true)}>Add Task</Button>
        <ModalToDo show={show} onHide={()=>setShow(false)}></ModalToDo>
    </div>
  )
}

export default Main