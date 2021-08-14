import React from "react";
import { FiChevronRight } from "react-icons/fi";

const SkillsItem = ({ text }) => {
  return (
    <li className='flex items-center font-poppins leading-relaxed'>
      <span className='mr-1'>
        <FiChevronRight className='w-4 h-4' color={"#64ffda"} />
      </span>
      {text}
    </li>
  );
};

export default SkillsItem;
