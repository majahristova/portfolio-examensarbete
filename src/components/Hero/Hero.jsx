import React, { useEffect } from "react";
import "./Hero.css";
import { animateHero } from "./HeroAnimation";

const Hero = () => {
  useEffect(() => {
    animateHero();
  }, []);

  return (
    <div className="hero-background">
      <div className="Profile">
        <h1 className="hero-title">Hi, I am Maja</h1>
        <p className="hero-description">
          A driven frontend developer who is passionate about creating
          user-friendly and aesthetically appealing digital experiences. With
          experience in coding and design, I focus on delivering high-quality
          solutions that meet users' needs and expectations.
        </p>
      </div>
    </div>
  );
};

export default Hero;
