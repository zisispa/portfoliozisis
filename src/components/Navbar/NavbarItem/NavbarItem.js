import React from "react";

const NavbarItem = ({ title, text_id }) => {
  return (
    <li>
      <a href={`#${text_id}`} className='hover:text-green_color font-poppins'>
        {title}
      </a>
    </li>
  );
};

export default NavbarItem;
