import React from "react";
import Twitter from "../img/Twitter.png";
import Github from "../img/GitHub.png";
import Instagram from "../img/Instagram.png";
import Facebook from "../img/Facebook.png";
import "./SocialMedia.css";

export default function SocialMedia() {
  return (
    <div id="socialMedia_container">
      <button id="twitter">
        <img src={Twitter} alt="twitter" />
      </button>
      <button id="fb">
        <img src={Facebook} alt="facebook" />
      </button>
      <button id="instagram">
        <img src={Instagram} alt="instagram" />
      </button>
      <button id="github">
        <img src={Github} alt="github" />
      </button>
    </div>
  );
}
