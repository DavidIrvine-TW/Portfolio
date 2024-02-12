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
      className=" page-width py-[7rem] tb900:py-[9rem] px-[1.75rem] bg-bgOffWhite "
    >
      <div className="flex flex-col-reverse tb900:flex-row items-center justify-center gap-[2rem] tb900:gap-[6rem] w-full max-w-[1000px] mx-auto ">
        <div className=" flex flex-col max-w-[500px] tb900:w-[50%] relative ">
          <h2 className="text-center tb900:text-left text-mob-title font-Rubik font-bold tb500:text-title-dk flex flex-col text-header-txt my-[1.25rem] relative">
            Front-End React Developer
            <img
              className="hidden tb900:block w-[45px] tb500:w-[60px] h-auto absolute bottom-0 right-[0%] tb900:right-[10%] "
              src={waving}
              alt="waving hand"
            />
          </h2>
          <img
              className="mx-auto tb900:hidden w-[45px] h-auto tb500:w-[60px] mb-[1.25rem]"
              src={waving}
              alt="waving hand"
            />

          <p className="text-center tb900:text-left body-text font-Mulish text-body-dk text-gray-500">
            Hi, I'm David Irvine. I'm a Web Developer based in the UK.
          </p>
          <p className="text-center tb900:text-left font-bold font-Mulish text-body-dk text-gray-500 mt-[1rem]">
            I can help you build it.
          </p>
          <Link
            className="btn-primary mx-auto tb900:mx-0 my-[2rem] "
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-40}
            duration={400}
          >
            Connect
          </Link>
          
          <div className="icon-link flex gap-4 cursor-pointer mx-auto tb900:mx-0">
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

        <div className="tb900:max-w-[50%]">
          <div className="hero-img w-[280px] h-[280px] tb500:w-[350px] tb500:h-[350px] overflow-hidden relative">
            <img src={HeroImgGray} alt="profile image" />
            {/* <div className="hero-img-overlay"></div> */}
          </div>
        </div>
      </div>

      <div className="flex flex-col tb900:flex-row tb900:max-w-[950px] tb900:mx-auto items-center justify-center mt-[4rem]">
        <p className="font-Mulish font-bold border-b-2 tb900:border-b-0 tb900:border-r-2 tb900:pr-[3rem] tb900:mr-[3rem] items-center text-center tb900:text-left border-current tb900:pb-0 pb-[1rem] ">
          Tech Stack
        </p>
        <ul className="skill-icon-list grid grid-cols-4 gap-x-4 gap-y-11 tb900:flex mt-[3rem] tb900:mt-0 mx-auto  ">
          {HeroSkillsData.skills.map((skill, index) => (
            <li key={index} className="skill-icon-item relative flex-grow ">
              <img
                src={`https://skillicons.dev/icons?i=${skill}`}
                alt="skills-icons"
              />
              <div className="tooltip">{skill}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Hero;
