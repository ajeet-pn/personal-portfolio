import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import BallCanvas from '../canvas/ball';
import { technologies } from '../constants';

const Games = () => {
  return (
    
    <>
            <p className={`${styles.sectionHeadText} uppercase`}>Fun Games.</p>
        
      {/* <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='text-slate-00 text-[17px] max-w-3xl leading-[30px]'
      >
       Games Section
      </motion.p> */}
<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 justify-center md:justify-start">
  <div class="bg-white rounded overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
    <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" class="w-full"/>
    <div class="p-4">
      <h4 class="font-bold text-lg mb-1">AviatorX</h4>
      <p class="text-gray-700 bg-yellow-600 p-2 text-center font-bolder">Coming soon</p>
    </div>
  </div>

  <div class="bg-white rounded overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
    <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" class="w-full"/>
    <div class="p-4">
      <h4 class="font-bold text-lg mb-1">ParrotX</h4>
      <p class="text-gray-700 bg-yellow-600 p-2 text-center font-bolder">Coming soon</p>
    </div>
  </div>

  <div class="bg-white rounded overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
    <img src="https://media.tenor.com/klkckiLg6e4AAAAM/plinko-stake.gif" alt="Avatar" class="w-full"/>
    <div class="p-4">
      <h4 class="font-bold text-lg mb-1">PlinkoX</h4>
      <p class="text-gray-700 bg-green-600 p-2 text-center font-bolder">
        <a href="/plinko" target="_self">
        Demo</a></p>
    </div>
  </div>

  <div class="bg-white rounded overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
    <img src="https://mines-review.com/wp-content/uploads/chrome_ato6kj7fdf.gif" alt="Avatar" class="w-full"/>
    <div class="p-4">
      <h4 class="font-bold text-lg mb-1">MinesX</h4>
      <p class="text-gray-700 bg-green-600 p-2 text-center font-bolder">  <a href="/mines" target="_self">Demo</a></p>
    </div>
  </div>
</div>
    </>
  );
};

export default SectionWrapper(Games, "games");