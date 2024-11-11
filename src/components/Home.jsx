import React, { useEffect, useState } from 'react';
import { FaLinkedin, FaGithub, FaAngellist, FaPhoneSquareAlt } from 'react-icons/fa';
import { styles } from '../styles';
import { motion } from 'framer-motion';
import '../index.css'
import House from '../canvas/girl';
import resume from '../assets/AjeetPalResume.pdf'
import photo from '../assets/photo.jpg'
import ComputersCanvas from '../canvas/computer'

const Home = () => {
  const [active, setActive] = useState("");
  return (
    <section className={`relative w-full mx-auto`}>
      <div className='w-11/12  lg:pt-0  mx-auto md:grid md:grid-cols-2 lg:w-10/12 z-0 flex items-center flex-col-reverse'>
        <div className='flex flex-col justify-center md:mt-0 mt-6'>
          <h4 className={`${styles.sectionSubText} font-bold capitalize`}>Hii, I'm</h4>
          <h1 className={`${styles.heroHeadText} heading`}>Ajeet Pal</h1>
          <p className={`${styles.heroSubText} mt-2 text-stone-950 capitalize`}>Coding your dreams into reality - I specialize in building impactful websites that propel <span className='text'>your business forward.</span> </p>
          <ul className="list-none  sm:flex flex-row gap-5 pt-4">
            <li>
              <a href='https://www.linkdin.com/in/ajeet-pal-103215103' className='text-xl mt-1'><FaLinkedin size={30} /></a>
            </li>
            <li>
              <a href='https://github.com/ajeet-pn' className='text-xl mt-1'><FaGithub size={30} /></a>
            </li>
            <li>
              <a href='tel:7068734991' className='text-xl mt-1'><FaPhoneSquareAlt size={30} /></a>
            </li>
          </ul>
          <div className="flex sm:flex flex-row gap-5">
            <a href={resume} >
              <button
                type='submit'
                className=' mt-5 btn py-3 px-8 rounded-xl outline-none w-fit text-white font-bold drop-shadow-lg'
              >Get Resume</button>
            </a>
          </div>
        </div>
        <div className='lg:h-[420px] h-[320px] w-full flex items-center md:mt-0 mt-5 justify-center '>

          {/* <House /> */}
          {/* <ComputersCanvas/> */}
          <img src={photo} alt='profile-photo' width={350} height={250} />
        </div>
      </div>
      {/* motion box */}
    </section>
  );
}

export default Home;
