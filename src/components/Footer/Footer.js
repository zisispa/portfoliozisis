import React from "react";
import SocialMediaComponent from "../utils/SocialMediaComponent/SocialMediaComponent";

const Footer = () => {
  return (
    <section id='credits' className='pb-4'>
      <div className='max-w-5xl mx-auto px-6 lg:px-0'>
        <div className='flex flex-col justify-center pt-5 sm:flex-row sm:justify-between'>
          <div className='text-center'>
            <p className='text-md font-poppins leading-relaxed text-white_light_color'>
              © Copyright 2020 Zisis Spatis
            </p>
          </div>
          <SocialMediaComponent />
        </div>
      </div>
    </section>
  );
};

export default Footer;
