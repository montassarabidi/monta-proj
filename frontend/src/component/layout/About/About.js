import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/montassar.abidi1";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="montassar.jpg"
              alt="Founder"
            />
            <Typography>Montassar Abidi</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              This is a sample wesbite made by @MontassarAbidi. 
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="https://www.youtube.com/channel/UCiEJCSXaZkpJCmhAVotZWlg"
              target="blank"
            >
              <YouTubeIcon className="youtube" />
            </a>

            <a href="https://instagram.com/montassar.abidi1" target="blank">
              <InstagramIcon className="instagram" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
