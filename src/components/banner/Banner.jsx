import React from "react";
import { useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaLinkedinIn } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";

import { RiHtml5Line } from "react-icons/ri";
import ProfilePicC from "../../assets/ProfilePicC.png";

function Banner() {
  const [name, setName] = useState("Khansa Zainab");
  const [text] = useTypewriter({
    words: ["Professional Coder.", "Frontend Developer.", "React Developer."],
    Loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <section
      id="home"
      className="w-full h-auto py-10 flex justify-center items-center lg:justify-between flex-col lg:flex-row  border-b-[1px] font-titleFont border-b-black"
    >
      {/*First Half of banner  */}
      <div className="w-full lg:w-1/2 flex flex-col gap-20">
        <div className="flex flex-col gap-5">
          <h4 className="text-lightText text-lg ">WELCOME TO MY WORLD</h4>
          <h1 className="text-white text-4xl font-bold">
            Hi, I'm <span className="text-designColor capitalize ">{name}</span>
          </h1>
          <h2 className="text-white text-2xl font-bold">
            a <spna>{text}</spna>
            <Cursor
              cursorBlinking="false"
              cursorStyle="|"
              cursorColor="#ff014f"
            />
          </h2>
          <p className="font-bodyFont text-base leading-6 tracking-wide ">
          Creating contemporary, responsive websites that prioritize clean design and exceptional user experience, utilizing React.js and Tailwind CSS. My focus is on delivering visually appealing and intuitive digital solutions.
          </p>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-2">
            <h2 className="uppercase">FIND ME</h2>
            <div className="flex gap-3 ">
              <a
                className="bannerClass"
                href="https://www.linkedin.com/in/khansa-zainab-221b56247"
              >
                <FaLinkedinIn />
              </a>
              <a className="bannerClass" href="https://github.com/KhansaZainab">
                <TbBrandGithubFilled />
              </a>

              <span className="bannerClass">
                <FaInstagram />
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="uppercase">Best Skills On</h2>
            <div className="flex gap-3 ">
              <a
                className="bannerClass"
                href="https://react-icons.github.io/react-icons/search/#q=ht"
              >
                <FaReact />
              </a>
              <span className="bannerClass">
                <IoLogoJavascript />
              </span>
              <a className="bannerClass" href="https://tailwindcss.com/">
                <RiTailwindCssFill />
              </a>
              <span className="bannerClass">
                <RiHtml5Line />
              </span>
            </div>
          </div>
        </div>
      </div>
      {/*Second Half of banner  */}
      <div className="w-full lg:w-1/2">
        <div className="w-3/4 flex justify- items-center ms-40">
          <img src={ProfilePicC} alt="Profile Pic" />
        </div>
      </div>
    </section>
  );
}

export default Banner;
