import React from "react";
import profile_pic from "../img/profile_picture.png";
import email_img from "../img/Mail.png";
import linkedin_img from "../img/linkedin.png";
import "./Info.css";

export default function Info() {
  return (
    <div>
      <img src={profile_pic} alt="my profile" />
      <h1 className="name">Laura Smith</h1>
      <h3 className="job_role">Frontend Developer</h3>
      <h5 id="portfolio">laurasmith.website</h5>

      <div id="social_media">
        <button id="email_btn" alt="mail button">
          <img src={email_img} id="email" /> Email
        </button>
        <button id="linkedin_btn" alt="linkedin button">
          <img src={linkedin_img} id="linkedin" /> Linkedin
        </button>
      </div>
    </div>
  );
}
