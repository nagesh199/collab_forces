import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/router.module.css'
const Routercomponent = () => {
  return (
    <>
    <div className={styles.router}>
    <Link className={styles.names} to="">Stock</Link>
    <Link className={styles.names} to="">Mutual Funds</Link>
    <Link className={styles.names} to="">Fixed Deposits</Link>
    <Link className={styles.names} to="">US Stocks</Link>
    </div>
    <div className={styles.nameLine}></div>
    </>
  )
}

export default Routercomponent