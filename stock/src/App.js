import logo from './logo.svg';
import io from "socket.io-client"
import './App.css';
import {useEffect, useState} from "react";

function App() {
  const socket = io.connect("http://localhost:8080");
  const [stockData,setStockData] = useState([]);
  
  useEffect(()=>{
    getdata()
  },[])
  const getdata = ()=>{
    socket.on("stock",(payload)=>{
      setStockData(payload.indexdata)
    });
    
  }
  // console.log(stockData)
  return (
    <div className="App">
       {stockData.map((el)=>{
         return <h1>{(el.current)+(Math.random()*10)}</h1>
       })}
    </div>
  );
}

export default App;
