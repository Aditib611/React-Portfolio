import React from 'react'
import './Footer.css';
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin';
import Github from '@iconscout/react-unicons/icons/uil-github';
import Mail from '@iconscout/react-unicons/icons/uil-fast-mail';
import Wave from'../../img/wave.png';
const Footer = () => {
  return (
   <div className="footer">
    <img src={Wave} alt="" style={{width: '100%'}}/>
    <div className="f-content">
        <span>aditibhavsar611@gmail.com</span>
        <div className="f-icons">
          <a href="https://linkedin.com/in/aditibhavsar11" target='_blank'>
          <Linkedin color='white' size='3rem'/>
          </a>
          <a href="https://github.com/Aditib611" target='_blank'> 
           <Github color='white' size='3rem'/> 
          </a>
          <a href="mailto:aditibhavsar611@gmail.com" target='_blank'>
          <Mail color='white' size='3rem'/>
          </a>
         
            
        </div>

    </div>
   </div>
  )
}

export default Footer
