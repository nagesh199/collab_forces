import React from 'react'
import styles from '../styles/gainer.module.css'
const Gainers = () => {
  return (
    <div className={styles.gainerContainer}>
    <div style={{display: 'grid',gridTemplateColumns:"50% 50%",justifyContent: 'space-around'}}>
     <h2  style={{marginLeft:'2%'}}>Top Gainers</h2>
     <p style={{marginLeft:'72%',color:'#0456B9',paddingBottom:'3px',paddingLeft:"4px",width:"70px",height:'20px',borderRadius:"5px",cursor:'pointer'}}>See More</p>
    </div>
   <div className={styles.gainers}>
   <div></div>
   <div></div>
   <div></div>
   <div></div>
   </div>
   </div>
  )
}

export default Gainers