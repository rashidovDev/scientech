import {Link} from "react-router-dom"
import { navigation } from '../../data'
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined'; 
import React, { useState } from 'react'
import DragHandleOutlinedIcon from '@mui/icons-material/DragHandleOutlined';

const Navbar : React.FC = () => {
   
  let [open, setOpen]=useState<boolean>(false);

  return (
      <nav className='md:w-4/5 w-10/12 m-auto md:flex items-center pt-10 pb-4'>
        <div className="mr-12">
          <img
           className='w-[30.68px] h-[30.04px ] md:w-[40.58px] md:h-[39.73px] lg:h-[47px] lg:[48px] lg:mr-60 ' src={require("../../assets/Homepage/logo.png")} alt="logo" />
        </div>
        <ul className={`text-center lg:flex md:items-center md:pb-0 md:text-center ${open ? `mt-[10px]` : `hidden`}`}>
          {
             navigation.map((link)=>(
              <li key={link.name} className='md:ml-8 text-xl md:my-0 mt-7 '>
                <Link to={link.href} className='text-gray-800 hover:text-[#FF3C78] duration-500'>{link.name}</Link>
              </li>
            ))
          }
        </ul>
        <div className="absolute top-11 md:top-11 right-24 md:hidden lg:flex">
          <Link className='pl-3 ' to="/"><SearchIcon/></Link>
          <Link className='pl-3 hidden lg:flex'  to="/" > <PersonOutlinedIcon/></Link>
          <Link className='pl-3'  to="/"> <LocalMallOutlinedIcon/></Link>
        </div>
        <button onClick={()=>setOpen(!open)} className="lg:hidden top-8 absolute right-6">
          <DragHandleOutlinedIcon sx={{ fontSize: "50px" }} />
        </button>
      </nav>
  )
}

export default Navbar;

