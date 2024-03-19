import logo from './logo.svg';
import './App.css';
import FirstScreen from './component/FirstScreen';
import First from './component/First';
import MyDropdown from './component/First';
import Allotment from './component/Allotment';
import Submit from './component/Submit';
import Login from './component/Login';
import Ticket from './component/Ticket';
import { BrowserRouter as Router, Route,Routes, BrowserRouter } from 'react-router-dom';
import Axios from './component/Axios';
import Login2 from './component/Login2';
import DropdownSelection from './component/DropdownSelection';
import DropDown from './component/DropDown';

function App() {
  return (
      //   <BrowserRouter>
      // <Routes>
      // <Route path="/" element={<Login2/>}></Route>
      //   <Route path="/next" element={<Ticket />}></Route>
      //   </Routes>
      //   </BrowserRouter>
      // <Axios></Axios>
      // <DropdownSelection></DropdownSelection>
      <Login></Login>
  );
}

export default App;
