import React from "react";
import Title from "../layout/Title";
// import ResumeCard from "./ResumeCard";
import Data from "../../Data";
import { useState } from "react";
// import ExperienceCard from "./ExperienceCard";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import Achievements from "./Achievements";

function Resume() {
  const [educationData, setEducationData] = useState(true);
  const [experienceData, setExperienceData] = useState(false);
  const [skillsData, setSkillsData] = useState(false);
  const [achievementsData, setAchievementsData] = useState(false);
  return (
    <section
      id="features"
      className="w-full h-auto pt-20 pb-20  border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="7+ Years of experience" des="My Resume" />
      </div>

      <div>
        <ul className="w-full grid grid-cols-4">
          <li
            onClick={() =>
              setEducationData(true) &
              setExperienceData(false) &
              setAchievementsData(false) &
              setSkillsData(false)
            }
            className={`${educationData ? "border-designColor": "border-transparent"} resumeLi` }
          >
            Education
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setExperienceData(false) &
              setAchievementsData(false) &
              setSkillsData(true)
            }
            className={`${skillsData ? "border-designColor" : "border-transparent"} resumeLi`}
          >
            Professional Skills
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setExperienceData(true) &
              setAchievementsData(false) &
              setSkillsData(false)
            }
            className={`${experienceData ? "border-designColor" : "border-transparent"} resumeLi`}
          >
            Experience
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setExperienceData(false) &
              setAchievementsData(true) &
              setSkillsData(false)
            }
            className={`${achievementsData ? "border-designColor" : "border-transparent"} resumeLi`}
          >
            Achievements
          </li>
        </ul>
      </div>

      {educationData && <Education />}
      {experienceData && <Experience />}
      {skillsData && <Skills />}
      {achievementsData && <Achievements />}
      {/* <Education /> */}
      {/* <Experience/>
      <Skills/>
      <Achievements/> */}
    </section>
  );
}

export default Resume;
