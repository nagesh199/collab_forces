import React from 'react'
import styles from '../styles/losers.module.css';
import { useEffect,useState } from 'react';
import io from "socket.io-client";
const Lossers = () => {
  const [count,setCount] = useState(0);
  const socket = io.connect("http://localhost:8080");
  const [loseData,setLoseData] = useState([]);
  
  useEffect(()=>{
    getdata()
  },[])
  const getdata = ()=>{
    socket.on("stock",(payload)=>{
      setLoseData(payload.loserdata)
    });
    
  }
  useEffect(()=>{
    setInterval(()=>{
         setCount(count+Math.random()*10)
    },15000)
},[])
  return (
    <div className={styles.losserContainer}>
    <div style={{display: 'grid',gridTemplateColumns:"50% 50%",justifyContent: 'space-around'}}>
     <h2  style={{marginLeft:'2%'}}>Top Lossers</h2>
     <p style={{marginLeft:'72%',color:'#0456B9',paddingBottom:'3px',paddingLeft:"4px",width:"70px",height:'20px',borderRadius:"5px",cursor:'pointer'}}>See More</p>
    </div>
   <div className={styles.lossers}>
     {loseData.map((item)=>(
      <div style={{fontFamily:'sans-serif'}} key={item._id}>
        <img src={item.imgUrl} alt="logo" style={{width:'50px',marginLeft:'5%'}}/>
      <p style={{marginLeft:'5%',fontSize:'13px',marginLeft:'5%'}}>{item.title}</p>
      <p  style={{color:'red',fontSize:'12px',marginLeft:'5%'}}>₹ {(item.current-count.toFixed(2))}</p>
     <div style={{display:"flex",gap:"3%",marginLeft:'5%',marginTop:'-8%'}}>
      <p style={{color:'red',fontSize:'12px'}}>-{Math.abs(item.basePrice-item.current-count).toFixed(2)}</p>
      <p style={{color:'red',fontSize:'12px'}}>({((Math.abs((item.basePrice-item.current-count))/item.current)*100).toFixed(2)} %)</p>
      </div>
      </div>
     ))}
   </div>
   </div>
  )
}

export default Lossers