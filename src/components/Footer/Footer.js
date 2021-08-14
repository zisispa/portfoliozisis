import React from "react";
import { FiLinkedin, FiFacebook, FiGithub } from "react-icons/fi";

const Footer = () => {
  return (
    <section id='credits' className='pb-4'>
      <div className='max-w-5xl mx-auto px-6 lg:px-0'>
        <div className='flex flex-col justify-center pt-5 sm:flex-row sm:justify-between'>
          <div className='text-center'>
            <p className='text-md font-poppins leading-relaxed text-light_gray'>
              © Copyright 2020 Zisis Spatis
            </p>
          </div>
          <div className='flex justify-center items-center mt-4 space-x-4 sm:mt-0'>
            <a
              href='https://www.linkedin.com/in/zisis-spatis-1208b51b4/'
              target='_blank'
              rel='noreferrer'
              className='text-light_gray transition-colors duration-300 hover:text-light_green'
            >
              <FiLinkedin size={25} />
            </a>
            <a
              href='https://github.com/zisispa'
              target='_blank'
              rel='noreferrer'
              className='text-light_gray transition-colors duration-300 hover:text-light_green'
            >
              <FiGithub size={25} />
            </a>
            <a
              href='https://www.facebook.com/zisis.spatis/'
              target='_blank'
              rel='noreferrer'
              className='text-light_gray transition-colors duration-300 hover:text-light_green'
            >
              <FiFacebook size={25} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
