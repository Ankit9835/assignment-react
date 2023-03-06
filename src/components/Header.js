import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import logo from '../images/tour-1.jpeg'
import logo2 from '../images/tour-2.jpeg'
import logo3 from '../images/tour-3.jpeg'
const Header = () => {
  return (
    <>
         <header id="home">
     
     <nav class="navbar">
       <div class="nav-center">
        
         <div class="nav-header">
           <img src="./images/logo.svg" class="nav-logo" alt="" />
           <button type="button" class="nav-toggle" id="nav-toggle">
             <i class="fas fa-bars"></i>
           </button>
         </div>
        
         <ul class="nav-links" id="nav-links">
          
           <li>
            <Link to='/' class="nav-link scroll-link">
               Home
             </Link>
           </li>
          
           <li>
           <Link to='about-us' class="nav-link scroll-link">
               about
           </Link>
           </li>
          
           <li>
           <Link to='services' class="nav-link scroll-link">
               services
           </Link>
           </li>
          
           <li>
           <Link to='contact-us' class="nav-link scroll-link">
               contact us
           </Link>
           </li>
         </ul>
       
         <ul class="nav-icons">
          
           <li>
             <a
               href="https://www.twitter.com"
               target="_blank"
               class="nav-icon"
             >
               <i class="fab fa-facebook"></i>
             </a>
           </li>
          
           <li>
             <a
               href="https://www.twitter.com"
               target="_blank"
               class="nav-icon"
             >
               <i class="fab fa-twitter"></i>
             </a>
           </li>
         
           <li>
             <a
               href="https://www.twitter.com"
               target="_blank"
               class="nav-icon"
             >
               <i class="fab fa-squarespace"></i>
             </a>
           </li>
          
         </ul>
        
       </div>
     </nav>
   
     <div class="hero">
       <div class="hero-banner">
         <Outlet />
       </div>
     </div>
   </header>
    </>
  )
}

export default Header
