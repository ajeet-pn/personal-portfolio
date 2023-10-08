import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import ServiceCard from "../components/serviceCard";
import { services } from "../constants";

const About = () => {
     return (
       <>
         <motion.div variants={textVariant()} >
           <p className={styles.sectionHeadText}>Introduction</p>
           <h2 className={styles.sectionSubText}>Overview.</h2>
         </motion.div>  
         <motion.p
           variants={fadeIn("", "", 0.1, 1)}
           className='mt-4 text-slate-00 text-[17px] max-w-3xl leading-[30px]'
         >
           I am a skilled software developer with 1+ years experience in  JavaScript, and Yext, and expertise in frameworks and library like React, Redux, , Router ,  and Three.js. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!
         </motion.p>
   
         <div className='mt-20 flex flex-wrap gap-10 justify-items-center items-center'>
           {services.map((service, index) => (
             <ServiceCard key={service.title} index={index} {...service} />
           ))}
         </div>
       </>
     );
   };
   
   export default SectionWrapper(About, "about");