import React from "react";
import Title from "../../title/Title";
import classes from "./Downloads.module.css";
import chromeImg from '../../assets/images/logo-chrome.svg';
import firefoxImg from '../../assets/images/logo-firefox.svg';
import operaImg from '../../assets/images/logo-opera.svg';

const Downloads = () => {
  const title = "Download the extension";
  const parag =
    "We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.";

  return (
    <div className={classes.downloads}>
      <Title title={title} parag={parag} />
      <div className={classes.contenu}>
        <div className={classes.chromeDiv}>
            <img src={chromeImg} alt='chrome'/>
            <div className={classes.infos}>
                <h2>Add to Chrome</h2>
                <p>Minimum version 62</p>
                <div className={classes.actions}>
                    <a href='/'>add & install extension</a>
                </div>
            </div>
        </div>
        <div className={classes.firefoxDiv}>
        <img src={firefoxImg} alt='firefox'/>
            <div className={classes.infos}>
                <h2>Add to Firefox</h2>
                <p>Minimum version 55</p>
                <div className={classes.actions}>
                    <a href='/'>add & install extension</a>
                </div>
            </div>
        </div>
        <div className={classes.operaDiv}>
        <img src={operaImg} alt='opera'/>
            <div className={classes.infos}>
                <h2>Add to Opera</h2>
                <p>Minimum version 46</p>
                <div className={classes.actions}>
                    <a href='/'>add & install extension</a>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Downloads;
