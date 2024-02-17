import React from "react";
import Briefcase from "../../public/assets/briefcase.png";


import vapesterData from "../../public/assets/vapester.json";
import kanbanData from "../../public/assets/kanban.json";
import trailerviewData from "../../public/assets/trailerview.json";
import photosnapData from "../../public/assets/photosnap.json"

import SingleProject from "./SingleProject";


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
        {vapesterData.map((data, index) => (
          <SingleProject
            name={data.name}
            nameIcon={data.nameIcon}
            nameIconAlt={data.nameIconAlt}
            tech={data.tech}
            tags={data.tags}
            blurb={data.blurb}
            github={data.github}
            livelink={data.livelink}
            key={data.id}
            images={data.images}
            align={data.align}
          />
        ))}
      

        {/* Kanban */}
        {kanbanData.map((data, index) => (
          <SingleProject
            name={data.name}
            nameIcon={data.nameIcon}
            nameIconAlt={data.nameIconAlt}
            tech={data.tech}
            tags={data.tags}
            blurb={data.blurb}
            github={data.github}
            livelink={data.livelink}
            key={data.id}
            images={data.images}
            align={data.align}
          />
        ))}


        {/* trailerview */}
        {trailerviewData.map((data, index) => (
          <SingleProject
            name={data.name}
            nameIcon={data.nameIcon}
            nameIconAlt={data.nameIconAlt}
            tech={data.tech}
            tags={data.tags}
            blurb={data.blurb}
            github={data.github}
            livelink={data.livelink}
            key={data.id}
            images={data.images}
            align={data.align}
          />
        ))}


        {/* photosnap */}
        {photosnapData.map((data, index) => (
          <SingleProject
            name={data.name}
            nameIcon={data.nameIcon}
            nameIconAlt={data.nameIconAlt}
            tech={data.tech}
            tags={data.tags}
            blurb={data.blurb}
            github={data.github}
            livelink={data.livelink}
            key={data.id}
            images={data.images}
            align={data.align}
          />
        ))}

      </div>
      <div className="w-[100px] h-[3px] bg-slate-200 my-[4rem] mx-auto"></div>
    </section>
  );
};

export default Projects;
