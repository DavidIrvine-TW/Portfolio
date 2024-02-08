import React from "react";
import IconGitHub from "../icons/IconGitHub";
import IconLinkedIn from "../icons/IconLinkedIn";
import HeroImgGray from "../assets/HeroImgGray.jpg";
import HeroSkillsData from "../assets/heroSkillsData.json";
import portfolioHeroImageGray from "../assets/portfolioHeroImageGray.jpg";
import waving from "../assets/waving.png";
import { Link, animateScroll as scroll } from "react-scroll";

function Hero() {
  return (
    <section
      id="home"
      className=" z-[-1] h-screen w-full page-width flex justify-center items-center "
    >
      <div className="max-w-[80%] mt-[2rem]">
        <div className="flex gap-[6rem] justify-center items-center w-full ">
          <div className=" flex flex-col max-w-[500px]">
            <h2 className="font-Rubik font-bold text-title-dk flex flex-col text-header-txt my-[1.5rem] relative">
              Front-End React Developer{" "}
              <img
                className="w-[60px] h-auto absolute bottom-0 right-[23%]"
                src={waving}
                alt="waving hand"
              />
            </h2>

            <p className="body-text font-Mulish text-body-dk text-gray-500">
              Hi, I'm David Irvine. I'm a Web Developer based in the UK.
            </p>
            <p className="font-Mulish text-body-dk text-gray-500 mt-[.5rem]">
              I can help you build it.
            </p>
            <Link
              className="btn-primary "
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-120}
              duration={400}
            >
              Connect
            </Link>
            <div className="icon-link mt-[1rem] flex gap-4 cursor-pointer">
              <a href="https://github.com/DavidIrvine-TW" target="_blank">
                <IconGitHub />
              </a>

              <a
                href="https://www.linkedin.com/in/david-irvine-b367b6248/"
                target="_blank"
              >
                <IconLinkedIn />
              </a>
            </div>
          </div>

          <div className="hero-img max-w-[350px] h-[350px] overflow-hidden relative">
            <img src={HeroImgGray} alt="profile image" />
            {/* <div className="hero-img-overlay"></div> */}
          </div>
        </div>
        <div className="flex items-center h-[60px] mt-[4rem] ">
          <p className="font-Mulish font-bold border-r-2 border-current pr-[2rem] mr-[2rem] ">
            Tech Stack
          </p>
          <ul className="skill-icon-list flex gap-3">
            {HeroSkillsData.skills.map((skill, index) => (
              <li key={index} className="skill-icon-item relative">
                <img
                  src={`https://skillicons.dev/icons?i=${skill}`}
                  alt="skills-icons"
                />
                <div className="tooltip">{skill}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Hero;
