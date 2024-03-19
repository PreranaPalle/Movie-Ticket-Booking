import React, { useEffect, useState, useContext, createContext } from 'react'
import axios from 'axios'
import './Styles.css'
import { Card, CardBody } from 'react-bootstrap';
import { useGeolocation } from '@uidotdev/usehooks';
import Next from './Next';

function Place() {
  const [place, setPlace] = useState('');
  const [temp, setTemp] = useState('');
  const [descrption, setDescrption] = useState('');
  const currTime = new Date().getHours();
  const state = (currTime < 12 ? 'Morning' : currTime < 18 ? 'Afternoon' : 'Evening');
  const [submit, setSubmit] = useState(false);
  const time = new Date().getTime();
  const state1 = useGeolocation();
  const userContext = createContext();
  const handleChange = (event) => {
    setPlace(event.target.value)
  }
  const handleSubmit = () => {
    setSubmit(true)
    console.log(state1)
    axios.get(`http://localhost:8080/getTemp/${place}/${state}`).then((res) => { setDescrption(res.data[0].descrption); setTemp(res.data[0].TEMP); }).catch((err) => console.log(err))
  }
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }, []);
  return (
    <userContext.Provider value={time}>
      <div className='weather mx-auto'>
        <label htmlFor="place">Place:</label>
        <input type='text' id="place" onChange={handleChange} />
        <button onClick={handleSubmit}>Get Weather</button>
        {/* <h1>{JSON.stringify(state1, null, 2)}</h1> */}
        <div className="cardClass">
          <Card>
            {/* <Card.Title>{place}</Card.Title> */}
            <h3>{descrption}</h3>
            <h1>{temp}</h1>
            <h2>{place}</h2>
            {latitude} {longitude}

          </Card>
        </div> 
      </div>
    </userContext.Provider>
  )
}

export default Place