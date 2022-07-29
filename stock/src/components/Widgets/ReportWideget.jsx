import React, { useEffect } from 'react'
import Styles from './reply.module.css'
import getVoice from '../../utils/getVoice';

const ReportWideget = () => {
    const txt =
      "You can request your stocks P&L report in the Reports Section";
    
    useEffect(() => {
         getVoice(txt);
    },[])
   
  return (
    <div className={Styles.reply}>
          <p>{txt}</p>
    </div>
  );
}

export default ReportWideget