import React, { useState } from 'react'
import pic from '../assets/photo.avif';
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
function Navbar() {
    const [menu,setMenu]=useState(false);
    const navList=[
        {
            id:1,
            text:"Home"
        },
        {
            id:2,
            text:"About"
        },
        {
            id:3,
            text:"Skills"
        },
        {
            id:4,
            text:"Projects"
        },
        {
            id:5,
            text:"Contacts"
        }
    ]
  return (
    <>
        <div className="max-w-screen-2xl container mx-auto px-4 h-16 md:px-20 shadow-md fixed top-0 left-0 right-0 z-50 bg-white">
            <div className='flex justify-between h-16 items-center'>
              <div className="flex space-x-2">
                <img src={pic} className="h-12 w-12 rounded-full" alt="" />
                <h1 className='font-semibold text-xl cursor-pointer'>Asti<span className='text-green-500 text-2xl'>k</span>
                <p className='text-sm'>Web Developer</p>
                </h1>
              </div>
              <div>
                <ul className='hidden md:flex space-x-8'>
                    {navList.map((nav)=>(
                        <li className='hover:scale-105 duration-200 font-semibold cursor-pointer' key={nav.id}>{nav.text}</li>))
                    }
                </ul>
                <div onClick={()=>setMenu(!menu)} className='md:hidden'>
                    {menu ? <AiOutlineMenuUnfold/>:<IoClose/>}
                </div>
              </div>
            </div>
            {menu &&(
                <div>
                    <ul className='md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl'>
                        {navList.map((nav)=>(
                            <li className='hover:scale-105 duration-200 font-semibold cursor-pointer' key={nav.id}>{nav.text}</li>))
                        }
                    </ul>
                 </div>)}
      </div>
    </>
  )
}

export default Navbar
