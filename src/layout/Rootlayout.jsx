import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'
import Navigationbar from '../components/Navigationbar'


const Rootlayout = () => {
  return (
    <div>
      <Navigationbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Rootlayout
