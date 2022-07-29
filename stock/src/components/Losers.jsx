import React from 'react'
import styles from '../styles/losers.module.css'
const Lossers = () => {
  return (
    <div className={styles.losserContainer}>
    <div style={{display: 'grid',gridTemplateColumns:"50% 50%",justifyContent: 'space-around'}}>
     <h2  style={{marginLeft:'2%'}}>Top Lossers</h2>
     <p style={{marginLeft:'72%',color:'#0456B9',paddingBottom:'3px',paddingLeft:"4px",width:"70px",height:'20px',borderRadius:"5px",cursor:'pointer'}}>See More</p>
    </div>
   <div className={styles.lossers}>
   <div></div>
   <div></div>
   <div></div>
   <div></div>
   </div>
   </div>
  )
}

export default Lossers