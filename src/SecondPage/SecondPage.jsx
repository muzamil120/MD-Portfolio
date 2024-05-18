import React, { useEffect } from "react";
import "./SecondPageStyle.css";
import { motion } from "framer-motion";

export default function SecondPage() {
  useEffect(() => {
    const cards = document.querySelectorAll(".card-1, .card-2");

    cards.forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left; // x position within the element
        const y = e.clientY - rect.top; // y position within the element

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const deltaX = (x - centerX) / centerX; // Normalize x to be between -1 and 1
        const deltaY = (y - centerY) / centerY; // Normalize y to be between -1 and 1

        const rotateX = deltaY * 10; // Adjust the rotation intensity
        const rotateY = -deltaX * 10; // Adjust the rotation intensity

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = "perspective(1000px) rotateX(0) rotateY(0)";
      });
    });
  }, []);

  return (
    <div className="SecondPage" id="about">
      <h2 className="logo">About</h2>
      <div className="s-hero">
        {/* <h1>I,M Mohamed muzamil</h1>
          <p className="s-first">
            I,m as Artifical intelligence and data science. Open source contributer,cybersecurity Researcher.
          </p> */}
        {/* <p className="s-second">
            I,m pursuing B.TECH Artificial intelligence and data science in Dhanalakshimi srinivasan Engineering Collage. I am intrested in the domain of cyber security and Ethical Hacking . I started my journey as a open source contributing many open source works.
          </p> */}
        <motion.div
          
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{
            margin:'-200px',
            once:true,
          }}

          className="card-1"
        >
          <h2>CyberSecurity Researcher</h2>
          <div className="box-1">
            
            <p>
            Hello! I'm Mohammed Muzamil, a cybersecurity professional with 2 years of experience in threat analysis, penetration testing, and network security. I hold certifications like cisco upskill Certifications and have worked on projects to identify vulnerabilities and implement security measures. Proficient in tools like Metasploit,Nmap,Git-Clone,Air Crack-ng. 
            </p>
          </div>
        </motion.div>
        <motion.div 
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{
          margin:'-200px',
          once:true,
        }}
        className="card-2">
          <h2>B.Tech Artifical Intelligence</h2>
          <div className="box-1">
            
            <p>
                I'm Pursuing B.Tech Artificial Intelligence and Data Science in DSEC. I have strong foundations in concepts of programming language such as Python,Html,CSS,Linux,Bash,Networking,Cryotography.I stay updated through industry forums and conferences.            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
