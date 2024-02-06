import React from "react";
import IconGitHub from "../icons/IconGitHub";
import IconLinkedIn from "../icons/IconLinkedIn";
import HeroImgGray from "../assets/HeroImgGray.jpg";
import portfolioHeroImageGray from '../assets/portfolioHeroImageGray.jpg'
import waving from '../assets/waving.png'


function Hero() {
  return (
  
      <section className=" z-[-1] h-screen w-full page-width flex justify-center pt-[6rem] ">
     
        <div className="max-w-[1000px] ">
          <div className="flex gap-[6rem] justify-center items-center w-full ">
            <div className=" flex flex-col max-w-[500px]">
              <h2 className="font-Rubik font-bold text-title-dk flex flex-col text-header-txt my-[1.5rem] relative">
                Front-End React Developer  <img className="w-[60px] h-auto absolute bottom-0 right-[23%]" src={waving} alt="waving hand"/>
              </h2> 
              
              <p className="font-Mulish text-body-dk text-gray-500">
                Hi, I'm David Irvine. I'm a Web Developer based in the UK.
              </p>
              <p className="font-Mulish text-body-dk text-gray-500 mt-[.5rem]">
                I can help you build it.
              </p>
              <div className="icon-link mt-[2rem] flex gap-4 cursor-pointer">
                <a href="#">
                  <IconGitHub />
                </a>

                <a href="#">
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
            <p className="font-Mulish font-bold border-r-2 border-current pr-[3rem] mr-[2rem] ">
              Tech Stack
            </p>
            <ul className="skill-icon-list flex gap-3">
              <li className="skill-icon-item relative">
                <img
                  src="https://skillicons.dev/icons?i=html"
                  alt="skills-icons"
                />
                <div class="tooltip">HTML</div>
              </li>
              <li className="skill-icon-item relative">
                <img
                  src="https://skillicons.dev/icons?i=css"
                  alt="skills-icons"
                />
                <div class="tooltip">CSS</div>
              </li>
              <li className="skill-icon-item">
                <img
                  src="https://skillicons.dev/icons?i=js"
                  alt="skills-icons"
                />
                <div class="tooltip">Javascript</div>
              </li>
              <li className="skill-icon-item">
                <img
                  src="https://skillicons.dev/icons?i=react"
                  alt="skills-icons"
                />
                <div class="tooltip">React</div>
              </li>
              <li className="skill-icon-item">
                <img
                  src="https://skillicons.dev/icons?i=nextjs"
                  alt="skills-icons"
                />
                <div class="tooltip">NextJS</div>
              </li>
              <li className="skill-icon-item">
                <img
                  src="https://skillicons.dev/icons?i=tailwind"
                  alt="skills-icons"
                />
                 <div class="tooltip">Tailwind</div>
              </li>
              <li className="skill-icon-item">
                <img
                  src="https://skillicons.dev/icons?i=sass"
                  alt="skills-icons"
                />
                 <div class="tooltip">Sass</div>
              </li>
              <li className="skill-icon-item">
                <img
                  src="https://skillicons.dev/icons?i=mongodb"
                  alt="skills-icons"
                />
                 <div class="tooltip">MongoDB</div>
              </li>
              <li className="skill-icon-item">
                <img
                  src="https://skillicons.dev/icons?i=firebase"
                  alt="skills-icons"
                />
                 <div class="tooltip">Firebase</div>
              </li>
              <li className="skill-icon-item">
                <img
                  src="https://skillicons.dev/icons?i=git"
                  alt="skills-icons"
                />
                 <div class="tooltip">Git</div>
              </li>
              <li className="skill-icon-item">
                <img
                  src="https://skillicons.dev/icons?i=github"
                  alt="skills-icons"
                />
                 <div class="tooltip">GitHub</div>
              </li>
             
              <li className="skill-icon-item">
                <img
                  src="https://skillicons.dev/icons?i=figma"
                  alt="skills-icons"
                />
                <div class="tooltip">Figma</div>
              </li>
            </ul>
          </div>
        </div>
      </section>
   
  );
}

export default Hero;
