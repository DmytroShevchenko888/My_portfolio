import '../CSS/Footer.scss'
import {FaLinkedin,FaGithub} from "react-icons/fa";


function Footer() {
  return (
    <footer>
        <div className="container">
            <div className="content">
                <h3>Copyright © 2023. All rights are reserved</h3>
                <div className="socials">
                    <a aria-label="linkedin"
                    href="https://www.linkedin.com/in/dmytro-shevchenko-a47093222/">
                        <FaLinkedin/>
                    </a>
                    <a aria-label="github"
                    href="https://github.com/DmytroShevchenko888">
                        <FaGithub/>
                    </a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer