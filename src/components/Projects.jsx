import React from "react";
import trailerview from "../assets/trailerview.jpg";
import kanban from "../assets/kanban.jpg";
import vapestore from "../assets/vapestore.jpg";
import shopify from "../assets/icon-shopify.svg";
import iconLink from "../assets/icon-link.svg";
import IconGitHub from "../icons/IconGitHub";
import Iconghub from "../icons/Iconghub";
import Briefcase from '../assets/briefcase.png'
import OnlineShopping from '../assets/online-shopping.png'
import Task from '../assets/task.png'
import Video from '../assets/video.png'

import vapesterData from "../assets/vapester.json";
import kanbanData from "../assets/kanban.json";
import trailerviewData from "../assets/trailerview.json";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const copyToClipboard = (text) => {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert("Password copied to clipboard: ", text);
    })
    .catch((error) => {
      console.error("Failed to copy text:", error);
    });
};

const Projects = () => {
  return (
    <section id="portfolio" className="page-width pb-[5rem] flex">
      <div className="max-w-[80%] mx-auto ">
        <div className="mb-[3rem]">
          <h3 className="section-heading flex gap-[1rem]">PORTFOLIO <img src={Briefcase} alt="briefcase icon" className="w-[30px] h-[30px]"/></h3>
          <h4 className="section-subheading">
            Each project is a unique piece of development
          </h4>
        </div>

        {/* vapestore */}
        <div className="project-container">
          <div className="swiper-container border-2">
            <Swiper
              className="vapeSwiper w-full h-full"
              pagination={{
                // type: "fraction",
              }}
              modules={[Navigation, Pagination]}
              spaceBetween={16}
              navigation={false}
              slidesPerView={1}
            >
              <SwiperSlide>
                <img
                  className="object-cover cursor-grab"
                  src={vapestore}
                  alt="porfolio image"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="object-cover cursor-grab"
                  src={vapestore}
                  alt="porfolio image"
                />
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="project-info-container">
            <h4 className="project-title flex items-center gap-[1rem]">{vapesterData.name} <img src={OnlineShopping} alt="shopping icon" className="w-[30px] h-[30px]"/></h4>

            <p className="project-details">{vapesterData.blurb}</p>

            <div className="project-tech-container  ">
              {vapesterData.tech.map((tech, index) => {
                return (
                  <img
                    className="project-skills-img"
                    key={index}
                    src={`https://skillicons.dev/icons?i=${tech}`}
                    alt={tech}
                  />
                );
              })}
              <img src={shopify} alt="Shopify" />
            </div>

            <div className="project-tags">
              {vapesterData.tags.map((tag, index) => {
                return (
                  <span className="tag" key={index}>
                    {tag}
                  </span>
                );
              })}
            </div>

            <div className="project-links-container mt-[1.5rem]">
              <p className="flex gap-[.5rem] text-gray-500 text-[.8rem]">
                *Password:
                <span
                  className="cursor-pointer border hover:border-header-txt rounded px-[.5rem] hover:bg-slate-200 text-header-txt font-bold"
                  onClick={() => copyToClipboard("eamaos")}
                >
                  COPY TO CLIPBOARD
                </span>
              </p>

              <div className="flex gap-[1rem] mt-[1.5rem]">
                <a
                  href={vapesterData.github}
                  target="_blank"
                  className="btn-secondary "
                >
                  Code <Iconghub />{" "}
                </a>

                <a
                  className="btn-secondary "
                  href={vapesterData.livelink}
                  target="_blank"
                >
                  Live Demo
                  <img src={iconLink} alt="icon link" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Kanban */}
        <div className="project-container">
          <div className="project-info-container ">
            <p className="project-title flex items-center gap-[1rem]">{kanbanData.name} <img src={Task} alt="task icon" className="w-[30px] h-[30px]"/></p>

            <p className="project-details">{kanbanData.blurb}</p>
            <p className="project-details-features">{kanbanData.features}</p>

            <div className="project-tech-container">
              {kanbanData.tech.map((tech, index) => {
                return (
                  <img
                    className="project-skills-img"
                    key={index}
                    src={`https://skillicons.dev/icons?i=${tech}`}
                    alt={tech}
                  />
                );
              })}
            </div>

            <div className="project-tags">
              {kanbanData.tags.map((tag, index) => {
                return (
                  <span className="tag" key={index}>
                    {tag}
                  </span>
                );
              })}
            </div>

            <div className="project-links-container">
              <div className="flex gap-[1rem] mt-[1.5rem]">
                <a
                  href={kanbanData.github}
                  target="_blank"
                  className="btn-secondary "
                >
                  Code <Iconghub />{" "}
                </a>

                <a
                  className="btn-secondary "
                  href={kanbanData.livelink}
                  target="_blank"
                >
                  Live Demo
                  <img src={iconLink} alt="icon link" />
                </a>
              </div>
            </div>
          </div>

          <div className="swiper-container ">
            <Swiper
              className="kanbanSwiper w-full h-full border-2"
              pagination={{
                // type: "fraction",
              }}
              modules={[Navigation, Pagination]}
              spaceBetween={16}
              navigation={false}
              slidesPerView={1}
            >
              <SwiperSlide>
                <img
                  className="object-cover "
                  src={kanban}
                  alt="porfolio image"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="object-cover "
                  src={kanban}
                  alt="porfolio image"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        {/* <hr className="my-[2rem]"></hr> */}

        {/* trailerview */}

        <div className="project-container">
          <div className="swiper-container border-2 shadow-md">
            <img
              className="object-cover "
              src={trailerview}
              alt="porfolio image"
            />
          </div>

          <div className="w-[50%] relative ">
            <p className="project-title items-center gap-[1rem] flex">{trailerviewData.name} <img src={Video} alt="video icon" className="w-[30px] h-[30px]"/></p>

            <p className="project-details">{trailerviewData.blurb}</p>

            <div className="project-tech-container">
              {trailerviewData.tech.map((tech, index) => {
                return (
                  <img
                    className="project-skills-img"
                    key={index}
                    src={`https://skillicons.dev/icons?i=${tech}`}
                    alt={tech}
                  />
                );
              })}
            </div>

            <div className="project-tags">
              {/* <p className="project-details-label">Tags:</p>  */}
              {trailerviewData.tags.map((tag, index) => {
                return (
                  <span className="tag" key={index}>
                    {tag}
                  </span>
                );
              })}
            </div>

            <div className="project-links-container">
              <div className="flex gap-[1rem] mt-[1.5rem]">
                <a
                  href={trailerviewData.github}
                  target="_blank"
                  className="btn-secondary "
                >
                  Code <Iconghub />{" "}
                </a>

                <a
                  className="btn-secondary "
                  href={trailerviewData.livelink}
                  target="_blank"
                >
                  Live Demo
                  <img src={iconLink} alt="icon link" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
