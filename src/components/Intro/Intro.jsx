import React from 'react'
import './Intro.css'
import Github from '../../img/github.png';
import Linkedin from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import girl2 from '../../img/girl2.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { themeContext } from '../../Context';
import { useContext } from 'react';
import {motion} from 'framer-motion';

const Intro = () => {

  const transition = {duration: 2, type:'spring'};

  const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span style={{color: darkMode? 'white': ''}}>Hi! I Am</span>
                <span>Aditi Bhavsar</span>
                <span>
                    I blend the realms of full-stack development and web design to conjure captivating digital solutions. 
                    My expertise lies in creating not just functional but visually stunning online experiences.
                </span>
            </div>
           <button className="button i-button">Hire Me</button>
           <div className="i-icons">
            <a href="https://github.com/Aditib611">
            <img src={Github} alt="" />
            </a>
            <a href="https://linkedin.com/in/aditibhavsar11">
            <img src={Linkedin} alt="" />
            </a>
            <a href="">
            <img src={Instagram} alt="" />
            </a>
            
           </div>
        </div>
        <div className="i-right">
           <img src={Vector1} alt="" />{/*blue*/}
           <img src={Vector2} alt="" />{/*yellow*/}
           <img src={girl2} alt="" />
           <motion.img
           initial={{left: '-36%'}}
           whileInView={{left: '-24%'}}
          transition={transition} 
          src={glassesimoji} alt="" /> {/*smileyemoji*/}

           <motion.div
           initial={{top:'-4%', left: "74%"}}
           whileInView={{left:'68%'}}
           transition={transition}
           
            className ='floating-div'
              style={{top: '-4%', left:'68%'}}>
            <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
           </motion.div>

            <motion.div 
             initial={{top:'18rem', left: "9rem"}}
             whileInView={{left:'0rem'}}
             transition={transition}
            
            style={{top: '19rem', left:'5.9rem'}}
            className ='floating-div'>
            <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award'/>
            </motion.div>
          {/*blur divs*/}
          <div className='blur' style={{background: "rgb(238 210 255)"}}></div>
          <div className='blur' style={{background: '#C1F5FF', top:'17rem', width:'21rem', height:'11rem', left:'-9rem'}}></div>
        </div>
    </div>
  )
}
export default Intro;
