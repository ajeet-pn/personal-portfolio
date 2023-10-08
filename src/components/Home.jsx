import React, { useEffect , useState } from 'react';
import { FaLinkedin, FaGithub, FaAngellist } from 'react-icons/fa';
import { styles } from '../styles';
import { motion } from 'framer-motion';
import '../index.css'
import House from '../canvas/girl';
import resume from '../assets/AjeetPalResume.pdf'
import photo from '../assets/photo.jpg'

const Home = () => {
  const [active, setActive] = useState("");
     return ( 
      <section className={`relative w-full mx-auto`}> 
          <div className='w-11/12 mt-9 lg:pt-0  mx-auto md:grid md:grid-cols-2 lg:w-10/12 z-0 flex items-center flex-col-reverse'>
        <div className='flex flex-col justify-center'>
          <h4 className={`${styles.sectionSubText}`}>Hii, I'm</h4>
          <h1 className={`${styles.heroHeadText} heading`}>Ajeet Pal</h1>
          <p className={`${styles.heroSubText} mt-2 text-stone-950`}>Coding your dreams into reality - I specialize in building impactful websites that propel <span className='text'>your business forward.</span> </p>
          <ul className="list-none hidden sm:flex flex-row gap-5 pt-4">
          <li>
            <a href='' className='text-xl mt-1'><FaLinkedin size={30}/></a>
          </li>
          <li>
            <a href='https://github.com/ajeet-pn' className='text-xl mt-1'><FaGithub size={30}/></a>
          </li>
       </ul>
        <div className="flex sm:flex flex-row gap-5">
       <a href={resume} download>
       <button
            type='submit'
            className=' mt-5 btn py-3 px-8 rounded-xl outline-none w-fit text-white font-bold drop-shadow-lg'
          >Get Resume</button>
       </a>
        </div>
        </div>
        <div className='lg:h-[550px] md:h-[400px] h-[400px]  w-full flex items-center justify-center '>
            
            {/* <House /> */}
            <img src={photo} alt='profile-photo' width={350} height={350} />
        </div>
    </div>
   {/* motion box */}
    </section>
     );
}
 
export default Home;
