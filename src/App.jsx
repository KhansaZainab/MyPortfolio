import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
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
        <div className='min-w-screen-xl px-16 mx-auto box-border'>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Banner/>}/>
            <Route path='/features' element={<Features/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/resume' element={<Resume/>}/>
            
          </Routes>
          <Features/>
          <Projects/>
          <Resume/>
  
        </div>
       
      </div>
      
    </>
  )
}

export default App
