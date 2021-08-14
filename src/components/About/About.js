import React from "react";
import image from "../../assets/images/hero-image.JPG";
import TitleSection from "../utils/TitleSection/TitleSection";
import SkillsItem from "./SkillsItem/SkillsItem";

import Fade from "react-reveal/Fade";

const About = () => {
  const birthDate = new Date();
  const age = birthDate.getFullYear() - 1997;

  return (
    <section name='about' className='py-24'>
      <Fade bottom>
        <div className='max-w-5xl mx-auto px-6 lg:px-0'>
          <TitleSection title={"About Me"} />
          <div className='grid gap-5 row-gap-10 lg:grid-cols-2'>
            <div className='flex flex-col justify-center'>
              <div className='max-w-xl mb-6'>
                <p className='text-white_dark_color sm:text-lg font-poppins leading-relaxed'>
                  Hello! I am {age} years old and I live in Kalamaria,
                  Thessaloniki. In 2016 I took an exam and I went to Department
                  of Computer Engineering and Electronic Systems. From the
                  school, the courses that have attracted my interest so far are
                  the course Languages and Web Technologies and the Development
                  of Internet Systems and Applications.
                </p>
              </div>
              <p className='mb-4 text-sm sm:text-lg text-white_color leading-relaxed font-poppins uppercase'>
                SKILLS
              </p>
              <div className='grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0 text-white_dark_color'>
                <ul className='space-y-3'>
                  <SkillsItem text={"HTML-CSS"} />
                  <SkillsItem text={"JavaScript"} />
                  <SkillsItem text={"PHP, MySQL, Laravel"} />
                </ul>
                <ul className='space-y-3'>
                  <SkillsItem text={"Vue, React"} />
                  <SkillsItem text={"GIT"} />
                  <SkillsItem text={"Node, Express"} />
                </ul>
              </div>
            </div>
            <div>
              <img
                className='object-cover w-full h-56 rounded shadow-lg sm:h-96'
                src={image}
                alt=''
              />
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default About;
