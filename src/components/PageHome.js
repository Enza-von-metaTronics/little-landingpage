import React from 'react';
import '../Home.css';



export const PageHome = () => {
  return (

    <div className='homeBox'>

      <video width="720px" height="auto" controls poster="../pics/vorschauPic.jpg">
       <source src="schoenheit.mp4" type="video/mp4" />
      </video>

      <div className='banner'>
        <h1>come to LinkedIn:</h1>
        <a href='https://www.linkedin.com/in/claudia-hinze-27656b180/' target="_blank" rel="noopener noreferrer">
          <img src='./pics/mmgbutt-2.jpg' alt='mmg-banner' />
        </a>
      </div>


    </div>

  )
}
