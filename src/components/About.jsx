import React from "react";
import giphy from "../assets/giphy.gif";
import IconAbout from "../icons/iconAbout";
import Me from "../assets/social-media.png";

function About() {
  return (
    <section
      id="about"
      className="page-width flex items-center justify-center px-[1.75rem] py-[7rem] "
    >
      <div className="max-w-[1000px] mx-auto">

   
      <div className="mx-auto flex flex-col px-4 tb900:flex-row tb900:gap-[2rem]  items-center justify-center bg-white  border-2 rounded py-[4rem]">
        <div className="max-w-[350px] px-4 mb-[3rem] tb900:mb-0 tb500:w-[410px] tb900:w-[50%] ">
          <img
            className="h-auto overflow-hidden rounded-lg"
            src={giphy}
            alt="code gif"
          />
        </div>

        <div className="text-center tb900:text-left flex flex-col gap-[1rem] h-full tb500:max-w-[410px] px-[1rem] tb900:max-w-[50%]">
          <h3 className="section-heading flex justify-center tb900:justify-start gap-[1rem]  items-center">
            ABOUT ME{" "}
            <img src={Me} alt="about icon" className="w-[30px] h-[30px]" />
          </h3>
          <h4 className="section-subheading text-center tb900:text-left">
            Front-End Developer based in Scotland, UK
          </h4>
          <p className="body-text ">
            Hi, my name is David, but my friends call me Marv. I'm a Frontend
            Developer. I prefer to work from a design, but I'm also OK with
            developing from a firm vision.
            <br />
            <br />
            Currently my main stack is React/Next.js in combination with
            Tailwind CSS. For e-commerce builds I use the Shopify CMS.
          </p>
          <button className="btn-primary mt-[2rem] tb900:mt-[1rem] mx-auto tb900:mx-0 w-max tb900:w-full">
            my Resume
          </button>
        </div>
      </div>
      </div>
    </section>
  );
}

export default About;
