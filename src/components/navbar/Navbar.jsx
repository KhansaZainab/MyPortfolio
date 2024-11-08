import React, { useState } from "react";
import { navLinksdata } from "../../constants/index";
import { Link } from "react-router-dom";
import MylogoCrop from "../../assets/MylogoCrop.png";
import { IoMdClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className=" w-full h-auto flex justify-between items-center         font-titleFont border-b-zinc-700 border-b-[1px] shadow-sm ">
      <div className="w-20 h-20 flex justify-center items-center">
        <img src={MylogoCrop} alt="logo here" />
      </div>
       
       {/* Menu items for desktop view */}
      <ul className="hidden lg:flex gap-5 ">
        {navLinksdata.map(({ _id, title, link }) => (
          // destructuring the object present in navLinksdata array
          
          <li
            className="          text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor"
            key={_id}
          ><Link to={link}><a>{title}</a></Link>
            
          </li>
        ))}
      </ul>
      <div
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="text-white lg:hidden "
      >
        {isMenuOpen ? <IoMdClose  size={23}/> : <IoMenu size={23} />}
      </div>
       {/* Menu for mobile view */}
      <ul className={`${
        isMenuOpen ? 'text-white font-semibold opacity-100 transform translate-x-0 ' : 'opacity-0 transform -translate-y-full '
      }transition-transform absolute left-0 top-0 flex flex-col justify-center items-center gap-4 w-1/2 h-screen bg-zinc-900/80`}>
      {navLinksdata.map(({ _id, title, link }) => (
          // destructuring the object present in navLinksdata array
          <li
            className="          text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor"
            key={_id}
          >
            <a>{title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
