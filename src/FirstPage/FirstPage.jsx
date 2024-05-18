import React from "react";
import Typewriter from "typewriter-effect";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FirstPageStyle.css";
import { motion } from "framer-motion";

export default function FirstPage() {
  const handleDownload = async () => {
    try {
      const response = await fetch(
        "https://cors-anywhere.herokuapp.com/https://drive.google.com/uc?id=1ka9_3_GgkpaZk84sPveyUvE6AqIlUQfl&export=download"
      );
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = "Cybernetic_MD_CV.pdf";
      link.click();

      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Failed to download file:", error);
      alert("Failed to download..!");
    }
  };

  return (
    <>
      {/* <ParticlesBackground/> */}
      <div className="container" id="home">
        <div className="hero">
          <motion.div
            whileInView={{ x: 80, opacity: 1 }}
            transition={{ delay: 1 }}
            initial={{ opacity: 0, x: -100 }}
            viewport={{ once: true }}
            className="left"
          >
            <h2>Hello there, it's</h2>
            <h1 id="fst">Cybernetic MD</h1>
            <div className="run">
              <h1>And I am</h1>
              <h1 className="text">
                <Typewriter
                  options={{
                    strings: [
                      "CyberSecurity Researcher",
                      "Ethical Hacker",
                      "Mentor",
                      "Network Engineer",
                    ],
                    autoStart: true,
                    loop: true,
                    wrapperClassName: "typewriter-text",
                    // cursorClassName: "typewriter-cursor",
                    pauseFor: 2000,
                    deleteSpeed: 50,
                    typeSpeed: 80,
                    onComplete: (self) => {
                      const cursor = document.querySelector(
                        ".Typewriter__cursor"
                      );
                      cursor.style.color = "red";
                    },
                  }}
                />
              </h1>
            </div>

                  <p>I am a B.Tech student. I am interested in Cyber Security And Ethical Hacking and also doing Teaching.</p>
            <button onClick={handleDownload}>Download CV</button>
          </motion.div>

          <motion.div
            transition={{ delay: 1 }}
            initial={{ opacity: 0 }}
            whileInView={{ x: -80, opacity: 1 }}
            viewport={{ once: true }}
            className="right"
          >
            <img src="/software tester.gif" alt="Loading..." />
          </motion.div>
        </div>
      </div>
    </>
  );
}
