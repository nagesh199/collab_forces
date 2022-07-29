
import styles from '../styles/navigation.module.css'
import { Link } from 'react-router-dom'
import { BiWalletAlt  } from "react-icons/bi";
import { IoIosNotificationsOutline } from "react-icons/io"
import { TbUserCircle } from "react-icons/tb";
import logo from "../assets/logo.png"


export default function navigation(){
 
  return (
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
 <TbUserCircle style={{marginTop:'3%',height:'50px',width:'30px',cursor:'pointer',fontWeight:'100'}} />
 </div>
    </div>
  )
}