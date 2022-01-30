import React from 'react';
import './navbar.css'
const Navbar = () => {
  return (
  <div className='navbar-container'>
   <h1>Logo</h1>

<ul>
    <li><a href="">Discover</a></li>
    <li><a href="">Resource</a></li>
    <li><a href="">Pricing</a></li>
</ul>
 
  <button>
   Get Started
  </button>
  </div>
  );
};

export default Navbar;
