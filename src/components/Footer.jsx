import React from "react";
import IconGitHub from "../icons/IconGitHub";
import IconLinkedIn from "../icons/IconLinkedIn";

const Footer = () => {
  return (
    <footer className="shadow-md bg-header-txt  w-full">
      <div className="page-width flex justify-around items-center px-4 py-6 text-xl-dk">

        <div className="font-Rubik font-bold text-white">
          <span>Marv.Dev</span>
        </div>
        <div>
          <span className="text-[.75rem] text-white">Copyright © 2024.Marv.Dev</span>
        </div>
      
          <ul className="flex gap-6 font-Rubik">
            <li className="text-white hover:text-babyblue">
              <a href="https://github.com/DavidIrvine-TW" target="_blank">
                <IconGitHub />
              </a>
            </li>
            <li className="text-white  hover:text-babyblue">
              <a
                href="https://www.linkedin.com/in/david-irvine-b367b6248/"
                target="_blank"
              >
                <IconLinkedIn />
              </a>
            </li>
          </ul>
       
      </div>
    </footer>
  );
};

export default Footer;
