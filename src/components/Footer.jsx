import React from "react";
import IconGitHub from "../icons/IconGitHub";
import IconLinkedIn from "../icons/IconLinkedIn";

const Footer = () => {
  return (
    <footer className="shadow-md bg-header-txt  w-full">
      <div className="max-w-[1000px] mx-auto flex flex-col tb900:flex-row justify-between items-center  py-6 gap-[2rem] text-xl-dk ">

        <div className="font-Rubik font-bold text-white">
          <span>marv-dev</span>
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

          <div>
            <span className="text-[.75rem] text-white"> © 2024</span>
          </div>
       
      </div>
    </footer>
  );
};

export default Footer;
