import '../CSS/Contact.scss'
import {GoLocation, GoMailRead} from 'react-icons/go'
import Email_form from './Email_form'

function Contact() {
  return (
    <section id='contact' className='contact'>
      <div className="container">
        <div className="contact-content">
          <div className="contact-title">
            <p>Contact</p>
            <h3>Don't be shy! Hit me up! 👇</h3>
          </div>
          <div className="contact-icons">
            <div className="contact-icon_box">
              <span>
                <GoLocation className='icon' />
              </span>
              <div className="contact-info">
                <h3>Location</h3>
                <p>Dnipro, Ukarine</p>
              </div>
            </div>
            <div className="contact-icon_box">
              <span>
                <GoMailRead className='icon' />
              </span>
              <div className="contact-info">
                <h3>E-mail</h3>
                <a href="mailto:dmytro.shevchenko08@gmail.com">dmytro.shevchenko08@gmail.com</a>
              </div>
            </div>
          </div>
        <Email_form/>
        </div>
      </div>
    </section>
  )
}

export default Contact