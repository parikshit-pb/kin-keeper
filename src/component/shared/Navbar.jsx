import React from 'react';
import { BiHomeAlt2 } from "react-icons/bi";
import { IoTimeOutline } from "react-icons/io5";
import { BsGraphUp } from "react-icons/bs";
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
      <nav className=' bg-base-100 shadow-sm'>
        <div className="navbar container mx-auto">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl text-green-800 font-bold">Keen<span className='text-green-500'>Keeper</span></a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1 gap-2">
      <li>
        <NavLink to={"/"} className={({isActive})=> isActive ? "text-white border bg-green-800 font-bold" : "" }> <BiHomeAlt2 /> Home</NavLink>
      </li>
      <li>
        <NavLink to={"/timeline"} className={({isActive})=> isActive ? "text-white border bg-green-800 font-bold" : "" }> <IoTimeOutline /> Timeline</NavLink>
      </li>
      <li>
        <NavLink to={"/stats"} className={({isActive})=> isActive ? "text-white border bg-green-800 font-bold" : "" }> <BsGraphUp /> Stats</NavLink>
      </li>
     
      
    </ul>
  </div>
</div>
      </nav>
     
    );
};

export default Navbar;