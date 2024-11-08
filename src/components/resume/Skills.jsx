import React from "react";
// import ResumeCard from "./ResumeCard";
// import ExperienceCard from "./ExperienceCard";
// import Data from "../../Data";
// import { useState } from "react";
import { motion } from "framer-motion";

function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="flex sm:flex-col lg:flex-row justify-center items-center gap-20"
    >
      {/* First one for education */}

      <div className="w-1/2">
        <div className="flex flex-col py-10 ">
          <p className="font-titleFont text-designColor">Features</p>
          <h2 className="pt-5 font-titleFont text-lightText font-bold text-3xl ">
            Development Skills
          </h2>
        </div>

        <div className="w-full flex flex-col gap-4 ">
        <div className="overflow-hidden">
            <p className="uppercase text-sm">HTML 5</p>
            <span className="w-full h-2 bg-black opacity-40 inline-flex rounded-md">
              <motion.span
              initial={{x: "-100%", opacity:0}}
              animate={{x: 0, opacity:1}}
              transition={{duration:0.5, delay:0.5}}
              className="w-full h-full relative rounded-sm opacity-100 bg-gradient-to-r from-blue-600 via-pink-500 to-red-500">
                <span className="text-white absolute right-0 -top-8 ">100%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-hidden">
            <p className="uppercase text-sm">React</p>
            <span className="w-full h-2 bg-black opacity-40 inline-flex rounded-md">
              <motion.span
              initial={{x: "-100%", opacity:0}}
              animate={{x: 0, opacity:1}}
              transition={{duration:0.5, delay:0.5}}
              className="w-[90%] h-full relative rounded-sm opacity-100 bg-gradient-to-r from-blue-600 via-pink-500 to-red-500">
                <span className="text-white absolute right-0 -top-8 ">90%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-hidden">
            <p className="uppercase text-sm">Javascript</p>
            <span className="w-full h-2 bg-black opacity-40 inline-flex rounded-md">
              <motion.span
              initial={{x: "-100%", opacity:0}}
              animate={{x: 0, opacity:1}}
              transition={{duration:0.5, delay:0.5}}
              className="w-[97%] h-full relative rounded-sm opacity-100 bg-gradient-to-r from-blue-600 via-pink-500 to-red-500">
                <span className="text-white absolute right-0 -top-8 ">97%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-hidden">
            <p className="uppercase text-sm">CSS3</p>
            <span className="w-full h-2 bg-black opacity-40 inline-flex rounded-md">
              <motion.span
              initial={{x: "-100%", opacity:0}}
              animate={{x: 0, opacity:1}}
              transition={{duration:0.5, delay:0.5}}
               className="w-[90%] h-full relative rounded-sm opacity-100 bg-gradient-to-r from-blue-600 via-pink-500 to-red-500">
                <span className="text-white absolute right-0 -top-8 ">90%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-hidden">
            <p className="uppercase text-sm">Tailwind CSS</p>
            <span className="w-full h-2 bg-black opacity-40 inline-flex rounded-md">
              <motion.span
              initial={{x: "-100%", opacity:0}}
              animate={{x: 0, opacity:1}}
              transition={{duration:0.5, delay:0.5}}
               className="w-[100%] h-full relative rounded-sm opacity-100 bg-gradient-to-r from-blue-600 via-pink-500 to-red-500">
                <span className="text-white absolute right-0 -top-8 ">100%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-hidden">
            <p className="uppercase text-sm">Swiper JS</p>
            <span className="w-full h-2 bg-black opacity-40 inline-flex rounded-md">
              <motion.span
              initial={{x: "-100%", opacity:0}}
              animate={{x: 0, opacity:1}}
              transition={{duration:0.5, delay:0.5}}
              className="w-[88%] h-full relative rounded-sm opacity-100 bg-gradient-to-r from-blue-600 via-pink-500 to-red-500">
                <span className="text-white absolute right-0 -top-8 ">88%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-hidden">
            <p className="uppercase text-sm">Bootstrap</p>
            <span className="w-full h-2 bg-black opacity-40 inline-flex rounded-md">
              <motion.span
              initial={{x: "-100%", opacity:0}}
              animate={{x: 0, opacity:1}}
              transition={{duration:0.5, delay:0.3}}
              className="w-[85%] h-full relative rounded-sm opacity-100 bg-gradient-to-r from-blue-600 via-pink-500 to-red-500">
              <span className="text-white absolute right-0 -top-8 ">85%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-hidden">
            <p className="uppercase text-sm"> Github</p>
            <span className="w-full h-2 bg-black opacity-40 inline-flex rounded-md">
              <motion.span 
              initial={{x: "-100%", opacity:0}}
              animate={{x: 0, opacity:1}}
              transition={{duration:0.5, delay:0.5}}
              className="w-[80%] h-full relative rounded-sm opacity-100 bg-gradient-to-r from-blue-600 via-pink-500 to-red-500">
                <span className="text-white absolute right-0 -top-8 ">80%</span>
              </motion.span>
            </span>
          </div>
         
        </div> 

      </div>

      {/* Second one for job experience */}

      <div className="w-1/2">
        <div className="flex flex-col py-10 ">
          <p className="font-titleFont text-designColor">Features</p>
          <h2 className="pt-5 font-titleFont text-lightText font-bold text-3xl ">
            Soft Skills
          </h2>
        </div>

        <div className="wrapper relative w-[150px] h-[150px] rounded-full border-white ">
          <div className="outer w-[150px] h-[150px] flex justify-center items-center shadow-lg rounded-full  border-white">
            <div className="inner w-[130px] h-[130px] rounded-full  shadow-inner inset-2 border-white flex items-center justify-center">
            <p className="number">65%</p>
            </div>
          </div>
          <svg className="absolute left-0 top-0 w-[150px] h-[150px]">
            <linearGradient id="linearGradient" className="">
              <stop offset="0%" stopColor="darkorange"/>
              <stop offset="100%" stopColor="yellow"/>
            </linearGradient>
            <circle cx='75px' cy='75px' r='70'  className="fill-none stroke-[30px] bg-[url(#linearGradient)] bg-cover  "/>
          </svg>
        </div>
         

      </div>
    </motion.div>
  );
}

export default Skills;
