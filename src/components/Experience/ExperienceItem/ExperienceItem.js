import React from "react";
import { FiChevronRight } from "react-icons/fi";

const ExperienceItem = ({ title, subtitle, description, svg, details }) => {
  return (
    <div>
      <div className='flex items-center justify-center w-16 h-16 mb-4 mt-5 rounded-full bg-indigo-50'>
        {svg}
      </div>
      <h6 className='mb-2 font-poppins leading-relaxed text-white_color'>
        {title}
      </h6>
      <p className='mb-3 text-sm font-poppins leading-relaxed text-white_light_color'>
        {subtitle}
      </p>
      <p className='mb-3 max-w-sm text-sm font-poppins leading-relaxed text-white_dark_color'>
        {description}
      </p>
      <ul className='mb-4 -ml-1 space-y-2'>
        {details !== null
          ? details.map((detail, index) => {
              return (
                <li
                  key={index}
                  className='flex items-center text-white_dark_color font-poppins'
                >
                  <span className='mr-1'>
                    <FiChevronRight color={"#64ffda"} />
                  </span>
                  {detail.name}
                </li>
              );
            })
          : "Loading!"}
      </ul>
    </div>
  );
};

export default ExperienceItem;
