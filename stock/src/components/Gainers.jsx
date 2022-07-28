import React from 'react'
import styles from '../styles/gainer.module.css'
import { useEffect,useState } from 'react';
import io from "socket.io-client";
const Gainers = () => {
  const [count,setCount] = useState(5);
  const socket = io.connect("http://localhost:8080");
  const [data,setData] = useState([]);
  
  useEffect(()=>{
    getdata()
  },[])
  const getdata = ()=>{
    socket.on("stock",(payload)=>{
      setData(payload.gainerdata)
    });
    
  }
  useEffect(()=>{
    setInterval(()=>{
         setCount(count+Math.random()*10)
    },10000)
},[])
  return (
    <div className={styles.gainerContainer}>
    <div style={{display: 'grid',gridTemplateColumns:"50% 50%",justifyContent: 'space-around'}}>
     <h2  style={{marginLeft:'2%'}}>Top Gainers</h2>
     <p style={{marginLeft:'72%',color:'#0456B9',paddingBottom:'3px',paddingLeft:"4px",width:"70px",height:'20px',borderRadius:"5px",cursor:'pointer'}}>See More</p>
    </div>
   <div className={styles.gainers}>
   {data.map((item)=>(
      <div style={{fontFamily:'sans-serif'}} key={item._id}>
      <img src={item.imgUrl} alt="logo" style={{width:'50px',marginLeft:'5%',marginTop:'2%'}}/>
        
      <p style={{marginLeft:'8%',fontSize:'13px',marginLeft:'5%'}}>{item.title}</p>
      <p  style={{color:'green',fontSize:'12px',marginLeft:'5%'}}>₹ {(item.current+count).toFixed(2)}</p>
     <div style={{display:"flex",gap:"3%",marginLeft:'5%',marginTop:'-8%'}}>
      <p style={{color:'green',fontSize:'12px'}}>{Math.abs(item.basePrice-item.current+count).toFixed(2)}</p>
      <p style={{color:'green',fontSize:'12px',}}>({((Math.abs((item.basePrice-(item.current+count)))/item.current)*100).toFixed(2)} %)</p>
      </div>
      </div>
     ))}
   </div>
   </div>
  )
}

export default Gainers