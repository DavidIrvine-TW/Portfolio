import React from "react";
import iconLink from "../../public/assets/icon-link.svg";
import Iconghub from "../icons/Iconghub";
import shopify from "../../public/assets/icon-shopify.svg";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const SingleProject = ({
  blurb,
  name,
  nameIcon,
  nameIconAlt,
  tech,
  tags,
  livelink,
  github,
  index,
  align,
  images,
}) => {

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


  return (
    <div className={align === "right" ? 'project-container-kanban mb-[4rem]' : 'project-container mb-[4rem]'}>
      <div className="swiper-container border-1">
        <Swiper
          className="w-full h-full "
          pagination={
            {
              type: "bullets",
            }
          }
          modules={[Navigation, Pagination]}
          spaceBetween={16}
          navigation={true}
          slidesPerView={1}
        >
          {images.map((image, index) => (
            <SwiperSlide   
              key={index} 
              className="swiper-slide w-min h-auto">
              <img
                key={index}
                className="object-cover cursor-grab "
                src={image}
                alt="porfolio image"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* PROJECT TITLE */}
      <div className="project-info-container">
        <h4 className="project-title flex items-center justify-center tb900:justify-start gap-[1rem] ">
          {name}{" "}
          <img
            src={
              nameIcon 
            }
            alt={nameIconAlt}
            className="w-[30px] h-[30px]"
          />
        </h4>

        <p className="project-details">{blurb}</p>

        {/* PROJECT TECH */}

        <div className="project-tech-container  ">
          {tech.map((tech, index) => {
            return (
              <img
                className="project-skills-img"
                key={index}
                src={`https://skillicons.dev/icons?i=${tech}`}
                alt={tech}
                loading="eager"
              />
            );
          })}
          {name === "Vapester" && <img src={shopify} alt="Shopify" />}
        </div>

        {/* PROJECT TAGS */}

        <div className="project-tags">
          {tags.map((tag, index) => {
            return (
              <span className="tag" key={index}>
                {tag}
              </span>
            );
          })}
        </div>

        <div className="project-links-container">
          {/* VAPESTER ? RENDER STORE PASSWRD FUNC */}

          {name === "Vapester" ? (
            <p className="flex items-center justify-center tb900:justify-start gap-[.5rem] text-gray-500 text-[.8rem]  my-[1.5rem]">
              *Password:
              <span
                className="cursor-pointer border hover:border-header-txt rounded px-[.5rem] hover:bg-slate-200 text-header-txt font-bold"
                onClick={() => copyToClipboard("eamaos")}
              >
                COPY TO CLIPBOARD
              </span>
            </p>
          ) : ""}
          {/* PROJECT LINKS */}
          <div className="flex items-center justify-center tb900:justify-start gap-[1rem] mt-[2rem] ">
            <a href={github} target="_blank" className="btn-secondary ">
              Code <Iconghub />{" "}
            </a>

            <a className="btn-secondary " href={livelink} target="_blank">
              Live
              <img src={iconLink} alt="icon link" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
