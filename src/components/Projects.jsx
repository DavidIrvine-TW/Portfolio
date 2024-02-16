import React from "react";
import trailerview from "../assets/trailerview.jpg";
import trailerviewOne from "../assets/trailerviewOne.jpg";
import trailerviewTwo from "../assets/trailerviewTwo.jpg";
import trailerviewThree from "../assets/trailerviewThree.jpg"
import kanban from "../assets/kanban.jpg";
import kanbanDark from "../assets/kanban-dark.png";
import vapestore from "../assets/vapestore.jpg";
import vapesterAbout from "../assets/vapesterAbout.jpg"
import vapesterContact from "../assets/vapesterContact.jpg"
import vapesterCollection from "../assets/vapesterCollection.jpg"
import vapesterProduct from "../assets/vapesterProduct.jpg"
import vapesterCart from "../assets/vapesterCart.jpg"
import shopify from "../assets/icon-shopify.svg";
import iconLink from "../assets/icon-link.svg";
import Iconghub from "../icons/Iconghub";
import Briefcase from "../assets/briefcase.png";
import OnlineShopping from "../assets/online-shopping.png";
import Task from "../assets/task.png";
import Video from "../assets/video.png";

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
    <section id="portfolio" className="page-width min-h-screen px-[1.75rem] ">

      <div className="max-w-[1000px] mx-auto">

        <div className="mb-[3rem] flex flex-col gap-[1rem]">
          <h3 className="section-heading flex items-center justify-center tb900:justify-start gap-[1rem]">
            PORTFOLIO
            <img
              src={Briefcase}
              alt="briefcase icon"
              className="w-[30px] h-[30px]"
            />
          </h3>
          <h4 className="section-subheading text-center tb900:text-left">
            Featured projects
          </h4>
        </div>

        {/* vapestore */}
        <div className="project-container mb-[4rem]">
          <div className="swiper-container border-1">
            <Swiper
              className="w-full h-full "
              pagination={
                {
                  // type: "fraction",
                }
              }
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
                  src={vapesterAbout}
                  alt="porfolio image"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="object-cover cursor-grab"
                  src={vapesterCollection}
                  alt="porfolio image"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="object-cover cursor-grab"
                  src={vapesterProduct}
                  alt="porfolio image"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="object-cover cursor-grab"
                  src={vapesterContact}
                  alt="porfolio image"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="object-cover cursor-grab"
                  src={vapesterCart}
                  alt="porfolio image"
                />
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="project-info-container">
            <h4 className="project-title flex items-center justify-center tb900:justify-start gap-[1rem] ">
              {vapesterData.name}{" "}
              <img
                src={OnlineShopping}
                alt="shopping icon"
                className="w-[30px] h-[30px]"
              />
            </h4>

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
              <p className="flex items-center justify-center tb900:justify-start gap-[.5rem] text-gray-500 text-[.8rem]">
                *Password:
                <span
                  className="cursor-pointer border hover:border-header-txt rounded px-[.5rem] hover:bg-slate-200 text-header-txt font-bold"
                  onClick={() => copyToClipboard("eamaos")}
                >
                  COPY TO CLIPBOARD
                </span>
              </p>

              <div className="flex items-center justify-center tb900:justify-start gap-[1rem] mt-[2rem]">
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
                  Live
                  <img src={iconLink} alt="icon link" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Kanban */}
        <div className="project-container-kanban mb-[4rem]">
          <div className="swiper-container-kanban ">
            <Swiper
              className="kanbanSwiper w-full h-full border-1"
              pagination={
                {
                  // type: "fraction",
                }
              }
              modules={[Navigation, Pagination]}
              spaceBetween={16}
              navigation={false}
              slidesPerView={1}
            >
              <SwiperSlide>
                <img
                  className="object-cover cursor-grab"
                  src={kanban}
                  alt="porfolio image"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="object-cover cursor-grab"
                  src={kanbanDark}
                  alt="porfolio image"
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="project-info-container ">
            <p className="project-title flex items-center justify-center tb900:justify-start gap-[1rem]">
              {kanbanData.name}
              <img src={Task} alt="task icon" className="w-[30px] h-[30px]" />
            </p>

            <p className="project-details">{kanbanData.blurb}</p>

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
              <div className="flex items-center justify-center tb900:justify-start gap-[1rem] mt-[1.5rem]">
                <a
                  href={kanbanData.github}
                  target="_blank"
                  className="btn-secondary"
                >
                  Code <Iconghub />{" "}
                </a>

                <a
                  className="btn-secondary "
                  href={kanbanData.livelink}
                  target="_blank"
                >
                  Live
                  <img src={iconLink} alt="icon link" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* trailerview */}

        <div className="project-container">
        <div className="swiper-container border-1">
            <Swiper
              className="w-full h-full "
              pagination={
                {
                  // type: "fraction",
                }
              }
              modules={[Navigation, Pagination]}
              spaceBetween={16}
              navigation={false}
              slidesPerView={1}
            >
              <SwiperSlide className="h-auto w-full">
                <img
                  className="object-cover cursor-grab"
                  src={trailerview}
                  alt="porfolio image"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="object-cover cursor-grab"
                  src={trailerviewThree}
                  alt="porfolio image"
                />
              </SwiperSlide>
            </Swiper>
          </div>

          <div className=" project-info-container ">
            <p className="project-title items-center justify-center tb900:justify-start gap-[1rem] flex">
              {trailerviewData.name}{" "}
              <img src={Video} alt="video icon" className="w-[30px] h-[30px]" />
            </p>

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
              {trailerviewData.tags.map((tag, index) => {
                return (
                  <span className="tag" key={index}>
                    {tag}
                  </span>
                );
              })}
            </div>

            <div className="project-links-container">
              <div className="flex items-center justify-center tb900:justify-start gap-[1rem] mt-[1.5rem]">
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
                  Live
                  <img src={iconLink} alt="icon link" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100px] h-[3px] bg-slate-200 my-[4rem] mx-auto"></div>
    </section>
  );
};

export default Projects;
