import React from 'react'
import { useState } from 'react'
import {useTypewiter, cursor, useTypewriter, Cursor} from 'react-simple-typewriter'
import { FaLinkedinIn } from "react-icons/fa";

import { FaInstagram } from "react-icons/fa";

function Banner() {
    const [name, setName] = useState("Khansa Zainab")
    const [text] = useTypewriter({
        words : ["Professional Coder.", "Frontend Developer.", "React Developer."],
        Loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000
    })
  return (
    <section id="home" className='w-full h-[800px] pt-10 pb-20 flex border-b-[1px] font-titleFont border-b-black'>
      <div className='w-1/2 flex flex-col gap-20'>
         <div className='flex flex-col gap-5'>
            <h4 className='text-lightText text-lg '>WELCOME TO MY WORLD</h4>
            <h1 className='text-white text-4xl font-bold'>Hi, I'm {" "} 
                <span className='text-designColor capitalize '>{name}</span>
            </h1>
            <h2 className='text-white text-2xl font-bold'>a {" "}
                <spna>{text}</spna>
                <Cursor       
                cursorBlinking= "false"
                cursorStyle="|"
                cursorColor='#ff014f'
                /></h2>
            <p className='font-bodyFont text-base leading-6 tracking-wide '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt cupiditate harum exercitationem assumenda nobis. Doloremque quos distinctio esse earum quod molestias, excepturi minima exercitationem?</p>
          
         </div>
         <div>
          <h2 className="uppercase">FIND ME</h2>
          <div className='flex gap-3 '>
            <span className='bannerClass'><FaLinkedinIn /></span>
            <span><FaGithubSquare /></span>
            <span><FaInstagram /></span>
          </div>
         </div>
      </div>
      <div className='w-1/2'></div>
    </section>
  )
}

export default Banner
