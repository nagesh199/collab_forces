import React, { useState } from "react";
import styles from "../styles/navigation.module.css";
import { Link, useNavigate } from "react-router-dom";
import { BiWalletAlt } from "react-icons/bi";
import { IoIosNotificationsOutline } from "react-icons/io";
import logo from "../assets/logo.png";
import Button from "./Button";
import { FcGoogle } from "react-icons/fc";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function Navigation() {
  const info = JSON.parse(localStorage.getItem("userinfo"));
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [show, setShow] = useState(false);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();
  const button = {
    bg: "#0456B9",
    text: "Login",
    width: "100px",
    br: "5px",
    color: "#ffffff",
    height: "32px",
    fontSize: "16px",
  };

  return (
    <div style={{ backgroundColor: "black", border: "1px solid black" }}>
      <div className={styles.navigation}>
        <div className={styles.logoDiv}>
          <img src={logo} alt="logo" />
          <Link className={styles.explore} to="">
            Explore
          </Link>
          <Link className={styles.explore} to="">
            Investment
          </Link>
        </div>
        <div>
          <input
            className={styles.search}
            type="search"
            placeholder="Search......"
          />
        </div>
        <div className={styles.account}>
          <IoIosNotificationsOutline
            style={{
              cursor: "pointer",
              fontSize: "30px",
              fontWeight: "bold",
            }}
          />
          <BiWalletAlt
            style={{
              cursor: "pointer",
              fontSize: "30px",
            }}
          />
          {info ? (
            <img
              src={info.picture}
              alt="userImage"
              style={{
                height: "45px",
                width: "45px",
                borderRadius: "50%",
              }}
            />
          ) : (
            <Button
              onClick={() => {
                setShow(true);
              }}
              styles={button}
            />
          )}
        </div>
        {show && (
          <div className={styles.login}>
            <div className={styles.imageDiv}>
              <img
                className={styles.backImage}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBzt7gi8HgFQA7pXidMiRyPfQTyt9ZD5NMVA&usqp=CAU"
                style={{
                  borderTopLeftRadius: "10px",
                  borderBottomLeftRadius: "10px",
                }}
                alt="image"
                width="100%"
                height="100%"
              />
              <h1
                style={{
                  marginTop: "-60%",
                  textAlign: "left",
                  marginLeft: "5%",
                  color: "white",
                  fontSize: "40px",
                }}
              >
                Simple, Free
              </h1>
              <h1
                style={{
                  textAlign: "left",
                  marginLeft: "5%",
                  color: "white",
                  fontSize: "40px",
                }}
              >
                Investing
              </h1>
              <h1
                style={{
                  textAlign: "left",
                  marginLeft: "5%",
                  color: "white",
                  fontSize: "40px",
                  fontWeight: "normal",
                }}
              >
                Stocks
              </h1>
            </div>
            <div className={styles.emailDiv}>
              <p
                onClick={() => {
                  setShow(false);
                }}
                style={{
                  textAlign: "right",
                  marginRight: "5%",
                  fontSize: "22px",
                  marginTop: "4%",
                  cursor: "pointer",
                }}
              >
                X
              </p>

              <h1
                style={{
                  textAlign: "center",
                  marginLeft: "3%",
                  color: "#364842",
                  fontSize: "33px",
                  fontWeight: "700",
                }}
              >
                Welcome To Real Trade
              </h1>
              <div>
                <button
                  onClick={() => {
                    navigate("/auth");
                    setShow(false);
                  }}
                  className={styles.btn1}
                >
                  <FcGoogle style={{ width: "50px", marginTop: "10px" }} />
                  <p style={{ marginTop: "10px" }}> Continue With Google</p>
                </button>

                <div style={{ marginTop: "10%", marginLeft: "45%" , fontSize:"20px"}}>
                  <p>--- or ---</p>
                </div>
                <div>
                  <Box
                    sx={{
                      width: 350,
                      maxWidth: "100%",
                      margin: "auto",
                      marginTop: "5%",
                    }}
                  >
                    <TextField fullWidth label="Your Email Address"  />
                  </Box>
                  <button className={styles.btn2}>Continue</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
