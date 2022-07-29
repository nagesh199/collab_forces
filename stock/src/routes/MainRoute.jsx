import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Navigation from '../components/navigation'
import Auth from '../pages/Auth'
import Home from '../pages/Home'
import { Landing } from '../pages/Landing'


const MainRoute = () => {
  return (
    <>
    <Navigation/>
    <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/auth" element={<Auth/>}/>
    </Routes>
    
    </>
  )
}

export default MainRoute