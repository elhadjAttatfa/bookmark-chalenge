import React, { useRef, useState } from "react";
import classes from "./Footer.module.css";
import iconError from "../assets/images/icon-error.svg";
import FooterMenu from "./FooterMenu";

const Footer = () => {
  const emailRef = useRef();
  const [validation, setValidation] = useState({ isValid: true, message: "" });

  const changeHandler = () => {
    setValidation({
      isValid: true,
      message: "",
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredEmail = emailRef.current.value;
    if (enteredEmail === "" || !/\S+@\S+\.\S+/.test(enteredEmail)) {
      setValidation({
        isValid: false,
        message: "Whoops, make sure it's an email",
      });
    }
  };
  console.log(validation.isValid);
  return (
    <>
      <div className={classes.footer}>
        <div className={classes.info}>
          <h4>35.000 + already joined</h4>
          <h2>Stay up-to-date with that we're doing</h2>
          <form onSubmit={submitHandler}>
            <div
              className={
                !validation.isValid
                  ? `${classes.formControl} ${classes.notValidateDiv}`
                  : classes.formControl
              }
            >
              <input
                type="text"
                name="email"
                onChange={changeHandler}
                ref={emailRef}
              />
              {!validation.isValid && <img src={iconError} alt="error" />}
              <div className={classes.validation}>
                <p>{validation.message}</p>
              </div>
            </div>
            <div className={classes.actions}>
              <button type="submit">contact us</button>
            </div>
          </form>
        </div>
      </div>
      <FooterMenu />
    </>
  );
};

export default Footer;
