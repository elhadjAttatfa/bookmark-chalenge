import React from "react";
import classes from "./Hero.module.css";
import imageHero from "../../assets/images/illustration-hero.svg";

const Hero = () => {
  return (
    <div className={`${classes.hero} ${'container'}`}>
      <div className={classes.simple}>
        <div className={classes.infos}>
          <h2>a simple boobmark manager</h2>
          <p>
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
        </div>
        <div className={classes.actions}>
          <a href="http://www.chrome.com">Get it on Chrome</a>
          <a href="http://www.firefox.com">Get it on Firefox</a>
        </div>
      </div>
      <div className={classes.image}>
        <img src={imageHero} alt="hero" />
          <div className={classes.behindRec}></div>
      </div>
    </div>
  );
};

export default Hero;
