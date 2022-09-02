import React from 'react';
import '../Reports.css';

export const PageReports = () => {
  return (
    <div className='pageReports'>

      <a href='https://github.com/Enza-von-metaTronics' target="_blank" rel="noopener noreferrer"><h1 className='github'>Enza von metaTronics on GitHub</h1></a> 

      <div className='ph'></div>

      <h1 className='myWorks'>works..</h1>
    <div className='iframeBox'>
      
      <iframe width="560" height="315" src="https://www.youtube.com/embed/tMxrFDRJr5A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

      <iframe width="560" height="315" src="https://www.youtube.com/embed/4vLJBiMnoN4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

      <iframe width="560" height="315" src="https://www.youtube.com/embed/WE474pTQLoo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

      <iframe width="560" height="315" src="https://www.youtube.com/embed/qX6muSoTTgw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>


    <h1 className='myWorks'>my KIN</h1>

    <div className='sourceBox'>
      <img src='./pics/Blatt255.png' alt='infoblatt tzolkin' />
    
      <a className='source' href="http://www.maya.at/CD-ROM/Kin-Info/Kin-Info-Index.htm" target="_blank" rel="noopener noreferrer">source</a>
    </div>



    <div className='ph'></div>

    <a href='/reports' className='butt'>
      <img src="./pics/homebutt-ros.png" alt='homebutton' />
    </a>

    </div>
  )
}
