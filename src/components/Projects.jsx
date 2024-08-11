import React from 'react'
import SMS from '../assets/SMS.jpeg';
import Todo from '../assets/TODO.jpeg';
import PlantL from '../assets/PlantL.jpeg';

function Projects() {
    const cardItem=[
        {
            id:1,
            logo:Todo,
            name:"Todo-App",
            link:"https://github.com/Astik2004/fullstack-todo-app-fronted",
            desc:"A task management app using React and Node.js, enabling users to add, update, and delete tasks."
        },
        {
            id:2,
            logo:SMS,
            name:"Student Management System",
            link:"https://github.com/Astik2004/Student-Management-System",
            desc:"A full-stack web application for managing student records with CRUD operations, admin, and user panels."
        },
        {
            id:3,
            logo:PlantL,
            name:"Plants Leaf Disease Detection System",
            link:"https://github.com/Astik2004/AgroSathi",
            desc:"A machine learning-based system that accurately diagnoses plant diseases from images to enhance crop health management."
        }
    ]
  return (
    <>
        <div name="Projects" className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-20'>
            <div>
                <h1 className='text-3xl font-bold mb-5'>PROJECTS</h1>
                <h1 className='text-5xl font-bold mb-5 text-gray-500'>What I've Built</h1>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 my-5'>
                    {cardItem.map((item)=>(
                        <div className='md:w-[400px] md:h-[400px] border-black border-3px rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300' key={item.id}>
                            <img src={item.logo} className='w-full h-200px m:w-[400px] m:h-[200px] p-1 rounded-sm border-2px' alt=''/>
                            <div>
                                <div className='px-2 font-bold text-xl mb-2'>{item.name}</div>
                                <p className='px-2 text-gray-700 text-justify'>{item.desc}</p>
                            </div>
                            <div className="py-4 flex justify-center">
                                <a href={item.link} target="_blank" className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-8 py-2 rounded'>Source Code</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <hr />
    </>
  )
}

export default Projects
