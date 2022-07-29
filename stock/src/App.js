import { useState } from 'react';
import Chatbot from './components/Chatbot/Chatbot';
import './App.css';


function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      {show && <Chatbot />}
      <button onClick={() => {
        setShow(!show)
       }}>Help?</button>
    </div>
  );
}

export default App;
