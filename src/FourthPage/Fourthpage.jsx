import React from 'react';
import './FourthPageStyle.css';
import {motion} from "framer-motion";

export default function Fourthpage() {
  return (
    <div className='FourthPage' id="contact">
        <h2>Contact Me</h2>

        <div className="f-hero">
          <div className="f-left"></div>
          <motion.div 
          initial={{opacity:0,y:'120px',}}
          whileInView={{opacity:1,y:'60px',}}
          transition={{delay:1,duration:1.5}}
          className="f-right">
            <h3 className='f-head'>Contact Info</h3>
            <div>
            <h3>Phone</h3>
            <h4>+91 6379192652</h4>
            </div>
            <div>
            <h3>E-mail</h3>
            <h4>Example@gmail.com</h4>
            </div>
            <div>
            <h3>Date of Birth</h3>
            <h4>30-08-2005</h4>
            </div>
            <div>
            <h3>Location</h3>
            <h4>Thottiyam ,Trichy </h4>
            </div>
          
          </motion.div>
        </div>
    </div>
  )
}
