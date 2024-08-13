import React from 'react';
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
import Mysql from '../assets/mysql.jpg';
import Tail from '../assets/tail.jpeg';

function Skills() {
  const skillItems = [
    { id: 1, logo: Java, name: 'Java' },
    { id: 2, logo: Cpp, name: 'C++' },
    { id: 3, logo: Js, name: 'JavaScript' },
    { id: 4, logo: C, name: 'C' },
    { id: 5, logo: Html, name: 'HTML' },
    { id: 6, logo: Css, name: 'CSS' },
    { id: 7, logo: Node, name: 'Node.js' },
    { id: 8, logo: Reactjs, name: 'React.js' },
    { id: 9, logo: Express, name: 'Express.js' },
    { id: 10, logo: Mongo, name: 'MongoDB' },
    { id: 11, logo: Mysql, name: 'MySQL' },
    { id: 12, logo: Tail, name: 'Tailwind CSS' },
  ];

  return (
    <>
      <div name="Skills" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold mb-5">SKILLS</h1>
          <h2 className="text-3xl md:text-5xl font-bold mb-5 text-gray-500">What I've Learnt</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 my-8">
            {skillItems.map((item) => (
              <div
                className="flex flex-col items-center justify-center border-2 rounded-lg shadow-lg p-6 cursor-pointer transform hover:scale-105 hover:shadow-xl transition duration-300"
                key={item.id}
              >
                <img src={item.logo} className="w-[70px] h-[70px] md:w-[100px] md:h-[100px] rounded-full object-cover mb-4" alt={item.name} />
                <div className="text-center font-semibold text-sm md:text-lg text-gray-500">{item.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Skills;
