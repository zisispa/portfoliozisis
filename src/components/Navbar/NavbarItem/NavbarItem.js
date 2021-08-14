import React from "react";
import { Link } from "react-scroll";

const NavbarItem = ({ title, text_id, onClick }) => {
  return (
    <li>
      <Link
        to={text_id}
        className='hover:text-green_color font-poppins cursor-pointer'
        onClick={onClick}
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
        {title}
      </Link>
    </li>
  );
};

export default NavbarItem;
