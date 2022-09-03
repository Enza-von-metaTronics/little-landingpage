import React from 'react';
import '../Info.css';

export const Info = () => {
  return (
    <div className="infoBox">

    <div className='info'>
      <p>On the site below you can get some more information about my doings. It was the absolutely first site ever, that I was creating, and it is filled with crea(c)tivity.</p>
    </div>

  {/*   <p className='point'>&#8226;</p> */}
    

    <div className='siteBox'>
            
      <a className='link' href='https://metatronics-wunderland.netlify.app/start.html' target="_blank" rel="noopener noreferrer">      
        <img className='tut' src='./pics/tut.png' alt='tut' />
        <p className='klick'>&#10940; &#8226; klick here &#8226; &#10939;</p>    
      </a>
      
    </div>

    <div className='ph'></div>

    </div>
  )
}
