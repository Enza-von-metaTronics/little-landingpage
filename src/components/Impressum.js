import React from 'react';
import '../Impressum.css';



const Impressum = () => {
  return (
    <div className='impressumBox'>

        <div className='datensch'>

                
          <h4>Datenschutzerklärung &#4556; Data protection</h4>
        <h5> Laut TMG und DSGVO sind die personenbezogenen Daten besonders schützenswert.</h5>
        <p>Aus diesem Grunde weise ich an dieser Stelle explizit darauf hin, daß die hier verlinkten Materialien überwiegend aus meinem Fundus stammen und dem Urheberrecht des metaTronics-Eigenverlag®© unterliegen.</p>
        <p>Die Hyperlinks zu anderen Webseiten dienen der Quellenangabe und verfolgen kein Profitinteresse.</p>
        <p className='breakPoint'>&#4580;</p>
        <h5> According to TMG and DSGVO, personal data is particularly worthy of protection.</h5>
        <p>For this reason, I would like to explicitly point out that the materials linked here come mostly from my pool and are subject to the copyright of metaTronics-Eigenverlag®©.</p> <p>The hyperlinks to other websites serve to indicate the source and are not for profit.</p>
        <p className='ei'>An dieser Stelle eidesstattlich versichert und unterzeichnet,</p>
       
        <img src="./pics/paraphe_light.png" alt='paraphe' className='paraphe'/>
        <p>Claudia Hinze</p>
        </div>

        <div className='contact'>
          <p>Are you interested in contacting the webmaster?</p>
          <i class="fa fa-hourglass-3" aria-hidden="true">Send me a mail to: claudi.enza[ät]outlook.de</i>
        </div>

        <div className='outroPic'>
          <img src='./pics/pics_webdevel_02_500px.jpg' alt='webdevel snip'/>
        </div>
              </div>
  )
}

export default Impressum;
