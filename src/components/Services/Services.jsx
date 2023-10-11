import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';
import Resume from './Resume.pdf';
import { themeContext } from '../../Context';
import { useContext } from 'react';
import {motion} from 'framer-motion';

const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const transition = {duration: 1, type:'spring'};


  return (
 <div className="services" id="Services">
    {/* left side */}
    <div className="awesome">
    <span style={{color: darkMode? 'white': ''}}>My Awesome</span>
    <span>Services</span>
    <span style={{ fontSize: '17.5px' }}>I have a solid grasp of computer science principles, especially JAVA and data structures and algorithms (DSA) .
        <br/> I'm proficient in C++, Java, and Python.
        <br/>I'm always eager to take on new challenges and opportunities for learning and development.
        </span>
        <a href={Resume} download>
        <button className="button s-button">Download CV</button>
        </a>
   
   <div className="blur s-blur1" style={{background:"#ABF1FF94"}}></div>
</div>
     {/* right side */}
     <div className="cards">
        <motion.div
         whileInView={{left:'12rem'}}
         initial={{left: "23%"}}
        transition={transition}
        
        style={{left: '14rem'}}>
          <Card
            emoji ={HeartEmoji}
            heading = {'Coding'}
            detail ={"C, CPP, Java, Python, PHP"}
            />
        </motion.div>

        {/*second card*/ }
        <motion.div 
           initial={{ left: "-11rem", top: "12rem" }}
           whileInView={{ left: "-4rem" }}
           transition={transition}
        style={{top:"12rem", left: "-4rem"}}>
        <Card
            emoji ={Glasses}
            heading = {'Developer'}
            detail ={"HTML, CSS, JavaScript, ReactJS, NodeJS, .Net"}
            />
        </motion.div>

        {/*third card*/ }
        <motion.div 
       initial={{ top: "19rem", left: "25rem" }}
       whileInView={{ left: "12rem" }}
       transition={transition}
        style={{ top:"19rem", left: "12rem"}}>
        <Card
            emoji ={Humble}
            heading = {'Databases'}
            detail ={"MongoDB, MySQL, MSSQL"}
            />
        </motion.div>
        <div className="blur s-blur2" style={{background:"var(--purple)"}}></div>

     </div>

 </div>
  )
}

export default Services
