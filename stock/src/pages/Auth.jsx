import React, { useEffect, useState } from 'react'
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
const Auth = () => {
    const navigate =useNavigate()
    const [data, setdata] = useState({})
    function handlecallback(response) {
      console.log(response.credential);
      var userObject = jwt_decode(response.credential)
      setdata(userObject)
    }
    useEffect(() => {
      /* global google */
      google.accounts.id.initialize({
        client_id: "190111250433-r2mihlre2ljsmc6pjgm3qb4v7s7tp605.apps.googleusercontent.com",
        callback: handlecallback
      })
      google.accounts.id.renderButton(
        document.getElementById('signIn'),
        { theme: "outline", size: "large" }
      )
    }, [])
    
   if(data){
    localStorage.setItem('userinfo',JSON.stringify(data))
   navigate('/home')
   }
    return (
      <div className="App">
        {/* <Landing/> */}
        <div id="signIn">
         
        </div>
      </div>
    );
}

export default Auth