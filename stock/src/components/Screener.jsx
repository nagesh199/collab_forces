import React from 'react'
import styles from '../styles/screener.module.css'
const Screener = () => {
  
  return (
    <div className={styles.scontainer}>
     <div style={{display: 'grid',gridTemplateColumns:"50% 50%",justifyContent: 'space-around'}}>
      <h2  style={{marginLeft:'2%'}}>Index</h2>
      <p style={{marginLeft:'72%',backgroundColor:'#0456B9',color:'white',paddingTop:'2px',paddingLeft:"5px",width:"70px",height:'20px',borderRadius:"3px",cursor:'pointer',fontFamily:'Arial", sans-serif',fontSize:'15px'}}>Screener</p>
     </div>
    <div className={styles.sindex}>
    <div></div>
    <div></div>
    <div></div>
    </div>
    </div>
  )
}

export default Screener
