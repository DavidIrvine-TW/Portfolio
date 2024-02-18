import React from "react";
import giphy from "../../public/assets/giphy.gif";
import dj from "../../public/assets/dj.gif"
import study from "../../public/assets/study.gif"
import synth from "../../public/assets/synth.gif"
import IconAbout from "../icons/iconAbout";
import Me from "../../public/assets/social-media.png";
import MyResume from "../../public/assets/David_Irvine_Resume_WebDev_Feb_2024.pdf"
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";


function About() {

  const openResume = () => {
    window.open(  MyResume, '_blank' )
  }











  return (
    <section
      id="about"
      className="page-width flex items-center justify-center px-[1.75rem] "
    >
      <div className="max-w-[1000px] mx-auto">

   
      <div className="mx-auto flex flex-col px-4 tb900:flex-row tb900:gap-[3rem]  items-center justify-center bg-white border-2 rounded py-[4rem]">
        <div className="max-w-[350px] px-4 mb-[3rem] tb900:mb-0 tb500:w-[410px] tb900:w-[50%]">
          
      
          <Swiper className="w-[250px] h-[225px] overflow-hidden tb900:w-[340px] tb900:h-[340px] border-2  rounded-lg shadow-md" pagination={
                {
                  // type: "fraction",
                }
              }
              modules={[Navigation, Pagination]}
              spaceBetween={16}
              navigation={true}
              slidesPerView={1}>
            <SwiperSlide className="w-full h-full cursor-grab overflow-hidden">
              <img
              className="h-full w-full rounded-lg"
              src={synth}
              alt="code gif"
            />
            </SwiperSlide>
            <SwiperSlide className="w-full h-full cursor-grab">
              <img
              className="h-full w-full rounded-lg"
              src={giphy}   
              alt="code gif"
            />
            </SwiperSlide>
            <SwiperSlide className="w-full h-full  cursor-grab">
              <img
              className="h-full w-full rounded-lg"
              src={study}
              alt="code gif"
            />
            </SwiperSlide>
            <SwiperSlide className="w-full h-full  cursor-grab">
              <img
              className="h-full w-full rounded-lg"
              src={dj}
              alt="code gif"
            />
            </SwiperSlide>
          </Swiper>
          <p className="text-center mt-[1rem] text-gray-500 text-[.8rem] font-Rubik uppercase font-bold">Is a picture worth a 1000 words?</p>
        </div>

        <div className="text-center tb900:text-left flex flex-col gap-[1rem] h-full tb500:max-w-[410px] px-[1rem] tb900:max-w-[40%]">
          <h3 className="section-heading flex justify-center tb900:justify-start gap-[1rem]  items-center">
            ABOUT ME{" "}
            <img src={Me} alt="about icon" className="w-[30px] h-[30px]" />
          </h3>
          <h4 className="section-subheading text-center tb900:text-left">
            Front-End Developer based in Scotland, UK
          </h4>
          <p className="body-text ">
            Hi, my name is David, but my friends call me Marv. I'm a Frontend
            Developer. I prefer to work from a design, but I'm also OK
            beginning development from a firm vision.
            <br />
            <br />
            My frameworks of choice are React and Next.js in combination with
            Tailwind CSS. For e-commerce builds I use the Shopify CMS.
          </p>
          <button onClick={openResume} className="btn-primary mt-[2rem] tb900:mt-[1rem] mx-auto tb900:mx-0 w-max tb900:w-full">
            my CV/Resume
          </button>
        </div>
      </div>
        <div className="w-[100px] h-[3px] bg-slate-200 my-[4rem] mx-auto"></div>
      </div>
      
    </section>
  );
}

export default About;
