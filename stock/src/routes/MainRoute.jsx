import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import Auth from '../pages/Auth'
import Home from '../pages/Home'
import { Landing } from '../pages/Landing'
import {Chart} from '../components/Chart'


const MainRoute = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/chart" element={<Chart />} />
      </Routes>
      <Footer />
    </>
  );
}

export default MainRoute