import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Home from './pages/Home';
import { Landing } from './pages/Landing';
import MainRoute from './routes/MainRoute';


function App() {
  
  return (
    <div className="App">
    <MainRoute/>
    </div>
  );
}

export default App;
