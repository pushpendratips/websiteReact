import React from "react";
import hero from "../pic/hero.jfif"

import "./Home.css";
import { Typewriter } from "react-simple-typewriter";
const Home = () => {
  return (
    <section className='hero' id='home'>
    <div className='container f_flex top'>
      <div className='left top'>
        <h3>WELCOME TO MY WORLD</h3>
        <h1>
          Hi, I’m <span>Pushpendra Tripathi</span>
        </h1>
        <h2>
          a
          <span>
            <Typewriter words={[" Professional Coder.", " Developer."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
          </span>
        </h2>

        <p>
Hello! I am Pushpendra Tripathi, I'm Software Engineer at Warpspd.
I have Knowledge of MERN stack and I also have created lot of end to end beautiful projects on MERN.
I'm truly passionate about full stack web development.
I completed From NIIT with a degree in GNIIT Course(2 years of teaching by the faculty and 1 year for Professional Practice). Out of these three years.
I love meeting new people, discussing ideas & projects, and hearing new perspectives.
GitHub : https://github.com/pushpendratips
</p>
     
      </div>
      <div className='right'>
        <div className='right_img'>
          <img src={hero} alt='' />
        </div>
      </div>
    </div>
  </section>
  );
};

export default Home;
