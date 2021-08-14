import React, { useState } from "react";
import NavbarItem from "./NavbarItem/NavbarItem";
import { CgMenuRightAlt } from "react-icons/cg";
import { BsFileEarmarkArrowDown } from "react-icons/bs";
import resume from "../../assets/files/zisispatis_cv.pdf";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
      <div className='relative flex items-center justify-between'>
        <a
          href='/'
          aria-label='Company'
          title='Company'
          className='inline-flex items-center'
        >
          <span className='ml-2 text-3xl font-poppins font-black tracking-wide text-green_color border-green_color uppercase border-2 p-2 rounded-md hover:bg-green_color_hover'>
            ZS
          </span>
        </a>
        <ul className='flex items-center hidden space-x-8 lg:flex text-white_light_color'>
          <NavbarItem text_id={"about"} title='About' />
          <NavbarItem text_id={"experience"} title='Experience' />
          <NavbarItem text_id={"projects"} title='Projects' />
          <NavbarItem text_id={"contact"} title='Contact' />
          <li>
            <a
              href={resume}
              target='_blank'
              rel='noreferrer'
              className='inline-flex items-center justify-center h-12 px-6 font-poppins tracking-tight border-2  border-green_color text-green_color rounded-md hover:bg-green_color_hover'
            >
              <span className='pr-2'>
                <BsFileEarmarkArrowDown size={20} />
              </span>
              Resume
            </a>
          </li>
        </ul>
        <div className='lg:hidden'>
          <button
            aria-label='Open Menu'
            title='Open Menu'
            className='p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50'
            onClick={() => setIsMenuOpen(true)}
          >
            <CgMenuRightAlt size={40} className='text-green_color' />
          </button>
          {isMenuOpen && (
            <div className='absolute top-0 left-0 w-full bg-light_white z-50'>
              <div className='p-5 bg-white border rounded shadow-sm'>
                <div className='float-right mb-4'>
                  <div>
                    <button
                      aria-label='Close Menu'
                      title='Close Menu'
                      className='p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
                        <path
                          fill='currentColor'
                          d='M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z'
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className='space-y-4 text-navy'>
                    <NavbarItem
                      text_id={"about"}
                      title='About'
                      onClick={() => setIsMenuOpen(false)}
                    />
                    <NavbarItem
                      text_id={"experience"}
                      title='Experience'
                      onClick={() => setIsMenuOpen(false)}
                    />
                    <NavbarItem
                      text_id={"projects"}
                      title='Projects'
                      onClick={() => setIsMenuOpen(false)}
                    />
                    <NavbarItem
                      text_id={"contact"}
                      title='Contact'
                      onClick={() => setIsMenuOpen(false)}
                    />
                    <li>
                      <a
                        href='#resume'
                        className='inline-flex items-center justify-center h-12 px-6 font-poppins tracking-tight border-2  border-navy_color text-navy_color rounded-md'
                      >
                        <span className='pr-2'>
                          <BsFileEarmarkArrowDown size={20} />
                        </span>
                        Resume
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
