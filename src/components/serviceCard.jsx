import React from 'react';
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import '../index.css'

const ServiceCard = ({ index, title, icon }) => (
     <Tilt className='xs:w-[130px] w-20'>
       <motion.div
         variants={fadeIn("right", "spring", index * 0.5, 0.75)}
         className='w-full p-[1px] rounded-[20px]'
       >
         <div
           options={{
             max: 45,
             scale: 1,
             speed: 450,
           }}
           className='rounded-[50%] min-w-full md:py-5 py-3 md:px-8 px-1 min-h-[80px] flex justify-evenly items-center flex-col'
         >
           <img
             src={icon}
             alt='web-development'
             className='xs:w-16 xs:h-16 w-16 object-contain'
           />
   
           <h3 className='text-[10px] font-bold text-center pt-4'>
             {title}
           </h3>
         </div>
       </motion.div>
     </Tilt>
   );


export default ServiceCard;