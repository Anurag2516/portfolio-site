import React from "react";
import { FaReact, FaNodeJs, FaBootstrap } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress } from 'react-icons/si';

const projects = [
  {
    title: "Example~ To-do list",
    description: "Made using React, Bootstrap",
    link: "#",
    image: "./images/project1.jpg",
    icons: [<FaReact/>, <FaBootstrap/>],
  },
  {
    title: "Example~ WordPlay App",
    description: "Made using React, TailwindCSS",
    link: "#",
    image: "./images/project4.jpg",
    icons: [<FaReact/>, <SiTailwindcss/>],
  },
  {
    title: "Example~ E-commerce App",
    description: "Made using React, Node.js, MongoDb, TailwindCSS",
    link: "#",
    image: "./images/project3.jpg",
    icons: [<FaReact/>, <FaNodeJs/>, <SiMongodb/>, <SiTailwindcss/>],
  },
  {
    title: "Example~ Social Media App",
    description: "Made using React, Express.js, Node.js, MongoDb, TailwindCSS",
    link: "#",
    image: "./images/project2.jpg",
    icons: [<FaReact/>, <SiExpress/>, <FaNodeJs/>, <SiMongodb/>, <SiTailwindcss/>],
  },
];

const Projects = () => {
  return (
    <section id='Projects' className='py-12 lg:ml-20 md:mx-10 xs:ml-10 '>
      <div className="flex flex-col items-center justify-center mb-20">
        <h1 className="text-xl mb-2">Explore My</h1>
        <h1 className="text-4xl lg:text-5xl font-medium">My Projects</h1>
      </div>

      <div className="container mx-auto pl-4 sm:px-6 xl:mx-0 lg:pr-20 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-3xl p-8 border-2 border-black hover:bg-customColor2 transition-all duration-100"
            >
              <h2 className="text-2xl lg:text-3xl xxl:text-4xl font-medium mb-4 ">{project.title}</h2>
              <p className="flex flex-wrap text-lg lg:text-xl xxl:text-2xl mb-4">{project.description}</p>
              <div className='flex flex-wrap gap-2 mb-6'>
                {project.icons.map((icon, i) => (
                  <div key={i} className='text-2xl lg:text-3xl p-2'>
                    {icon}
                  </div>
                ))}
              </div>
              <a
                href={project.link}
                className="inline-block py-3 px-5 rounded-full xxl:text-2xl font-medium border-2 border-black hover:bg-gray-700 hover:text-white transition-all duration-100"
              >
                View Project 
              </a>      
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;



