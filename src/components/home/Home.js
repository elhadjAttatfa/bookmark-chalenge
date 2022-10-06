import React from 'react';
import Downloads from './downloadsSection/Downloads';
import Features from './features/Features';
import Hero from './hero/Hero';
import classes from './Home.module.css';
import Questions from './questions/Questions';

const Home = () => {
  return (
    <div className= {classes.home}>
      <Hero/>
      <Features/> 
      <Downloads/>
      <Questions/>

    </div>
  )
}

export default Home