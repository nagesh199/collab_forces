import React, { useState } from 'react';
import styles from '../styles/navigation.module.css'
import { Link } from 'react-router-dom'
import { MDBInputGroup, MDBInput, MDBIcon, MDBAlert, MDBBtn } from 'mdb-react-ui-kit';
export default function navigation(){
  const [showSearchAlert, setShowSearchAlert] =useState<boolean>(false);
  return (
    <div className={styles.navigation}>
    <div className={styles.logoDiv}>
    <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.slaterbaptistchurch.org%2Fwp-content%2Fuploads%2FThrive.jpg&f=1&nofb=1" alt="logo" />
    <Link to="">Home</Link>
    <Link to="" >Investment</Link>
    </div>
    <div>
    <MDBInputGroup>
        <MDBInput label='Search' />
        <MDBBtn onClick={() => setShowSearchAlert(true)} rippleColor='dark'>
          <MDBIcon icon='search' />
        </MDBBtn>
      </MDBInputGroup>

      <MDBAlert delay={1000} position='top-right' autohide appendToBody show={showSearchAlert}>
        Search!
      </MDBAlert>
    </div>
    </div>
  )
}