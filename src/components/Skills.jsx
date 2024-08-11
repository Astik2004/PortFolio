import React from 'react'
import Java from '../assets/java.jpeg';
import Cpp from '../assets/cpp.jpeg';
import Js from '../assets/js.jpeg';
import Node from '../assets/node.webp';
import Reactjs from '../assets/react.jpeg';
import C from '../assets/c.jpeg';
import Html from '../assets/html.jpeg';
import Css from '../assets/css.jpeg';
import Mongo from '../assets/mongo.jpeg';
import Express from '../assets/express.jpeg';
import  Mysql from '../assets/mysql.jpg';
import Tail from '../assets/tail.jpeg';

function Skills() {
  const skillItem=[
    {
      id:1,
      logo:Java,
      name:"Java"
    },
    {
      id:2,
      logo:Cpp,
      name:"C++"
    },
    {
      id:3,
      logo:Js,
      name:"JavaScript"
    },
    {
      id:4,
      logo:C,
      name:"C"
    },
    {
      id:5,
      logo:Html,
      name:"HTML"
    },
    {
      id:6,
      logo:Css,
      name:"CSS"
    },
    {
      id:7,
      logo:Node,
      name:"Node.Js"
    },
    {
      id:8,
      logo:Reactjs,
      name:"React.Js"
    },
    {
      id:9,
      logo:Express,
      name:"Expres.Js"
    },
    {
      id:10,
      logo:Mongo,
      name:"MongoDB"
    },
    {
      id:11,
      logo:Mysql,
      name:"MySQL"
    },
    {
      id:12,
      logo:Tail,
      name:"CSS Tailwind"
    }
  ]
  return (
    <>
        <div
      name="Experiance"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">SKILLS</h1>
        <h1 className='text-5xl font-bold mb-5 text-gray-500'>What I've Learnt</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-7 my-3">
          {skillItem.map((item) => (
            <div
              className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
              key={item.id}
            >
              <img src={item.logo} className="w-[150px] rounded-full" alt="" />
              <div>
                <div className="text-bold">{item.name}</div>
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

export default Skills
