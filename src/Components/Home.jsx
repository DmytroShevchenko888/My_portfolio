import "../CSS/Home.scss"
import {FaLinkedin,FaGithub} from "react-icons/fa";
import waving_hand from "../Assets/waving.png"
import html from "../Assets/html.svg"
import css from "../Assets/css.svg"
import js from "../Assets/js.svg"
import react from "../Assets/react.svg"
import tailwind from "../Assets/tailwind.svg"
import scss from "../Assets/scss.svg"

function Home() {
  return (
    <section id="home" className="hero">
        <div className="container">
            <div className="content">
                <div className="hero-main">
                    <div className="hero-text">
                        <h1>Front-End React Developer</h1>
                        <img src={waving_hand} alt="waving_hand" />
                        <p>
                        Hi, I'm Dmytro Shevchenko. 
                        A passionate Front-end React Developer based in Dnipro, Ukraine. 📍
                        </p>
                        <span>
                        <a aria-label="linkedin" 
                         href="https://www.linkedin.com/in/dmytro-shevchenko-a47093222/"><FaLinkedin/></a>
                        <a aria-label="github" 
                         href="https://github.com/DmytroShevchenko888"><FaGithub/></a>
                        </span>
                    </div>
                    <div className="hero-img">
                    </div>
                </div>
                <div className="skills">
                    <p>Tech Stack</p>
                    <div className="logos">
                        <ul>
                            <li><img src={html} title="HTML5" alt="program_img" /></li>
                            <li><img src={css} title="CSS" alt="program_img" /></li>
                            <li><img src={js} title="JavaScript" alt="program_img" /></li>
                            <li><img src={react} title="React" alt="program_img" /></li>
                            <li><img src={tailwind} title="Tailwind" alt="program_img" /></li>
                            <li><img src={scss} title="SASS" alt="program_img" /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Home