import React from "react";
//import icons
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquare } from "react-icons/bs";
//import Link
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav>
      <div className="container mx-auto">
        <div>
          <Link>
            <BiHomeAlt />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
