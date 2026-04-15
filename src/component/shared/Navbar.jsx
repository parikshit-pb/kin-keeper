import React from 'react';
import { BiHomeAlt2 } from "react-icons/bi";
import { IoTimeOutline } from "react-icons/io5";
import { BsGraphUp } from "react-icons/bs";

const Navbar = () => {
    return (
      
     <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl text-green-800 font-bold">Keen<span className='text-green-500'>Keeper</span></a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1 gap-2">
      <li className='border'><a> <BiHomeAlt2 />
 Home</a></li>
      <li className='border'><a> <IoTimeOutline /> Timeline</a></li>
      <li className='border'><a> <BsGraphUp /> Stats</a></li>
      
    </ul>
  </div>
</div>
    );
};

export default Navbar;