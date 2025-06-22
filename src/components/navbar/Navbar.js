

import React, { useState } from 'react';
import { navLinkData } from '../../constants';
import { Link } from 'react-scroll';
import { FiMenu } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import { FaLinkedin} from 'react-icons/fa';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="w-full  h-20 md:24 mx-auto sticky top-0 z-50 bg-bodyColor flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600 px-4">
      <div className="text-xl font-semibold text-white">Sai Krishna</div>

      {/* Desktop Menu */}
      <ul className="items-center hidden gap-6 md:inline-flex lg:gap-10">
        {navLinkData.map(({ _id, title, link }) => (
          <li
            key={_id}
            className="text-base font-normal tracking-wide text-gray-400 duration-300 cursor-pointer hover:text-designColor"
          >
            <Link
              activeClass="active"
              to={link}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Toggle Button */}
      <span
        onClick={() => setShowMenu(prev => !prev)}
        className="inline-flex items-center justify-center w-10 h-10 text-xl bg-black rounded-full cursor-pointer md:hidden text-designColor"
        role="button"
        aria-label="Toggle Menu"
      >
        <FiMenu />
      </span>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="absolute top-0 left-0 w-[70%] sm:w-[300px] md:hidden h-screen bg-gray-900 p-4 overflow-scroll scrollbar-hide z-50">
          <div className="flex flex-col py-4 gap-14">
            <div>
              <h1 className="text-xl font-bold text-white">Sai Krishna</h1>
              <p className="mt-2 text-sm text-gray-400">
               I’m a full-stack developer focused on building scalable web architectures and real-world applications using the MERN stack.
                     Proficient in <span className="text-white ">React.js , Node.js, MongoDB, and Express.js</span >, with hands-on experience in building responsive UIs with Tailwind CSS,
                     integrating REST APIs, and deploying full-stack apps with a strong emphasis on performance, security, and maintainability..
              </p>
            </div>

            <div>
              <ul className="flex flex-col gap-5">
              {navLinkData.map(({ _id, title, link }) => (
                <li
                  key={_id}
                  className="text-base font-normal tracking-wide text-gray-400 duration-300 cursor-pointer hover:text-designColor"
                >
                  <Link
                    onClick={() => setShowMenu(false)}
                    activeClass="active"
                    to={link}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
              </div>
             <div>
                            <h2 className='mb-4 text-base uppercase font-titleFont'>Find me in</h2>
                            <div className='flex gap-4'>
                                <span className='text-white bannerIcon'>
                                  <a href="https://www.linkedin.com/in/sai-krishna-poosarla/"><FaLinkedin/></a>
                                </span>
                             
                
                            </div>
             </div>
          </div>

          <span
            onClick={() => setShowMenu(false)}
            className="absolute inline-flex items-center justify-center w-10 h-10 text-2xl text-gray-400 duration-300 bg-black rounded-full cursor-pointer top-4 right-4 hover:text-designColor"
            role="button"
            aria-label="Close Menu"
          >
            <MdClose />
          </span>
        </div>
      )}
    </div>
  );
};

export default Navbar;
