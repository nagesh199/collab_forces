import React from "react";
import Styles from "./BotAvatar.module.css";

const BotAvatar = () => {
  return (
    <div className={Styles.avatar}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/4712/4712038.png"
        alt="chat-bot"
      />
    </div>
  );
};

export default BotAvatar;
