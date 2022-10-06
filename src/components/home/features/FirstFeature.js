import React from "react";
import classes from "./FirstFeature.module.css";
import imageFeature1 from "../../assets/images/illustration-features-tab-1.svg";
import imageFeature2 from "../../assets/images/illustration-features-tab-2.svg";
import imageFeature3 from "../../assets/images/illustration-features-tab-3.svg";

const FirstFeature = (prpos) => {
  return (
    <div className={`${classes.firstFeature} ${"container"}`}>
      <div className={classes.image}>
      {prpos.divIndex===0 &&  <img src={imageFeature1} alt="imageFeature1" />}
       {prpos.divIndex===1 &&  <img src={imageFeature2} alt="imageFeature2" />}
       {prpos.divIndex===2 &&  <img src={imageFeature3} alt="imageFeature3" />}
        <div className={classes.behindRec}></div>
      </div>
      <div className={classes.simple}>
        <div className={classes.infos}>
        {prpos.divIndex===0 && <h2>Bookmark in one click</h2>}
         {prpos.divIndex===1 &&  <h2>Intelligent search</h2>}
         {prpos.divIndex===2 && <h2>Share your bookmarks</h2>}
         {prpos.divIndex===0 &&  <p>
            Organize your bookmark however you like.Our simple dag-and-drop
            interface giveds you comlete control over how you manage your
            favourite sites.
          </p>}
          {prpos.divIndex===1 &&  <p>
            Our powerful search feature will help youo find saved sites in
            notime at all. No need to trowl throught all of your bookmarks.
          </p>}
          {prpos.divIndex===2 &&  <p>
          Easily share your bookmarksand collections with others. Create a sherable link that you can send at the click of the button.
          </p>}
        </div>
        <div className={classes.actions}>
          <a href="/">more info</a>
        </div>
      </div>
    </div>
  );
};

export default FirstFeature;
