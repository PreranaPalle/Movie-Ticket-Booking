import axios from 'axios'
import React, { useEffect, useState } from 'react'
const url="http://localhost:8080/get"

function Axios() {
  const [data,setData]=useState([])
  console.log("1"+1)

    useEffect(()=>{
        axios.get(url).then(res=>setData(res.data)).catch(err => console.log(err));
    },[])
  
  return (
    <div>{data.map((obj)=>Object.keys(obj).map((key,index)=><div key={index}>{obj[key]}</div>))}</div>
  )
}

export default Axios