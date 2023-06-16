import "../CSS/Nav.scss"
import { useRef } from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import {Link} from 'react-scroll';

function Nav() {
  const navRef = useRef();

  const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};
  return (
        <header>
            <h3 className="logo">Shevchenko D.</h3>
            <div ref={navRef} className="mobile-nav">
              <span
                        className="nav-btn nav-close-btn"
                        onClick={showNavbar}>
                        <FaTimes/>
              </span>
              <ul className="nav-menu active">
                  <li className="nav-item"><Link to="home" spy={true} smooth={true} offset={-200} duration={50} onClick={showNavbar}>Home</Link></li>
                  <li className="nav-item"><Link to="about" spy={true} smooth={true} offset={-120} duration={50} onClick={showNavbar}>About</Link></li>
                  <li className="nav-item"><Link to="projects" spy={true} smooth={true} offset={-80} duration={50} onClick={showNavbar}>Projects</Link></li>
                  <li className="nav-item"><Link to="contact" spy={true} smooth={true} offset={-75} duration={50} onClick={showNavbar}>Contact</Link></li>  
              </ul>
            </div>
            
            
            <span
                  className="nav-btn"
                  onClick={showNavbar}>
                  <FaBars/>
            </span>
        </header>
  )
}

export default Nav