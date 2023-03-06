import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import logo from '../images/tour-1.jpeg'
import logo2 from '../images/tour-2.jpeg'
import logo3 from '../images/tour-3.jpeg'

const SharedLayout = () => {
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

    <section class="section" id="featured">
     
      <div class="section-title">
        <h2> <span>services</span></h2>
      </div>
      
      <div class="section-center featured-center">
       
        <article class="tour-card">
          <div class="tour-img-container">
            <img src={logo} className="tour-img" alt="" />
            <p class="tour-date">august 26th, 2020</p>
          </div>
          
          <div class="tour-info">
            <div class="tour-title">
              <h4>tibet adventure</h4>
              <p>6 days</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              deleniti sapiente earum recusandae laborum ab eligendi repellat
              commodi dolore doloremque.
            </p>
            <div class="tour-footer">
              <p>
                <span>
                  <i class="fas fa-map"></i>
                  china
                </span>
              </p>
              <p>from $2100</p>
            </div>
          </div>
        </article>
       
        <article class="tour-card">
          <div class="tour-img-container">
            <img src={logo2} className="tour-img" alt="" />
            <p class="tour-date">october 1th, 2020</p>
          </div>
          
          <div class="tour-info">
            <h4>best of java</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              deleniti sapiente earum recusandae laborum ab eligendi repellat
              commodi dolore doloremque.
            </p>
            <div class="tour-footer">
              <p>
                <span>
                  <i class="fas fa-map"></i>
                  indonesia
                </span>
              </p>
              <p>11 days</p>
              <p>from $1400</p>
            </div>
          </div>
        </article>
       
        <article class="tour-card">
          <div class="tour-img-container">
            <img src={logo3} className="tour-img" alt="" />
            <p class="tour-date">september 15th, 2020</p>
          </div>
         
          <div class="tour-info">
            <h4>explore hong kong</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              deleniti sapiente earum recusandae laborum ab eligendi repellat
              commodi dolore doloremque.
            </p>
            <div class="tour-footer">
              <p>
                <span>
                  <i class="fas fa-map"></i>
                  hong kong
                </span>
              </p>
              <p>8 days</p>
              <p>from $5000</p>
            </div>
          </div>
        </article>
       
      </div>
      
    </section>

    <footer class="section footer">
     
      <ul class="footer-links">
       
        <li>
         
          <Link to='/' className="footer-link scroll-link">
                Home
              </Link>
        </li>
       
        <li>
        <Link to='about-us' className="footer-link scroll-link">
                about
              </Link>
         
        </li>
       
        <li>
        <Link to='services' className="footer-link scroll-link">
        services
              </Link>
        </li>
       
        <li>
        <Link to='contact-us' className="footer-link scroll-link">
        contact us
              </Link>
        </li>
        
      
     
      </ul>
    
      <ul class="footer-icons">
       
        <li>
          <a href="https://www.twitter.com" target="_blank" class="footer-icon">
            <i class="fab fa-facebook"></i>
          </a>
        </li>
      
        <li>
          <a href="https://www.twitter.com" target="_blank" class="footer-icon">
            <i class="fab fa-twitter"></i>
          </a>
        </li>
       
        <li>
          <a href="https://www.twitter.com" target="_blank" class="footer-icon">
            <i class="fab fa-squarespace"></i>
          </a>
        </li>
      
      </ul>
    
      <p class="copyright">
        copyright &copy;  <span id="date"></span>.
        all rights reserved
      </p>
    </footer>
   
    </>
   
  )
}

export default SharedLayout
