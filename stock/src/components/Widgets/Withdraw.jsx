import React, { useEffect } from "react";
import Styles from "./reply.module.css";
import getVoice from "../../utils/getVoice";

const Withdraw = () => {
  const txt =
    "1. Visit Profile Section.\n 2. Click on 'Balance'. \n 3. Tap on 'Withdraw'.\n 4. Enter the amount you want to withdraw. \n 5. To complete your request, click on 'Withdraw'. \n If you have registered more than one account, you can choose the bank on the withdrawal screen. \n It takes upto 1 working day for money to reflect in your bank account.";
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

export default Withdraw;
