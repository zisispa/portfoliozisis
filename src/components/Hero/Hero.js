import React from "react";
import SocialMediaComponent from "../utils/SocialMediaComponent/SocialMediaComponent";

const Hero = () => {
  return (
    <section id='hero' className='py-24'>
      <div className='max-w-5xl mx-auto px-6 lg:px-0'>
        <h4 className='mb-3 text-green_color letter tracking-wide font-poppins animate__animated animate__fadeInLeft animate__delay-1s'>
          Hi, my name is
        </h4>
        <h2 className='mb-3 text-4xl sm:text-6xl text-white_color font-poppins font-black  animate__animated animate__fadeInLeft animate__delay-1s'>
          Zisis Spatis.
        </h2>
        <h1 className='text-2xl sm:text-6xl text-white_dark_color mb-8 font-poppins font-black animate__animated animate__fadeInUp animate__delay-1s'>
          I like to build things for the web and general.
        </h1>
        <div className='w-full sm:w-1/2 mb-5'>
          <p className='text-white_dark_color leading-relaxed font-poppins animate__animated animate__fadeInUp animate__delay-1s'>
            I am a graduate student with an interest in web apps. Μy goal is to
            work as front-end or back-end developer in a company.
          </p>
        </div>
        <div className='animate__animated animate__fadeInUp animate__delay-1s'>
          <SocialMediaComponent />
        </div>
      </div>
    </section>
  );
};

export default Hero;
