
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MainRoute from './routes/MainRoute';



function App() {
  
  
  return (
    <div className="App">
      <BrowserRouter>
        <MainRoute />
      </BrowserRouter>
    </div>
  );
}

export default App;
