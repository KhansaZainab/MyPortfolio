import React from 'react'
// import img from '../../assets/QRCode.jpg'
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

function ProjectCard({project}) {
  return (
    // lg:w-[26vw] md:w-[40vw]
    <div className="lg:w-[42vw] md:w-[85vw] border-solid  h-66 bg-gradient-to-r from-bodyColor to-[#202327] shadow-shadowOne hover:bg-gradient-to-b hover:from-black hover:to-1e2024 rounded-md transition-colors ease-in duration-100 ">
        <div className='flex flex-col p-12 gap-4'>
          {/* <span className='text-2xl text-[#FF014B]'>{project.src}</span> */}
          <img src={project.src} alt="image" className='rounded-md'/>
          <div className='flex  items-center justify-between'>
            <h2 className="capitalize text-2xl text-[#FF014B]">{project.title}</h2>
           <div className='flex'>
             <a>< BsGithub className="me-2" /></a>
             <FaGlobe />
           </div>
          </div>
          <p className=''>{project.desc}</p>
        </div>
    </div>
  )
}

export default ProjectCard
