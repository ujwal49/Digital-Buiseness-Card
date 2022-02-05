import React from "react";
import Info from "./components/Info";
import About from "./components/About";
import Intrests from "./components/Intrests";
import SocialMedia from "./components/SocialMedia";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <Info />
      <About />
      <Intrests />
      <SocialMedia />
    </div>
  );
}
