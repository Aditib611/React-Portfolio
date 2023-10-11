import React from 'react';
import './Portfolio.css';
import{Swiper, SwiperSlide} from 'swiper/react';
import Wonders from "../../img/7wonders.png";
import  wsn from "../../img/wsn_new.png";
import  travel from "../../img/travel.png";
import todolist  from "../../img/TodoList.png";
import Keeper  from "../../img/NoteKeeper.png";
import { themeContext } from '../../Context';
import Parcel from "../../img/parcel.png";
import { useContext } from 'react';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';


const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="Portfolio">
      {/**heading */}
      <span style={{color: darkMode? 'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>
   

       {/**slider*/}
       <Swiper
       spaceBetween={30}
       slidesPerView={3}
       grabCursor={true}
       className='portfolio-slider'>

        <SwiperSlide>
        <a href="https://aditib611.github.io/7Wonders/" target='_blank'>
            <img src={Wonders} alt=""/>
          </a>
        </SwiperSlide>

        <SwiperSlide>
        <a href="https://github.com/Aditib611/GraphVisualizer" target='_blank'>
           <img src={wsn} alt=""/>
            </a>
        </SwiperSlide>

        <SwiperSlide>
        <a href="https://notekeeper-app-dusky.vercel.app/" target='_blank'>
        <img src={Keeper} alt=""/>
        </a>
        </SwiperSlide>

        <SwiperSlide>
        <a href="https://aditib611.github.io/Restaurant-Website/" target='_blank'>
        <img src={Parcel} alt=""/>
        </a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://todolist-app-lac.vercel.app/" target='_blank'>
        <img src={todolist} alt=""/>
        </a>
        </SwiperSlide>
         <SwiperSlide>
        <a href="https://github.com/Aditib611/travelManagement" target='_blank'>
        <img src={travel} alt=""/>
        </a>
        </SwiperSlide>
       </Swiper>

       </div>
  )
}

export default Portfolio
