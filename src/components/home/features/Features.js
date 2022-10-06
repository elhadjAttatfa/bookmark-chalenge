import React, { useState } from "react";
import Title from "../../title/Title";
import classes from "./Features.module.css";
import FirstFeature from "./FirstFeature";

const Features = (index) => {
  const [divIndex, setDivIndex] = useState(0);

  const title = "Features";
  const parag =
    "Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access themon the go.";

  return (
    <div className={classes.features}>
      <Title title={title} parag={parag} />
      <div className={classes.multiMenu}>
        <div>
          <button
            className={
              divIndex === 0 ? classes.selectedMenu : classes.notSelectedMenu
            }
            onClick={ ()=>{setDivIndex(0)}}
          >
            simple bookmarking
          </button>
        </div>
        <div>
          <button
            className={
              divIndex === 1 ? classes.selectedMenu : classes.notSelectedMenu
            }
            onClick={()=>{setDivIndex(1)}}
          >
            speedy searching
          </button>
        </div>
        <div>
          <button
            className={
              divIndex === 2 ? classes.selectedMenu : classes.notSelectedMenu
            }
            onClick={()=>{setDivIndex(2)}}
          >
            easy sharing
          </button>
        </div>
      </div>
      <div className={classes.contenu}>
        <FirstFeature divIndex={divIndex}/>
      </div>
    </div>
  );
};

export default Features;
