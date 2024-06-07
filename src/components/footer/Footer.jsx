import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    
    <footer>
    <hr />
      {/* <div className="blur blur-f-1"></div> */}
      {/* <div className="blur blur-f-2"></div> */}
      <section>
        <ul class="socials">
          <li><a class="fa-brands fa-x-twitter"></a></li>
          <li><a class="fa-brands fa-facebook"></a></li>
          <li><a class="fa-brands fa-linkedin"></a></li>
        </ul>
        <ul class="links">
          <li><a>Home</a></li>
          <li><a>Programs</a></li>
          <li><a>Why Us</a></li>
          <li><a>Plans</a></li>
          <li><a>Testimonials</a></li>
        </ul>
        <p className="legal">© 2024 All rights reserved</p>
      </section>
    </footer>
  )
}

export default Footer
