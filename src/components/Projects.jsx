import React from "react";
import trailerview from "../assets/trailerview.png";
import kanban from "../assets/kanban.png";
import vapestore from "../assets/vapestore.png";
const Projects = () => {
  return (
    <section className="page-width py-[10rem] flex">
      <div className="max-w-[1000px] mx-auto ">
        <div className="">
          <h3 className="font-bold text-babyblue font-Mulish mb-[1rem] text-[1.25rem]">
            PORTFOLIO
          </h3>
          <h4 className="font-Rubik font-bold text-header-txt mb-[1.25rem] text-about-heading-dk ">
            Each project is a unique piece of development
          </h4>
        </div>

        <div className="flex gap-[2rem] mx-auto  mb-[3rem]">
          <div className="w-[50%] max-h-[400px] relative border overflow-hidden">
            <img
              className="object-cover "
              src={vapestore}
              alt="porfolio image"
            />
          </div>

          <div className="w-[50%] relative border "></div>
        </div>

        <div className="flex gap-[2rem] mx-auto mb-[3rem]">
          <div className="w-[50%] relative border "></div>

          <div className="w-[50%] max-h-[400px] relative border overflow-hidden">
            <img className="object-cover " src={kanban} alt="porfolio image" />
          </div>
        </div>

        <div className="flex gap-[2rem] mx-auto  mb-[3rem]">
          <div className="w-[50%] max-h-[400px] relative border overflow-hidden">
            <img
              className="object-cover "
              src={trailerview}
              alt="porfolio image"
            />
          </div>

          <div className="w-[50%] relative border "></div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
