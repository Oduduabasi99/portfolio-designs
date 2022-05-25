import "./intro.css";
import Me from "../../img/intro.png";
import Typical from  "react-typical";
import Resume from "../../img/cv.pdf"
import {FaGithub, FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp} from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro-left">
        <div className="intro-left-wrapper">
          <div>
          <a href="#"><FaGithub className="social-icon" size='1.3em' /></a>
          <a href="#"><SiGmail className="social-icon" size='1.3em' /></a>
          <a href="https://www.linkedin.com/mwlite/in/austine-jackson-a66841131"><FaLinkedin className="social-icon" size='1.3em' /></a>
          <a href="#"><FaTwitter className="social-icon" size='1.3em' /></a>
          <a href="https://www.facebook.com/profile.php?id=100077647488677"><FaFacebook className="social-icon" size='1.3em' /></a>
          <a href="#"><FaInstagram className="social-icon" size='1.3em' /></a>
          </div>
        
          <h2 className="intro-intro">Hello, My name is</h2>
          <h1 className="intro-name">Austin Jackson Utsu</h1>

          <div className="intro-title">
              <h1 className="intro-title-item">
                {""}
                <Typical loop={Infinity} steps={["Web Developer", 1000, "Computer Engineer", 1000]}
                />
              </h1>
              
          </div>
          <p className="intro-desc">
            I make adjustments, but I don't make adjustments that are counter to who I am or what I believe. I do make adjustmentst to get results
          </p>

          <a href={Resume} download="austin_jackson cv.pdf" className="intro-cv">
              <button className="btn">Get Resume</button>
            </a>
        </div>
        
      </div>
      <div className="intro-right">
        <div className="intro-bg"></div>
        <img src={Me} alt="" className="intro-img" />
      </div>
    </div>
  );
};

export default Intro;
