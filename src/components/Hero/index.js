import React from 'react';
import me from '../../assets/images/me-right.png'
import Button from '../UI/Button';
import {FaGithub, FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp} from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'
import './style.css'

const Hero = (props) => {
  return (
    <div className='container' style={{marginTop: "70px"}} >
      <div className='flexRow flexCol justify-sb align-center '>
      <div data-aos="fade-right" >
          <p className='bold-500 textColor ls-1 mtb-10'><span className='primaryColor'>Hello,</span> I am <span className='uppercase'>Oduduabasi Isong</span></p>
          <h1 className='textColor ls-1 mtb-10'>Web Developer</h1>
          <p className='font-12 greyColor mtb-10'>I am a Fullstack Developer</p>
          <div className='flexRow' style={
            {margin: "30px 0"}
          }>
          <div>
          <Button label= "Hire Me" />
          </div>
          <div className='mlr-10'>
          <Button label= "Download CV"  inverse={true} />
          </div>
          </div>
          <div className='justify-sb primaryColor'>
          <a href="#"><FaGithub className="social-icon primaryColor mlr-10" size='1.3em' /></a>
          <a href="#"><SiGmail className="social-icon primaryColor mlr-10" size='1.3em' /></a>
          <a href="#"><FaLinkedin className="social-icon primaryColor mlr-10" size='1.3em' /></a>
          <a href="#"><FaTwitter className="social-icon primaryColor mlr-10" size='1.3em' /></a>
          <a href="#"><FaFacebook className="social-icon primaryColor mlr-10" size='1.3em' /></a>
          <a href="#"><FaInstagram className="social-icon primaryColor mlr-10" size='1.3em' /></a>
          <a href="#"><FaWhatsapp className="social-icon primaryColor mlr-10" size='1.3em' /></a>
          </div>
      </div>
      <div data-aos="fade-left">
          <div className='meRightImgContainer'>
            <img src={me} alt="" />
          </div>
      </div>
      </div>
  </div>
  );
};

export default Hero;
