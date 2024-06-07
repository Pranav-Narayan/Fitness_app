import React from 'react'
import './Hero.css'
import Header from './Header/Header';

// images 

import Hero_image from '/src/assets/hero_image.png'
import Hero_image_back from '/src/assets/hero_image_back.png'
import Heart from '/src/assets/heart.png'
import Calories from '/src/assets/calories.png'

import {motion} from 'framer-motion'

const Hero = () => {
    const transition={type:'spring',duration:3}
  return (
    <div className="hero">
        <div className="blur blur-h"></div>
        <div className="left-h">
            {/* header  */}
            <Header/>
            {/* the best ad  */}
            <div className="the-best-ad">
                <motion.div
                    initial={{left:'208px'}}
                    whileInView={{left:'9px'}}
                    transition={{...transition,type:'tween'}}
                ></motion.div>
                <span>the best fitness club in town</span>
            </div>

            {/* hero text  */}
            <div className="hero-text">
                <div>
                    <span className='stroke-text'>shape</span>
                    <span> your</span>
                </div>
                <div>
                    <span>ideal body</span>
                </div>
                <div>
                    <span>in there we will help you to share and build your ideal body and live up your life to fullest</span>
                </div>
            </div>

            {/* figures  */}
            <div className="figures">
                <div>
                    <span>+140</span>
                    <span>expert coaches</span>
                </div>
                <div>
                    <span>+978</span>
                    <span>members joined</span>
                </div>
                <div>
                    <span>+50</span>
                    <span>fitness programs</span>
                </div>
            </div>

            {/* hero buttons  */}
            <div className="hero-buttons">
                <button className="btn">Get Started</button>
                <button className="btn">Learn More</button>
            </div>
        </div>
        


        <div className="right-h">
            <button className='btn'>Join Now</button>
            <motion.div 
                initial={{right:'-1rem'}}
                whileInView={{right:"4rem"}}
                transition={transition}
                className="heart-rate">
                    <img src={Heart} alt="" />
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
            </motion.div>

            {/* hero images  */}
            <img src={Hero_image} alt="" className='hero-image'/>
            <motion.img 
            initial={{right:'11rem'}}
            whileInView={{right:"20rem"}}
            transition={transition}
            src={Hero_image_back} alt="" className='hero-image-back'/>
        
            {/* calories  */}
            <motion.div
            initial={{right:'37rem'}}
            whileInView={{right:"28rem"}}
            transition={transition}
            className="calories">
                <img src={Calories} alt="" />
                <div>
                    <span>Calories Burned</span>
                    <span>220 kcal</span>
                </div>
            </motion.div>
        </div>
    </div>
  );
}

export default Hero
