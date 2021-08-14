import React from "react";

const TitleSection = ({ title, description }) => {
  return (
    <div className='flex items-baseline mb-13'>
      <div className=''>
        <h2 className='max-w-lg mb-6 text-lg tracking-tight text-navy_color sm:leading-none bg-green_color rounded-md p-3 font-poppins font-black'>
          {title}
        </h2>
      </div>
      <div className='ml-5'>
        <p className='text-lg sm:text-xl text-white_color font-poppins font-black'>
          {description}
        </p>
      </div>
    </div>
  );
};

export default TitleSection;
