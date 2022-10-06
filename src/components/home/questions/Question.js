import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import classes from "./Questions.module.css";

const Question = (props) => {
  const [showResponse, setShowResponse] = useState(false);
  const toggleInfoHandler = () => {
    setShowResponse(!showResponse);
  };
  return (
    <>
      <div className={classes.quest}>
        <p>{props.question.question}</p>
        <button onClick={toggleInfoHandler}>
        {!showResponse && <FaChevronDown className={classes.downChevron} />}
          {showResponse &&  <FaChevronUp className={classes.upChevron} />}
        </button>
      </div>
      {showResponse && (
        <div className={classes.res}>
          <p>{props.question.response}</p>
        </div>
      )}
    </>
  );
};

export default Question;
