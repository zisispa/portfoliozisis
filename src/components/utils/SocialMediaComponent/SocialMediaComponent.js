import React from "react";
import { FiLinkedin, FiFacebook, FiGithub } from "react-icons/fi";

const SocialMediaComponent = () => {
  return (
    <div className='flex items-center mb-5 space-x-4 sm:mt-0'>
      <a
        href='https://www.linkedin.com/in/zisis-spatis-1208b51b4/'
        rel='noreferrer'
        target='_blank'
        className='text-white_light_color transition-colors duration-300 hover:text-green_color'
      >
        <FiLinkedin size={25} />
      </a>
      <a
        href='https://github.com/zisispa'
        rel='noreferrer'
        target='_blank'
        className='text-white_light_color transition-colors duration-300 hover:text-green_color'
      >
        <FiGithub size={25} />
      </a>
      <a
        href='https://www.facebook.com/zisis.spatis/'
        rel='noreferrer'
        target='_blank'
        className='text-white_light_color transition-colors duration-300 hover:text-green_color'
      >
        <FiFacebook size={25} />
      </a>
    </div>
  );
};

export default SocialMediaComponent;
