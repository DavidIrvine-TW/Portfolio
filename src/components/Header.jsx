import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

function Header() {
  return (
    <header className="shadow-md bg-white  w-full fixed top-0 left-0 z-[1000]">
      <div className="page-width flex justify-between items-center px-4 py-6 text-header-txt text-xl-dk">
        <div className="font-Rubik font-bold">
          <h1>Marv.Dev</h1>
        </div>
        <nav>
          <ul className="flex gap-6 font-Rubik">
            <li className="menu-item">
              <Link 
               activeClass="active"
               to="home"
               spy={true}
               smooth={true}
               offset={0}
               duration={400}
               >
                Home</Link>
            </li>
            <li className="menu-item">
              <Link
                activeClass="active"
                to="portfolio"
                spy={true}
                smooth={true}
                offset={-120}
                duration={400}
              >
                Projects
              </Link>
            </li>
            <li className="menu-item">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-120}
                duration={400}
              >
                About
              </Link>
            </li>
            <li className="menu-item">
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-120}
                duration={400}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
