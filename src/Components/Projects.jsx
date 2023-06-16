import '../CSS/Projects.scss'
import car from '../Assets/car-rental.webp'
import coindom from '../Assets/coindom.png'
import gym from '../Assets/gymate-home.webp'
import ecom from '../Assets/ecom.webp'
import {FaGithub} from 'react-icons/fa'
import {BsBoxArrowUpRight} from 'react-icons/bs'


function Projects() {
  return (
    <section id='projects' className='projects'>
        <div className="container">
        <div className="project-content">
            <p>portfolio</p>
            <h3>Each project is a unique piece of development 🧩</h3>
            <div className="projects-grid">
                <div className="project_card type__1">
                    <div className="project-img">
                        <a href="https://car-rental-ten.vercel.app/">
                            <img src={car} alt="website" />
                        </a>
                    </div>
                    <div className="project-text">
                        <h3>CAR RENTAL 🚗</h3>
                        <p>
                        A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars.
                        </p>
                        <div className="stack">
                            <p>React</p>
                            <p>SCSS</p>
                        </div>
                        <div className="links">
                            <a href="https://github.com/DmytroShevchenko888">
                                <div>Code</div>
                                <FaGithub className='icon'/>
                            </a>
                            <a href="https://car-rental-ten.vercel.app/">
                                <div>Live Demo</div>
                                <BsBoxArrowUpRight className='icon'/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="project_card type__1 reversed">
                    <div className="project-img">
                            <a href="https://coindom-crypto-search.vercel.app/">
                                <img src={coindom} alt="website" />
                            </a>
                        </div>
                        <div className="project-text">
                            <h3>COINDOM 💰</h3>
                            <p>
                            Coindom is a crypto app that allows users to search for information about various cryptocurrencies in real-time.
                            </p>
                            <div className="stack">
                                <p>React</p>
                                <p>SCSS</p>
                            </div>
                            <div className="links">
                                <a href="https://github.com/DmytroShevchenko888">
                                    <div>Code</div>
                                    <FaGithub className='icon'/>
                                </a>
                                <a href="https://coindom-crypto-search.vercel.app/">
                                    <div>Live Demo</div>
                                    <BsBoxArrowUpRight className='icon'/>
                                </a>
                            </div>
                        </div>
                </div>
                <div className="project_card type__1">
                    <div className="project-img">
                                <a href="https://gymate-iota.vercel.app/">
                                    <img src={gym} alt="website" />
                                </a>
                            </div>
                            <div className="project-text">
                                <h3>GYMATE 🏋️</h3>
                                <p>
                                A gym website is a comprehensive resource for fitness information, class schedules, membership options, and tools to help users achieve their fitness goals.
                                </p>
                                <div className="stack">
                                    <p>React</p>
                                    <p>SCSS</p>
                                </div>
                                <div className="links">
                                    <a href="https://github.com/DmytroShevchenko888">
                                        <div>Code</div>
                                        <FaGithub className='icon'/>
                                    </a>
                                    <a href="https://gymate-iota.vercel.app/">
                                        <div>Live Demo</div>
                                        <BsBoxArrowUpRight className='icon'/>
                                    </a>
                                </div>
                            </div>
                </div>
                <div className="project_card type__1 reversed">
                    <div className="project-img">
                                    <a href="https://minimalist-e-commerce.vercel.app/">
                                        <img src={ecom} alt="website" />
                                    </a>
                                </div>
                                <div className="project-text">
                                    <h3>RAOUF ECOMMERCE 🛒</h3>
                                    <p>
                                    With a focus on simplicity and clean design, this store prioritize user experience, making it easy for customers to find and purchase the products they need.
                                    </p>
                                    <div className="stack">
                                        <p>React</p>
                                        <p>SCSS</p>
                                    </div>
                                    <div className="links">
                                        <a href="https://github.com/DmytroShevchenko888">
                                            <div>Code</div>
                                            <FaGithub className='icon'/>
                                        </a>
                                        <a href="https://minimalist-e-commerce.vercel.app/">
                                            <div>Live Demo</div>
                                            <BsBoxArrowUpRight className='icon'/>
                                        </a>
                                    </div>
                                </div>
                </div>
            </div>
        </div>
        </div>
        
    </section>
  )
}

export default Projects