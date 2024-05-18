import React from "react";
import "./ThirdPageStyle.css";
import{motion} from 'framer-motion'

export default function ThirdPage() {
  return (
    <div className="ThirdPage" id="skills">
      <h2 className="logo">My Skills</h2>

      <div className="t-hero">
        <div className="t-left">
          <div className="t-skill">
            <div className="skill-name">
              <motion.div
              initial={{opacity:0}} 
              whileInView={{opacity:1,x:50}} 
              transition={{delay:1}}
              viewport={{once:true,}}          
                >
                <span>
                  <img src="/logo-1.png" alt="" />
                  <h5>Cyber Talks</h5>
                </span>
                <div className="progress-bg">
                  <p className="p1"></p>
                  <p className="percent"></p>
                </div>
              </motion.div>
              <motion.div
              initial={{opacity:0}} 
              whileInView={{opacity:1,x:50}} 
              transition={{delay:1.4}}
              viewport={{once:true,}}          
              >
              <span>
                <img src="/logo-2.png" alt="" />
                <h5>Hardware and IOT</h5>
              </span>
              <div className="progress-bg">
                <p className="p2"></p>
                <p className="percent"></p>
              </div>
              </motion.div>
              <motion.div
               initial={{opacity:0}} 
               whileInView={{opacity:1,x:50}} 
               transition={{delay:1.8}} 
               viewport={{once:true,}}
              >
              <span>
                <img src="/logo-3.png" alt="" />
                <h5>Teaching</h5>
              </span>
              <div className="progress-bg">
                <p className="p3"></p>
                <p className="percent"></p>
              </div>
              </motion.div>
              <motion.div
               initial={{opacity:0}} 
               whileInView={{opacity:1,x:50}} 
               transition={{delay:2.2}} 
               viewport={{once:true,}}
              >
              <span>
                <img src="/logo-4.png" alt="" />
                <h5>Art</h5>
              </span>
              <div className="progress-bg">
                <p className="p4"></p>
                <p className="percent"></p>
              </div>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="t-right">
          <div className="skill-img">
            <motion.div 
            
            className="col-1">
              <motion.img 
              initial={{opacity:0}}
              whileInView={{opacity:1,x:-80}}
              transition={{delay:1}}
              viewport={{once:true,}}
              src="/img.jpg" alt="" />
              <motion.img 
              initial={{opacity:0}}
              whileInView={{opacity:1,x:-80}}
              transition={{delay:1.4}}
              viewport={{once:true,}}
              src="/img.jpg" alt="" />
            </motion.div>
            <motion.div 
            
            
            className="col-2">
              <motion.img
              initial={{opacity:0}}
              whileInView={{opacity:1,x:-80}}
              transition={{delay:1}}
              viewport={{once:true,}}
              src="/img.jpg" alt="" />
              <motion.img 
              initial={{opacity:0}}
              whileInView={{opacity:1,x:-80}}
              transition={{delay:1.4}}
              viewport={{once:true,}}
              src="/img.jpg" alt="" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
