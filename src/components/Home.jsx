import React from 'react'
import Pic from '../assets/pic.png';
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { SiGeeksforgeeks } from "react-icons/si";
import { FaInstagramSquare } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaJava } from "react-icons/fa6";
import { ReactTyped,Typed } from "react-typed";

function Home() {
  return (
    <>
      <div name="Home" className='max-w-screen-2xl container mx-auto px-4 md:px-20 py-20'>
        <div className='flex flex-col md:flex-row '>
            <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
                <span className='text-xl'>Welcome In My Feed</span>
                <div className='flex space-x-1 text-2xl md:text:4xl'>
                    <h1>Hello I'm a </h1>
                    {/*<span className='text-red-700 font-bold'>Developer</span>*/}
                    <ReactTyped
                        className='text-red-700 font-bold'
                        strings={["Developer","Programmer","Coder"]}
                        typeSpeed={30}
                        backSpeed={50}
                        loop={true}
                    />
                </div>
                <br />
                <p className='text:sm md:text-md text-justify'>I’m a recent Computer Science & Engineering graduate with a passion for full-stack web development.
                 I specialize in creating engaging and functional web applications using the MERN stack (MongoDB, Express.js, React, Node.js).
                    </p>
                <br />
                {/*social icon */}
                <div className='flex flex-col items-center md:flex-row justify-between space-y-6 md:space-x-0'>
                <div className='space-y-2'>
                    <h1 className='font-bold text-center md:text-left'>Available On</h1>
                    <ul className='flex space-x-5'>
                        <li>
                            <a href="https://www.linkedin.com/in/astik-yadav-8b5995225/" target='_blank'>
                                <FaLinkedin className='text-2xl cursor-pointer' />
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/Astik2004" target='_blank'>
                                <FaGithubSquare className='text-2xl cursor-pointer'/>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.geeksforgeeks.org/user/ayadav1997/" target='_blank'>
                                <SiGeeksforgeeks className='text-2xl cursor-pointer bg-black text-white rounded-sm'/>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/astikydv/" target="_blank">
                                <FaInstagramSquare className='text-2xl cursor-pointer' />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/profile.php?id=100091766149396" target="_blank">
                                <FaSquareFacebook className='text-2xl cursor-pointer' />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='space-y-2'>
                <h1 className='font-bold text-center md:text-left'>Currently Working On</h1>
                    <div className='flex space-x-5'>
                    <SiMongodb className='text-xl md:text-2xl hover:scale-110 duration-200 rounded-full border-[2px] text-white bg-black' />
                    <SiExpress className='text-xl md:text-2xl hover:scale-110 duration-200 rounded-full border-[2px] text-white bg-black'/>
                    <FaReact className='text-xl md:text-2xl hover:scale-110 duration-200 rounded-full border-[2px] text-white bg-black'/>
                    <FaNodeJs className='text-xl md:text-2xl hover:scale-110 duration-200 rounded-full border-[2px] text-white bg-black' />
                    <FaJava className='text-xl md:text-2xl hover:scale-110 duration-200 rounded-full border-[2px] text-white bg-black'/>
                    </div>    
                </div>
                </div>
            </div>
            <div className='md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1'>
                <img src={Pic} className='rounded-full md:w-[450px] md:h-[450px]' alt="" />
            </div>
        </div>
      </div>
      <hr />
    </>
  )
}

export default Home
