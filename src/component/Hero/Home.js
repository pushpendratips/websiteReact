import React from "react";
import hero from "../pic/hero.jfif"

import "./Home.css";
import { Typewriter } from "react-simple-typewriter";
const Home = () => {
  return (
    <section className='hero' id='home'>
    <div className='container f_flex top'>
      <div className='left top'>       
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
