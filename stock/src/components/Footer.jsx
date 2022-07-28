import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
  return (
    <div style={{height: '265px',marginTop:'5%',backgroundColor:'#0456B9'}}>
    <div style={{display:'grid',gridTemplateColumns:"70% 30%",width:'85%',margin:'auto',paddingTop:'5%'}}>
        <div >
            <p className="footerOption">FAQ's</p>
            <p className="footerOption">Contact Us</p>
            <p className="footerOption">Terms and Condition</p>
            <p className="footerOption">Privacy Policy</p>
        </div>
        <div>
            <p className="footerOption" >Follow Us On</p>
            <div style={{display:'flex',gap:'5px'}}>
           <FontAwesomeIcon icon={faFacebook} style={{height:"40px",borderRadius:'5px', cursor:"pointer"}} /> 
             <FontAwesomeIcon icon={faInstagram} style={{height:"40px",borderRadius:'5px', cursor:"pointer"}} />
           <FontAwesomeIcon icon={faTwitter} style={{height:"40px",borderRadius:'5px', cursor:"pointer"}} />

            </div>
        </div>
    </div>
  
    <div style={{marginLeft:"7%"}}>
   <p>Copyright©2020. All Rights Reserved</p>
    </div>
    </div>
  )
}

export default Footer