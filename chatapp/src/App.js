import logo from './logo.svg';
import './App.css';
import ChatBot from 'react-simple-chatbot';

function App() {
  const steps = [
    {
        id: '0',
        message: 'Hey Geek!',
        end: true
    }
];
  return (
    <div className="App">
     <h1>Welcome to Geeksforgeeks</h1>
            <ChatBot steps={steps} />
    </div>
  );
}

export default App;
