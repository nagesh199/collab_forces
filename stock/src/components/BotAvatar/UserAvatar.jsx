import React from "react";
import Styles from "./UserAvatar.module.css";

const UserAvatar = () => {
  return (
    <div className={Styles.avatar}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/2922/2922506.png"
        alt="user-avatar"
      />
    </div>
  );
};

export default UserAvatar;
