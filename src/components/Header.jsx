import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

function Header({menu, setMenu}) {
  


  const isOpen = menu ? "cross" : "";
  const menuClass = menu ? "left-0 opacity-100" : "-left-full opacity-0"

  const menuHandler = () => {
    setMenu(prev => !prev)

  }


  return (
    <header className="shadow-md bg-white w-full min-w-[375px] fixed top-0 left-0 z-[1000]">
      <div className="page-width flex justify-between items-center px-7 py-6 text-header-txt text-xl-dk">
        <div className="font-Rubik font-bold">
          <h1>marv-dev</h1>
        </div>

        <nav>
          <ul className="hidden tb900:inline-flex gap-6 font-Rubik">
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
                offset={-150}
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
                offset={-10}
                duration={400}
              >
                Contact
              </Link>
            </li>
          </ul>

          <div class={` tb900:hidden hamburger-menu ${isOpen}`} onClick={menuHandler}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* <div id="mob-menu-overlay" className="absolute top-0 bottom-0 left-0 right-0 bg-red-500 z-[-10]"></div> */}
          
          <ul className={`border-2 absolute top-[78px] transition duration-300 ${menuClass} tb900:hidden text-center flex flex-col gap-[2rem] items-center pt-[3rem] w-full h-screen bg-bgOffWhite z-[1000]`}>
           
            <li className="mobile-menu-item cursor-pointer">
                <Link 
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={0}
                duration={400}
                onClick={menuHandler}
                >
                  Home</Link>
              </li>
              <li className="mobile-menu-item cursor-pointer">
                <Link
                  activeClass="active"
                  to="portfolio"
                  spy={true}
                  smooth={true}
                  offset={-120}
                  duration={400}
                  onClick={menuHandler}
                >
                  Projects
                </Link>
              </li>
              <li className="mobile-menu-item cursor-pointer">
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-20}
                  duration={400}
                  onClick={menuHandler}
                >
                  About
                </Link>
              </li>
              <li className="mobile-menu-item cursor-pointer">
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={400}
                  onClick={menuHandler}
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
