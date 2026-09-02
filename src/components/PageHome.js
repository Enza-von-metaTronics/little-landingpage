import React from 'react';
import '../Home.css';



export const PageHome = () => {
  return (

    <div className='homeBox'>
    
<img
  src="/pics/baumtanz_banner_1152.jpg"
  alt="Gespiegelter Wald mit poliTRON-Symbol"
  style={{ width: "80%", height: "auto", marginBottom: "60px" }}
/>
  
      <video width="720px" height="auto" controls poster="../pics/vorschauPic.jpg">
       <source src="schoenheit.mp4" type="video/mp4" />
      </video>
  
<p style={{ marginTop: "70px" }}>Diese Website wird gerade lokal in Visual Studio Code weiterentwickelt.</p>
  
      <div className='banner'>
        <h1>come to LinkedIn:</h1>
        <a href='https://www.linkedin.com/in/claudia-hinze-27656b180/' target="_blank" rel="noopener noreferrer">
          <img src='./pics/mmgbutt-2.jpg' alt='mmg-banner' />
        </a>
      </div>


    </div>

  )
}
