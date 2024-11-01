import React from "react";
import ResumeCard from "./ResumeCard";
import ExperienceCard from "./ExperienceCard";
import Data from "../../Data";
import { useState } from "react";
import { motion } from "framer-motion";

function Achievements() {
  const [MyEducation, setMyEducation] = useState(Data.MyEducation);
  const [MyExperience, setMyExperience] = useState(Data.MyExperience);
  return (
    <motion.div
    iniatal={{opacity:0}}
    animate={{opacity:1, transition:{duration:0.5}}}
     className="flex sm:flex-col lg:flex-row justify-center items-center gap-20">
      {/* First one for education */}

      <div>
        <div className="flex flex-col py-10 ">
          <p className="font-titleFont text-designColor">2022-2024</p>
          <h2 className="pt-5 font-titleFont text-lightText font-bold text-3xl ">
            Company Experience
          </h2>
        </div>

        <div className="border-l-[6px] h-[700px] w-full border-r-[1px] border-r-black border-l-black opacity-60 flex flex-col gap-10">
          {MyEducation.map((edu) => (
            <ResumeCard education={edu} />
          ))}
        </div>
      </div>
      {/* Second one for job experience */}

      <div>
        <div className="flex flex-col py-10 ">
          <p className="font-titleFont text-designColor">2022-2024</p>
          <h2 className="pt-5 font-titleFont text-lightText font-bold text-3xl ">
            Job Experience
          </h2>
        </div>

        <div className="border-l-[6px] h-[700px] w-full border-r-[1px] border-r-black border-l-black opacity-60 flex flex-col gap-10">
          {MyExperience.map((exp) => (
            <ExperienceCard experience={exp} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Achievements;

