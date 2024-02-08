import React from "react";
import giphy from "../assets/giphy.gif";
import IconAbout from "../icons/iconAbout";
import Me from '../assets/social-media.png'

function About() {
  return (
    <section id="about" className="page-width flex   pb-[5rem]">
      <div className="max-w-[80%] mx-auto flex gap-[6rem] items-center justify-center bg-white p-[5rem] border-2 rounded">

        <div className="max-w-[50%] h-[375px] ">
          <img
            className="h-auto overflow-hidden rounded-lg"
            src={giphy}
            alt="code gif"
          />
        </div>

        <div className="w-[50%] h-full ">

          <div className="flex flex-col  w-full h-full pr-[2rem]">
            <h3 className="section-heading flex gap-[1rem] items-center">ABOUT ME <img src={Me} alt="about icon" className="w-[30px] h-[30px]"/></h3>
            <h4 className="section-subheading">
              Front-End Developer based in Scotland, UK
            </h4>
            <p className="body-text ">
              Hi, my name is David, but my friends call me Marv. I'm a Frontend Developer. I prefer to work from a design, but I'm also OK with developing from a firm vision. 
              <br />
              <br />
              Currently my main stack is React/Next.js in combination with
              Tailwind CSS. For e-commerce builds I use the Shopify CMS.
            </p>
            <button className="btn-primary mt-[2rem] w-full">my Resume</button>


          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
