import React, { useEffect } from 'react'
import Styles from './reply.module.css'
import getVoice from '../../utils/getVoice';




const TpinWidget = () => {
       const txt =
           "Effective from 18 Feb 2021, you have to enter TPIN and OTP received on your registered mobile number to verify your holdings before selling.\n The verification will be valid for 1 day. \n To generate a new TPIN, \n 1. Go to Profile section. \n 2. Visit Account Details.";
    const txtArray = txt.split("\n");
     useEffect(() => {
       getVoice(txt);
     }, []);
    return (
      <div className={Styles.reply}>
            {txtArray.map((elem,index) => (
                <p key={index}>{elem}</p>
        ))}
      </div>
    );
}

export default TpinWidget