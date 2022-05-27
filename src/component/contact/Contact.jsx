import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import {useContext, useRef, useState} from "react";
import emailjs from 'emailjs-com';
import { ThemeContext } from "../../context";
 
const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false);
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_4w3zdwv', 'template_c9rep78', formRef.current, 'user_Bkg3VE6jPJZCdIcbbIPc9')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
    }
    return (
        <div className="cont">
            <div className="cont-bg"></div>
            <div className="cont-wrapper">
                <div className="cont-left">
                    <h1 className="cont-title">Let's Discuss Your Project</h1> 
                    <div className="cont-info">
                        <div className="cont-info-item">
                            <img src={Phone} alt="" className="cont-icon" />+234 803 244 2167
                        </div>
                        <div className="cont-info-item">
                            <img src={Email} alt="" className="cont-icon" />jacksoaustin001@gmail.com
                        </div>
                        <div className="cont-info-item">
                            <img src={Address} alt="" className="cont-icon" />Akwa Ibom, Nigeria
                        </div>
                    </div>
                </div>
                <div className="cont-right">
                <p className="cont-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
              <input style={{backgroundColor:darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
              <input style={{backgroundColor:darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
              <input style={{backgroundColor:darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
              <textarea style={{backgroundColor:darkMode && "#333"}} placeholder="Message" name="message" rows="5"></textarea>
              <button>Send</button>
              {done && "Thank you..."}
          </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
