import React from 'react';
import './left.css';
const LeftBox = () => {
  return( 
  <div className='left-container'>
   <h1>Log in</h1>
   <p>Let Your post passionate fans support your via monthly membership.</p>
   
   <input type="text" placeholder='EMAIL'/><br></br>
   <input type="password" placeholder='PASSWORD'/><br></br>
   <button>Log in</button>
  </div>);
};

export default LeftBox;
