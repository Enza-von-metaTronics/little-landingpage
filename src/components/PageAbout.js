import React from 'react';
import '../Home.css';
import '../About.css';

export const PageAbout = () => {
  return (
    <div className='aboutApp'>

    <div className='aboutBox'>
      <div className='about'>
        <h1>Hi there, I´m Enza.</h1>
        <p>It is said, that I took advantage of the opportunities given to me, looked for challenges myself and liked to face difficult situations.</p>
        <p>I am goal-oriented, concentrate on the given problems through logic and precise choice of words and often also know how to find and distribute appropriate tasks for the solutions.</p>
        <p>Want to make progress and do not let myself be occupied with trivial tasks, but choose my opportunities carefully. My success in dealing with difficult situations is based on prioritization, direction and personal achievement.</p>
        <p>Am aware that some people are touched by my criticism of the current situation, but they also know that I have visions and make suggestions for improvement.</p>
      </div>
    </div>

    <div className='pageAbout'>
      <img src="./pics/hinzeCV.jpg" className="cv" alt="enzas cv" />
      <img src="./pics/enza_blue150.jpg" className="enzaPic" alt="profil" />
      
      <h1 className='myWorks'>my KIN</h1>

<div className='sourceBox'>
  <img src='./pics/Blatt255.png' alt='infoblatt tzolkin' />

  <a className='source' href="http://www.maya.at/CD-ROM/Kin-Info/Kin-Info-Index.htm" target="_blank" rel="noopener noreferrer">source</a>
</div>
    </div>
    
      <div className='footer'>
        <a href='/about'>
          <button className='toTop'>to top</button>
        </a>
      </div>

    </div>
  )
}
