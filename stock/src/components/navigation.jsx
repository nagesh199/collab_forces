import React, { useEffect } from 'react'
import styles from '../styles/navigation.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { BiWalletAlt  } from "react-icons/bi";
import { IoIosNotificationsOutline } from "react-icons/io"
import logo from "../assets/logo.png"
import Button from './Button';
import { FcGoogle } from "react-icons/fc";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from 'react';



export default function navigation(){
  const info=JSON.parse(localStorage.getItem('userinfo'));
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [show,setShow] = useState(false);
    
  // eslint-disable-next-line react-hooks/rules-of-hooks
 const navigate=useNavigate()
  const button = {
    bg: "#0456B9",
    text: "Login",
    width: "100px",
    br: "5px",
    color: "#ffffff",
    height: "40px",
    fontSize: "18px",
    marginTop: "5%",
  
  };
 
 
 
  return (
    <>
     
    <div className={styles.navigation}>
    <div className={styles.logoDiv}>
    <img src={logo} alt="logo" />
    <Link className={styles.explore} to="">Explore</Link>
    <Link className={styles.explore} to="" >Investment</Link>
    </div>
 <div> 
  <input className={styles.search} type="search" placeholder="Search......" style={{fontSize:'20px'}}/>
 
 </div>
 <div className={styles.account}>
 <IoIosNotificationsOutline style={{marginTop:'3%',height:'50px',width:'30px',cursor:'pointer'}}/>
 <BiWalletAlt style={{marginTop:'3%',height:'50px',width:'30px',cursor:'pointer'}} />
{info ? <img src={info.picture} alt="userImage" style={{height:'45px',width:'45px',borderRadius:'50%',marginTop:"4%"}} />:  <Button onClick={()=>{setShow(true)}}  styles={button}/>} 
 </div>
 {show &&   <div className={styles.login}>
        
        <div className={styles.imageDiv}>
          <img className={styles.backImage}
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
              marginTop: "-90%",
              textAlign: "left",
              marginLeft: "5%",
              color: "white",
              fontSize: "40px",
            }}
          >
            Simple,Free
          </h1>
          <h1
            style={{
              marginTop: "-5%",
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
              marginTop: "50%",
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
        <p onClick={()=>{setShow(false)}} style={{textAlign: "right",marginRight:'5%',fontSize: "22px",marginTop: "4%",cursor:'pointer'}}>X</p>

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
           <button onClick={()=>{
              navigate("/auth")
              setShow(false)
          }} className={styles.btn1}>
             
              <FcGoogle style={{ width: "50px", marginTop: "10px" }} />
              <p style={{ marginTop: "10px" }}> Continue With Google</p>
            </button>

            <div style={{ marginTop: "15%",marginLeft:'40%' }}>
              <p>---or---</p>
            </div>
            <div>
              <Box
                sx={{
                  width: 350,
                  maxWidth: "100%",
                  marginLeft:'10%',
                  marginTop:'12%',
                }}
              >
                <TextField fullWidth label="Your Email Address"  />
              </Box>
              <button className={styles.btn2}>Continue</button>
            </div>
          </div>
        </div>
      </div>}
    </div>
    </>
  )
}