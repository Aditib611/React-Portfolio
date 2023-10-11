import React from 'react'
import "./Works.css";

import js from "../../img/js.png"
import expressjs from "../../img/expressjs.png";
import nodejs from "../../img/nodejs.png";
import react from "../../img/react.png";
import mongodb from "../../img/mongodb.png";
import { themeContext } from '../../Context';
import { useContext } from 'react';
import { motion } from "framer-motion";



const Works = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="works" id="Work">
   {/* left side */}
        <div className="awesome">
            <span style={{color: darkMode? 'white': ''}}>Worked on the </span>
            <span>MERN Stack</span>
            <span style={{ fontSize: '17px' }}>Proficient in MongoDB, Express, React, and Node.js, comprising the MERN stack.
            <br/>Utilized MERN stack to create responsive and mobile-friendly web applications.
            <br/>Confident in building high-quality, scalable web apps with the MERN stack.
            </span>
            <button className="button s-button">Hire me</button>
            <div className="blur s-blur1" style={{background:"#ABF1FF94"}}></div>
        </div>
    {/**right side */}
        <div className="w-right">
            <motion.div 
            initial={{ rotate: 45 }}
            whileInView={{ rotate: 0 }}
            viewport={{ margin: "-40px" }}
            transition={{ duration: 3.5, type: "spring" }}
            className="w-mainCircle">
                <div className="w-secCircle">
                    <img src={mongodb} alt=""/>
                </div>
                <div className="w-secCircle">
                    <img src={react} alt=""/>
                </div>
                <div className="w-secCircle">
                    <img src={js} alt=""/>
                </div>
                <div className="w-secCircle">
                    <img src={expressjs} alt=""/>
                </div>
                <div className="w-secCircle">
                    <img src={nodejs} alt=""/>
                </div>
            </motion.div>
            <div className="w-backCircle blueCircle"></div>
            <div className="w-backCircle yellowCircle"></div>
        </div>
    </div>
  )
}

export default Works;
