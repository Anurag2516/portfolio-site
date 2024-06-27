import React from 'react';
import { BsFillPatchCheckFill } from "react-icons/bs";

const MySkills = [
  {
    title: "Front-End Development",
    skills: [
      { name: "HTML", level: "Experienced", icon: <BsFillPatchCheckFill /> },
      { name: "React", level: "Intermediate", icon: <BsFillPatchCheckFill /> },
      { name: "CSS", level: "Experienced", icon: <BsFillPatchCheckFill /> },
      { name: "TailwindCSS", level: "Intermediate", icon: <BsFillPatchCheckFill /> },
      { name: "JS", level: "Intermediate", icon: <BsFillPatchCheckFill /> },
      { name: "Bootstrap", level: "Intermediate", icon: <BsFillPatchCheckFill /> },
    ],
  },
  {
    title:"Back-End Development",
    skills: [
        { name: "NodeJS", level: "Basic", icon:<BsFillPatchCheckFill /> },
        { name: "MongoDB", level: "Basic", icon:<BsFillPatchCheckFill /> },
        { name: "ExpressJS", level: "Basic", icon:<BsFillPatchCheckFill /> },
        { name: "MySQL", level: "Intermediate", icon:<BsFillPatchCheckFill /> },
        { name: "Git", level: "Intermediate", icon:<BsFillPatchCheckFill /> }
    ]
},

]

export default function Skills() {
  return (
    <>
    
<section id='Skills' className='md:mx-10 md:pr-12 lg:ml-0'>
<div className='flex flex-col items-center justify-center text-center mb-4 xs:ml-12'>
        <h1 className='text-lg mb-2'>Explore My</h1>
        <h1 className='text-5xl'>Skills</h1>
      </div>
      <div className='grid grid-cols-3 gap-8 xxs:grid-cols-1 lg:grid-cols-2 pb-14 pt-10 pl-6  xl:mx-52 xxs:mr-3 md:mr-0 '>
        {MySkills.map((skill, index) => (
          <div key={index} className='rounded-3xl border-2 border-black pl-8 pt-8 pb-6  hover:bg-customColor2 transition-all duration-100 md:p-6 md:min-h-0 md:min-w-0 xl:p-8
            '>

            <h1 className='mb-10 text-2xl font-medium xl:text-2xl xxl:text-3xl'>{skill.title}</h1>  
            <div className='flex flex-wrap pl-4 '>
              {skill.skills.map((skillItem, skillIndex) => (
                <p key={skillIndex} className='md:w-1/2 xxs:w-full pb-4 ' >
                
                  <div className='flex items-center xl:text-md'>
                    {skillItem.icon} 
                    <span className='ml-4 text-xl xl:text-xl xxl:text-2xl'>{skillItem.name}</span>
                  </div>
                  <p className='text-base text-gray-700 ml-8 xl:text-lg xxl:text-xl '>
                    {skillItem.level} 
                  </p>
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
      </section>
      </>
    
  );
}











