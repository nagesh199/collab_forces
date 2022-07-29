import React, { useEffect } from "react";
import Styles from "./reply.module.css";
import getVoice from "../../utils/getVoice";

const CardWidget = () => {
  const txt =
    "SEBI rules say the investments should be made through verified bank accounts only. It is not possible to verify bank accounts when investments are made using a credit/debit card.\n You can use the following options: \n 1. UPI apps (Google Pay, Phonepe, BHIM etc) \n 2. Net Banking \n 3. NEFT / RTGS / IMPS";
  const txtArray = txt.split("\n");
  useEffect(() => {
    getVoice(txt);
  }, []);
  return (
    <div className={Styles.reply}>
      {txtArray.map((elem, index) => (
        <p key={index}>{elem}</p>
      ))}
    </div>
  );
};

export default CardWidget;
