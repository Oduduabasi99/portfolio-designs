import "./about.css";
import Abt from "../../img/about.jfif";
import {BsPatchCheckFill} from "react-icons/bs"

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <div className="about-card">
          <img
            src={Abt}
            alt=""
            className="about-img"
          />
        </div>
      </div>
      <div className="about-right">
        <div className="experience">
        <div className="experience-title">
        <h5>Technologies I work with</h5>
        <h2>The Skills I Have</h2>
        <hr />
        </div>
        <div className="experience-container">
          <div className="experience-frontend">
            <div className="experience-content">
              <article className="experience-details">
                <BsPatchCheckFill className="experience-icon" />
                <div>
                <h4>HTML</h4>
                <small className="text-light">Experience</small>
                </div>
              </article>
              <article className="experience-details">
                <BsPatchCheckFill className="experience-icon" />
                <div>
                <h4>CSS</h4>
                <small className="text-light">Experience</small>
                </div>
              </article>
              <article className="experience-details">
                <BsPatchCheckFill className="experience-icon" />
                <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experience</small>
                </div>
              </article>
                <article className="experience-details">
                <BsPatchCheckFill className="experience-icon" />
                <div>
                <h4>PHP</h4>
                <small className="text-light">Experience</small>
                </div>
              </article>
              <article className="experience-details">
                <BsPatchCheckFill className="experience-icon" />
                <div>
                <h4>MySQL</h4>
                <small className="text-light">Experience</small>
                </div>
              </article>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default About;
