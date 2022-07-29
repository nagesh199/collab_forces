import { useState } from 'react';
import Chatbot from './components/Chatbot/Chatbot';
import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Home from './pages/Home';
import { Landing } from './pages/Landing';
import MainRoute from './routes/MainRoute';



function App() {
  // const [show, setShow] = useState(false);
  // return (
  //   <div className="App">
  //     {show && <Chatbot />}
  //     <button onClick={() => {
  //       setShow(!show)
  //      }}>Help?</button>
  
  return (
    <div className="App">
    <MainRoute/>
    </div>
  );
}

export default App;
