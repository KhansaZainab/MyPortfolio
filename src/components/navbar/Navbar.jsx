import React from 'react'
import { navLinksdata } from '../../constants/index'
import {Link} from 'react-scroll'


function Navbar() {
  return (
    <div className='flex w-full h-20 mx-auto items-center justify-between py-2 font-titleFont border-b-zinc-700 border-b-[1px] shadow-sm sticky top-0'>
        <div>
            <img src="" alt="logo here" />
        </div>
        <div>
            <ul className='flex items-center gap-10'>
                {
                   navLinksdata.map(({_id, title, link})=>(
                    // destructuring the object present in navLinksdata array
                    <li className='text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300' key={_id}>
                        <Link 
                        activeClass='active'
                        to={link}
                        spy={true} 
                        smooth={true}
                        offset={-60}
                        duration={500}
                        >
                        {title}
                        </Link>
                    </li>
                   ))
                }
            </ul>
        </div>
      
    </div>
  )
}

export default Navbar
