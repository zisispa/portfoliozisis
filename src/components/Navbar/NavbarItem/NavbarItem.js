import React from "react";

const NavbarItem = ({ title, text_id }) => {
  return (
    <li>
      <a href={`#${text_id}`} className='hover:text-light_green font-poppins'>
        {title}
      </a>
    </li>
  );
};

export default NavbarItem;
