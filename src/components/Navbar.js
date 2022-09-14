import React from "react";
import "../navbar.css";

import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
export default function Header() {
  return (
    <div>
      <nav className="nav-container">
        <h1>Five Star Agency</h1>

        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Our Work</a>
        <a href="#">Contact Us</a>
        <div>
          <a href="https://www.instagram.com/" target="_blank">
            <InstagramIcon className="navIcon" />
          </a>
          <a href="https://www.google.com/" target="_blank">
            <MailOutlineIcon className="navIcon" />
          </a>
          <a href="https://www.linkedin.com/" target="_blank">
            <LinkedInIcon className="navIcon" />
          </a>

          <a href="https://twitter.com/?lang=en" target="_blank">
            <TwitterIcon className="navIcon" />
          </a>
        </div>
      </nav>
    </div>
  );
}
