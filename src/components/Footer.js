import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
   <>
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

export default Footer
