import React from "react";
import TitleSection from "../utils/TitleSection/TitleSection";

const Contact = () => {
  return (
    <section id='contact' className='py-24'>
      <div className='max-w-5xl mx-auto px-6 lg:px-0'>
        <div className='flex justify-center'>
          <TitleSection title={"Contact"} />
        </div>
        <div class='mb-8 text-center'>
          <h3 class='text-5xl font-poppins text-white_color font-extrabold'>
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
    </section>
  );
};

export default Contact;
