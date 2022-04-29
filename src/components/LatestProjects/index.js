import React from "react";
import Card from "../UI/Card";
import SmallHeading from "../UI/SmallHeading";
import MediumHeading from "../UI/MediumHeading";
import latestProject from "../../assets/projects/pro1.png";
import "./style.css";
import Button from "../UI/Button";


const LatestProjects = (props) => {
  return (
    <div
      className="container"
      style={{ marginTop: "50px", marginBottom: "50px" }}
      data-aos="zoom-in-up"
    >
      <Card>
        <div className="flexRow flexCol align-center justify-sb">
        <div className="projectHeadingContainer">
          <SmallHeading text="portfolio" />
          <MediumHeading style={{textTransform: "uppercase" }} text="Latest Projects" />
          <div className="mtb-10 flexRow" style={{justifyContent: "center"}}>
          <Button label="Github" />
          <Button label="Live D" />
          </div>
        </div>
        <div className="projectImgContainer">
          <img src={latestProject} alt="" />
        </div>
        </div>
      </Card>
    </div>
  );
};

export default LatestProjects;