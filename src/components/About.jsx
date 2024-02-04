import React from "react";
import giphy from "../assets/giphy.gif";

function About() {
  return (
    <section className="page-width bg-white py-[10rem] flex border">
      <div className="max-w-[1000px] mx-auto flex gap-[6rem]">
        <div className="w-[50%] max-w-[400px] h-[350px]">
          <img
            className="h-auto overflow-hidden rounded-lg"
            src={giphy}
            alt="code gif"
          />
        </div>
        <div className="w-[50%] h-full">
          <div className="flex flex-col justify-center w-full h-full pr-[2rem]">
            <h3 className="font-bold text-babyblue font-Mulish mb-[1rem] text-[1.25rem]">ABOUT ME</h3>
            <h4 className="font-Rubik font-bold text-header-txt mb-[1.25rem] text-about-heading-dk ">
              Front-End Developer <br />based in Scotland, UK
            </h4>
            <p className="font-Mulish text-gray-500">
              Hi, my name is David, but my friends call me Marv. I'm a Frontend Developer. I prefer to work from a design, but I'm also OK with a firm idea. 
              <br />
              <br />
              Currently my main stack is React/Next.js in combination with
              Tailwind CSS. For e-commerce builds I use the Shopify CMS.
            </p>

        
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
