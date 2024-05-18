import "./App.css";
import FirstPage from "./FirstPage/FirstPage";
import SecondPage from "./SecondPage/SecondPage";
import ThirdPage from "./ThirdPage/ThirdPage";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import Fourthpage from "./FourthPage/Fourthpage";

function App() {
  const [showScroll, setShowScroll] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const checkScrollTop = () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    setScrollProgress(scrolled);
    if (!showScroll && winScroll > 400) {
      setShowScroll(true);
    } else if (showScroll && winScroll <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [showScroll]);

  return (
    <BrowserRouter>
      <nav>
        <div className="logo">
          <h3>Cybernetic MD</h3>
        </div>
        <div className="list">
          <ul className="ul">
          <HashLink className="link" smooth to="#home">
            <li className="li">Home</li>
            </HashLink>
            <HashLink className="link" smooth to="#about">
              <li className="li">About</li>
            </HashLink>
            <HashLink className="link" smooth to="#skills">
              <li className="li">Skills</li>
            </HashLink>
            <HashLink className="link" smooth to="#contact">
              <li className="li">Contact</li>
            </HashLink>
          </ul>
        </div>
      </nav>
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <Fourthpage/>
      <div className="scroll-progress" style={{ height: `${scrollProgress}%` }}></div>
      <div
        className="scroll-up-btn"
        onClick={scrollTop}
        style={{ display: showScroll ? "flex" : "none" }}
      >
        ↑
      </div>
    </BrowserRouter>
  );
}

export default App;
