import React,{useEffect,useState} from 'react'
import  Dropdown  from 'react-bootstrap/Dropdown';
import { Form } from 'react-bootstrap';
import axios from 'axios';


function DropDown(props) {
    const [city,setCity]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:8080/ticket')
        .then((res) => {
          const newData = res.data.map((x) => x.city);
          setCity((prevCity) => [...prevCity,newData]);
        },[])
        .catch((err) => console.log(err));
},[])
  return (
    // <div>
    //     {/* {props.value.map(x=>
    //     <Form>
    //         <label >x</label>
    //          <Dropdown>
    //           {/* <Dropdown.Toggle variant='Primary'>{city}</Dropdown.Toggle> */}
    //           <Dropdown.Menu>
    //             {this.options.city.map(option =>
    //               <Dropdown.Item key={option} eventKey={option} value={option}>{option}</Dropdown.Item>)}
    //           </Dropdown.Menu>
    //         </Dropdown>
    //         </Form>)} */}
    // </div>
    <div>{props.value}</div>
  )
}

export default DropDown