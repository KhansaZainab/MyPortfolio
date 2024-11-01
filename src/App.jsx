import { useState } from 'react'
import React from 'react'
import Navbar from './components/navbar/Navbar'
import Banner from './components/banner/Banner'
import Features from './components/features/Features'
import Projects from './components/projects/Projects'
import Resume from './components/resume/Resume'

// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <div className='w-full h-auto bg-bodyColor text-lightText'>
        <div className='max-w-screen-xl px-16 text-'>
         <Navbar/>
         {/* <Banner/> */}
         <Features/>
         <Projects/>
         <Resume/>
        </div>
       
      </div>
      
    </>
  )
}

export default App
