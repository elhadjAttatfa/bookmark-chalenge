import React from "react";
import Title from "../../title/Title";
import classes from "./Questions.module.css";
import Question from "./Question";
import { questions } from "./data";

const Questions = () => {
  const title = "Frequently Asked Questions";
  const parag =
    "Here are some of our FAQs. If you have other questions you'd like answered please feel free to email us";
  return (
    <div className={classes.questions}>
      <Title title={title} parag={parag} />
      <ul className={classes.contenu}>
        {questions.map(question=>( <li className={classes.questRes} key={question.id}>
            <Question question={question}/>
          </li>))}
      </ul>

      <div className={classes.actions}>
        <a href="/">more infos</a>
      </div>
    </div>
  );
};

export default Questions;
