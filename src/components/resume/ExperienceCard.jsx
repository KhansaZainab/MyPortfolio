import React from 'react'

function ExperienceCard({experience}) {
  return (
    <div className="w-full h-1/3 group flex">
      <div className="w-12 h-[6px] mt-14 bg-opacity-60 bg-black relative ">
        <span className="w-5 h-5 rounded-full  bg-black opacity-60  absolute -left-3 -top-2 flex justify-center items-center ">
          <span className="w-3 h-3 rounded-full bg-bodyColor group-hover:bg-designColor opacity-100  "></span>
        </span>
      </div>

      <div className=" border-solid  h-66 bg-gradient-to-r from-bodyColor to-[#202327] shadow-shadowOne hover:bg-gradient-to-b hover:from-black hover:to-1e2024 rounded-md transition-colors ease-in duration-100">
        <div className="flex flex-col px-10 py-10 ">
          <div className="flex justify-between items-center">
            <h3 className="font-titleFont text-xl font-bold text-gray-200">
              {experience.title}
            </h3>
            <button className="bg-black px-3 py-2 text-designColor shadow-shadowOne bg-opacity-40 rounded-md">
              {experience.country}
            </button>
          </div>
          <h6 className="text-sm pt-0">{experience.subTitle}</h6>
          <p className="pt-5">{experience.desc}</p>
        </div>
      </div>
    </div>
    
  )
}

export default ExperienceCard
