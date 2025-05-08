import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../components/Footer.Jsx'
import Navigationbar from '../components/Navigationbar'


const RootLayout = () => {
  return (
    <div>
      <Navigationbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default RootLayout
