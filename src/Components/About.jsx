import "../CSS/About.scss"
import emoji from '../Assets/working-emoji.png'
import about from '../Assets/about.webp'
import text from '../Assets/text.svg'

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content">
          <div className="img-side">
            <img src={emoji} alt="emoji" className="work-emoji" />
            <img src={about} alt="about" className="img-side__main-img" />
            <span>
              <img src={text} alt="text" />
            </span>
          </div>
          <div className="text-side">
            <h4>About me</h4>
            <h3>
            A dedicated Front-end Developer
            <br />
            based in Dnipro, Ukraine 📍
            </h3>
            <p>
            As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About