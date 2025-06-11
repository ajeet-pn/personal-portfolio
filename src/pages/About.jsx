import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import ServiceCard from "../components/serviceCard";
import { services } from "../constants";
import BallCanvas from '../canvas/ball';
import { technologies } from '../constants';

const About = () => {
  return (
    <>
      < >
        <p className={`${styles.sectionHeadText} uppercase`}>Introduction</p>
        <h2 className={`${styles.sectionSubText} heading font-bold`} >Overview.</h2>
      </>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-slate-00 text-[17px] max-w-3xl leading-[30px]'
      >
        I am a skilled software developer with 2.6+ years experience in  JavaScript, and Yext, and expertise in frameworks and library like React, Redux, , Router ,  and Three.js. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      <div className='flex mt-3 flex-wrap justify-center md:justify-start items-center'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
        {/* {technologies?.map((technology, index) => (
        <div key={index} className="w-24 h-24">
          <BallCanvas icon={technology?.icon} />
        </div>
      ))} */}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");