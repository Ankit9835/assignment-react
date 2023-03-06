import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import logo from '../images/tour-1.jpeg'
import logo2 from '../images/tour-2.jpeg'
import logo3 from '../images/tour-3.jpeg'
import Card from './Card'
import Footer from './Footer'
import Header from './Header'

const SharedLayout = () => {
  return (
    <>
    <Header />
    <Card />
    <Footer />
    </>
   
  )
}

export default SharedLayout
