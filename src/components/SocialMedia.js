import React from "react";
import Twitter from "../img/Twitter Icon.svg";
import Github from "../img/GitHub Icon.svg";
import Instagram from "../img/Instagram Icon.svg";
import Facebook from "../img/Facebook Icon.svg";
import "./SocialMedia.css";

export default function SocialMedia() {
  return (
    <div id="socialMedia_container">
      <button id="twitter">
        <img src={Twitter} alt="twitter-icon" />
      </button>
      <button id="fb">
        <img src={Facebook} alt="facebook-icon" />
      </button>
      <button id="instagram">
        <img src={Instagram} alt="instagram-icon" />
      </button>
      <button id="github">
        <img src={Github} alt="github-icon" />
      </button>
    </div>
  );
}
