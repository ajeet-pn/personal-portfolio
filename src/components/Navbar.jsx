import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navLinks } from '../constants';
import { styles } from '../styles';
import '../index.css'
import menu from '../assets/menu.svg';
import close from '../assets/close.svg'

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (

    <nav className={` w-full flex border-b items-center py-1 sticky bg-white shadow-xl md:px-1 px-3  top-0 z-20 `}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to='/' className='flex items-center gap-2' onClick={() => {
          setActive("");
          window.scrollTo(0, 0);
        }}>
          <p className="text-stone-950 font-700 cursor-pointer flex flex-col ">
            <span className='text-sm font-bold text-[#1A488E]'>
  <span className='text-lg font-bolder'>{'{?'}</span> <span style={{ backgroundColor: 'rgb(252, 76, 136)', color: 'white', borderRadius: '4px', padding: '0 5px' }}>A</span> <span className='text-lg font-bolder'>{': '}</span>
   <span style={{ backgroundColor: 'rgb(84, 158, 240)', color: 'white', borderRadius: '4px', padding: '0 5px' }}> P</span> <span className='text-lg font-bolder'>{'}'}</span>
</span>

            {/* <span className='text-[#1A488E] font-black text-xl'>{`${'{?🅰:🅿}'}`}&nbsp; </span> */}

            <span className='sm:block hidden first-letter:text-[#1A488E] first-letter:text-2xl first-letter:font-bold'> | Javascript & Python Developer</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li key={link.id} className={`${active === link.title ? "active" : "text-stone-950"} hover:text-slate-800 text-[18px] font-medium cursor-pointer mt-3`} onClick={() => setActive(link.title)}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
          <a href="mailto:ajeetpn88gmail.com">
            <span
              type='submit'
              className=' py-3 px-8 rounded-xl outline-none w-fit text-[#1A488E] font-bold drop-shadow-lg'
            >ajeetpn88@gmail.com</span>
          </a>
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[18px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${!toggle ? "hidden" : "flex"
              } p-6 navbar absolute top-9 right-0 mx-2 my-1 rounded-md min-w-[140px] z-10`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "active" : "text-stone-950"
                    }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`/`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;