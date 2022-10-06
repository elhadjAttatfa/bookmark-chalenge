import React from 'react';
import classes from './Title.module.css'

const Title = (props) => {
  return (
    <div className={classes.title}>
        <h3>{props.title}</h3>
        <p>{props.parag}</p>
    </div>
  )
}

export default Title