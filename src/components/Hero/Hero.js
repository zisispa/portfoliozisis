import React from "react";
import { FiLinkedin, FiFacebook, FiGithub } from "react-icons/fi";

const Hero = () => {
  return (
    <section id='hero' className='py-20'>
      <div className='max-w-5xl mx-auto px-6 lg:px-0'>
        <h4 className='mb-3 text-light_green letter tracking-wide font-poppins'>
          Hi, my name is
        </h4>
        <h2 className='mb-3 text-2xl sm:text-6xl text-light_white font-poppins font-black'>
          Zisis Spatis.
        </h2>
        <h1 className='text-2xl sm:text-6xl text-gray_dark_light mb-8 font-poppins font-black'>
          I like to build things for the web and general.
        </h1>
        <div className='w-full sm:w-1/2 mb-5'>
          <p className='text-gray_dark_light leading-relaxed font-poppins'>
            I am an graduate student with an interest in web apps. Μy goal is to
            work as front-end or back-end developer in a company.
          </p>
        </div>
        <div className='flex items-center mb-10 space-x-4 sm:mt-0'>
          <a
            href='https://www.linkedin.com/in/zisis-spatis-1208b51b4/'
            rel='noreferrer'
            target='_blank'
            className='text-light_gray transition-colors duration-300 hover:text-light_green'
          >
            <FiLinkedin size={25} />
          </a>
          <a
            href='https://github.com/zisispa'
            rel='noreferrer'
            target='_blank'
            className='text-light_gray transition-colors duration-300 hover:text-light_green'
          >
            <FiGithub size={25} />
          </a>
          <a
            href='https://www.facebook.com/zisis.spatis/'
            rel='noreferrer'
            target='_blank'
            className='text-light_gray transition-colors duration-300 hover:text-light_green'
          >
            <FiFacebook size={25} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
