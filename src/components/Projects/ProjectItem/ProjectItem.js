import React from "react";
import { FiGithub, FiLink } from "react-icons/fi";

const ProjectItem = ({
  title,
  description,
  tech,
  git_link,
  source_link,
  image,
}) => {
  return (
    <div>
      <div className='relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl'>
        <img
          className='object-cover w-full h-56 md:h-64 xl:h-80'
          src={image}
          alt={image}
        />
        <div className='absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-gray-900 bg-opacity-75 opacity-0 hover:opacity-100'>
          <p className='mb-1 text-xl font-poppins font-black text-white_color'>
            {title}
          </p>
          <p className='mb-2 text-white_color font-poppins leading-relaxed'>
            {description}
          </p>
          <p className='mb-5 font-poppins leading-relaxed text-white_color'>
            {tech}
          </p>
          <div className='flex items-center justify-center space-x-3'>
            <a
              href={git_link}
              target='_blank'
              rel='noreferrer'
              className='text-white_color transition-colors duration-300 hover:text-green_color'
            >
              <FiGithub size={25} />
            </a>
            <a
              href={source_link}
              target='_blank'
              rel='noreferrer'
              className='text-white_color transition-colors duration-300 hover:text-green_color'
            >
              <FiLink size={25} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
