import React from "react";
import TitleSection from "../utils/TitleSection/TitleSection";
import Fade from "react-reveal/Fade";

const Contact = () => {
  return (
    <section name='contact' className='py-24'>
      <Fade bottom>
        <div className='max-w-5xl mx-auto px-6 lg:px-0'>
          <div className='flex justify-center'>
            <TitleSection title={"Contact"} />
          </div>
          <div className='mb-8 text-center'>
            <h3 className='text-5xl font-poppins text-white_color font-extrabold'>
              Get In Touch
            </h3>
          </div>
          <div className='flex justify-center mb-10'>
            <div className='w-full sm:w-2/3 text-center'>
              <p className='text-white_dark_color font-poppins leading-relaxed'>
                If you like my projects and you want to collaborate with me, I
                will be glad to hear your proposals.
              </p>
            </div>
          </div>
          <div className='text-center'>
            <a
              href='mailto:zisispatis@gmail.com'
              className='inline-block px-6 py-4 tracking-wide border border-green_color text-green_color rounded hover:bg-green_color_hover font-poppins'
            >
              Say Hello
            </a>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default Contact;
