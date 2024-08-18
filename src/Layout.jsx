import React, { useEffect } from 'react'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from './Components/Footer'


const Layout = () => {
  const location = useLocation();
  return (
   <>
   {location.pathname !== '/login' && location.pathname !== '/registration' && <Navbar /> }
   {location.pathname !== '/login' && location.pathname !== '/registration' && <Sidebar /> }
   <Outlet />
   <Footer />
   </>
  )
}

export default Layout
