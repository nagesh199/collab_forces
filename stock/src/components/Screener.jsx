import React from 'react'
import { useEffect,useState } from 'react';
import io from "socket.io-client"
import styles from '../styles/screener.module.css'
const Screener = () => {
  const socket = io.connect("http://localhost:8080");
  const [stockData,setStockData] = useState([]);
  const [count,setCount] = useState(5);
  
  useEffect(()=>{
    getdata()
  },[])
  const getdata = ()=>{
    socket.on("stock",(payload)=>{
      setStockData(payload.indexdata)
    });
    
  }
  useEffect(()=>{
       setInterval(()=>{
            setCount(count+Math.random()*10)
       },5000)
  },[])

  return (
    <div className={styles.scontainer}>
     <div style={{display: 'grid',gridTemplateColumns:"50% 50%",justifyContent: 'space-around'}}>
      <h2  style={{marginLeft:'2%'}}>Index</h2>
      <p style={{marginLeft:'72%',backgroundColor:'#0456B9',color:'white',paddingTop:'2px',paddingLeft:"5px",width:"70px",height:'20px',borderRadius:"3px",cursor:'pointer',fontFamily:'Arial", sans-serif',fontSize:'15px'}}>Screener</p>
     </div>
    <div className={styles.sindex}>
    {stockData.map((item)=>(
      <div style={{fontFamily:'sans-serif'}} key={item._id}>
        <p style={{marginLeft:'5%',fontSize:'16px',marginLeft:'10%'}}>{item.title}</p>
       <div style={{display:"flex",gap:"3%",marginTop:'-8%',marginLeft:'10%'}}>
        <p style={{color:'green',fontSize:'12px'}}>{(item.current+count).toFixed(2)}</p>
        <p style={{color:'green',fontSize:'12px'}}>{Math.abs(item.basePrice-item.current+count).toFixed()}</p>
        <p style={{color:'green',fontSize:'12px'}}>({((Math.abs((item.basePrice-(item.current+count)))/item.current)*100).toFixed(2)} %)</p>
        </div>
      </div>
  ))}
    </div>
    </div>
  )
}

export default Screener
