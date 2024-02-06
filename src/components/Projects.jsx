import React from "react";
import trailerview from "../assets/trailerview.jpg";
import kanban from "../assets/kanban.png";
import vapestore from "../assets/vapestore.jpg";
import shopify from "../assets/icon-shopify.svg";
import iconLink from "../assets/icon-link.svg";
import IconGitHub from "../icons/IconGitHub";

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
    <section className="page-width py-[10rem] flex">
      <div className="max-w-[1000px] mx-auto ">
        <div className="mb-[3rem]">
          <h3 className="font-bold text-babyblue font-Mulish mb-[1rem] text-[1.25rem]">
            PORTFOLIO
          </h3>
          <h4 className="font-Rubik font-bold text-header-txt mb-[1.25rem] text-about-heading-dk ">
            Each project is a unique piece of development
          </h4>
        </div>

        {/* vapestore */}
        <div className="project-container">
          <div className="project-swiper w-[50%] max-h-[400px] relative border overflow-hidden rounded object-cover ">
            <Swiper
              className="vapeSwiper w-full h-full"
              pagination={{
                type: "fraction",
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

          <div className="project-info-container ">
            <p className="project-title text-center">Vapester</p>

            <p className="project-details">
              A from scratch custom Shopify 2.0 storefront. The Vapester store
              template has complete end to end functionality and includes,
              product search, filtering, cart and checkout.
            </p>

            <div className="project-tech flex gap-[1rem] items-center">
              <span className="project-details-label">Tech used:</span>
              <img
                src="https://skillicons.dev/icons?i=html"
                alt="skills-icons"
              />
              <img
                src="https://skillicons.dev/icons?i=css"
                alt="skills-icons"
              />
              <img src="https://skillicons.dev/icons?i=js" alt="skills-icons" />
              <img src={shopify} />
            </div>

            <div className="project-tags">
              <p className="project-details-label">Features</p>
              <span className="project-type">#e-commerce</span>
              <span className="project-type">#store</span>
              <span className="project-type">#template</span>
              <span className="project-type">#filter</span>
              <span className="project-type">#filter</span>
            </div>

            <div className="project-links">
              <button className="flex">
                Code
                <span>
                  <IconGitHub />
                </span>
              </button>
              <span>Store password:</span>{" "}
              <span
                className="cursor-pointer"
                onClick={() => copyToClipboard("eamaos")}
              >
                eamaos
              </span>
              <a
                className="flex items-center gap-[.25rem]"
                href="https://marvdev-newstore.myshopify.com/"
                target="_blank"
              >
                Live <img src={iconLink} alt="icon link" />
              </a>
            </div>
          </div>
        </div>

        {/* Kanban */}

        <div className="project-container">
          <div className="w-[50%] relative border ">
            <p className="project-title text-center">Kanban Board</p>

            <p className="project-details">
              An agile project management tool designed to help visualize work,
              limit work-in-progress, and maximize efficiency (or flow).
            </p>

            <div className="project-tech flex gap-[1rem]">
              <span>TECH:</span>
              <img
                src="https://skillicons.dev/icons?i=react"
                alt="skills-icons"
              />
              <img
                src="https://skillicons.dev/icons?i=firebase"
                alt="skills-icons"
              />
              <img
                src="https://skillicons.dev/icons?i=nodejs"
                alt="skills-icons"
              />
              <img
                src="https://skillicons.dev/icons?i=tailwind"
                alt="skills-icons"
              />
              <img
                src="https://skillicons.dev/icons?i=figma"
                alt="skills-icons"
              />
            </div>
            <div className="project-tags">
              <span className="project-type">#app</span>
              <span className="project-type">#redux</span>
              <span className="project-type">#fullstack</span>
            </div>

            <div className="project-links">
              <button>CODE</button>
              <button>LIVE</button>
            </div>
          </div>

          <div className="w-[50%] max-h-[400px] relative border overflow-hidden rounded">
            <Swiper
              className="kanbanSwiper w-full h-full"
              pagination={{
                type: "fraction",
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

        {/* trailerview */}
        <div className="project-container">
          <div className="w-[50%] max-h-[400px] relative border overflow-hidden rounded">
            <img
              className="object-cover "
              src={trailerview}
              alt="porfolio image"
            />
          </div>

          <div className="w-[50%] relative border ">
            <p className="project-title text-center">Trailerview</p>

            <p className="project-details">
              An entertainment app powered by <span><a className="cursor-pointer hover:text-underline" href="https://www.themoviedb.org/" target="_blank">TMDB</a></span>. The primary
              design feature grants users immediate access to all TMDB Youtube
              content across all titles and collections upon initial page load.
              Users can sign-in using NextAuth to allow save/load of bookmarks
              across devices.
            </p>

            <div className="project-tech flex gap-[1rem]">
              <span>TECH:</span>
              <img
                src="https://skillicons.dev/icons?i=nextjs"
                alt="skills-icons"
              />
              <img
                src="https://skillicons.dev/icons?i=nodejs"
                alt="skills-icons"
              />
              <img
                src="https://skillicons.dev/icons?i=mongodb"
                alt="skills-icons"
              />
              <img
                src="https://skillicons.dev/icons?i=tailwind"
                alt="skills-icons"
              />
            </div>
            <div className="project-tags">
              <span className="project-type">#app</span>
              <span className="project-type">#redux</span>
              <span className="project-type">#fullstack</span>
            </div>

            <div className="project-links">
              <button>CODE</button>
              <button>LIVE</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
