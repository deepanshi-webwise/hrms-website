
import { Outlet } from 'react-router-dom'
import Navbar from '../../SharedComponents/Navbar'
import Footer from '../../SharedComponents/Footer'

const Layout = () => {
  return (
    <>
   <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  
  )
}

export default Layout