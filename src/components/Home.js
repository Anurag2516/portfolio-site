import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { CgMail } from "react-icons/cg";

export default function Home() {
  return (
    <section id="Home" className="px-4 md:px-8 lg:px-16 py-16">
      <div className="flex flex-col lg:flex-row justify-around items-center">
        <div className="w-full lg:w-2/5 lg:ml-40 my-8 lg:my-28 text-center lg:text-left">
          <h1 className="leading-relaxed">
            <div className="flex items-center justify-center lg:justify-start xxl:ml-40">
              <span className="block text-4xl md:text-6xl mr-4 font-medium">Hello</span>
              <img src="./images/hello.png" alt="Hello Icon" className="w-12 h-12 md:w-16 md:h-16 " />
              <p className="text-4xl md:text-6xl ml-2 font-medium">.</p>
            </div>
            <div className="xl:mr-12 lg:mr-8 ">
            <span className="block w-full mt-4 text-xl md:text-2xl lg:text-xl xl:text-3xl xxl:text-4xl ">
              I am <span>Anurag</span>. I am a Web Developer.
            </span>
            <span className="block w-full mt-3 text-xl md:text-2xl lg:text-xl xl:text-3xl xxl:text-4xl">
              Coding Enthusiast. Always Learning.
            </span>
            </div>
          </h1>
          <div className="flex justify-center lg:justify-start gap-6 text-xl md:text-3xl xxl:ml-40  mt-4">
            <div className="flex items-center text-gray-800">
              <a href="https://github.com/Anurag2516/" target="_blank" rel="noopener noreferrer">
                <AiFillGithub className="hover:cursor-pointer xxl:text-4xl" />
              </a>
            </div>
            <div className="flex items-center">
              <a href="https://linkedin.com/in/anurag2516" target="_blank" rel="noopener noreferrer">
                <AiFillLinkedin className="hover:cursor-pointer xxl:text-4xl" />
              </a>
            </div>
            <div className="flex items-center">
              <a href="mailto:anurag2516@gmail.com">
                <CgMail className="hover:cursor-pointer" />
              </a>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-2/5 mt-8 lg:mt-0 flex justify-center lg:justify-end">
          <img
            className="w-64 md:w-96 lg:w-full xxl:w-auto h-auto "
            src="./images/home.png"
            alt="Error in loading image."
          />
        </div>
      </div>
    </section>
  );
}
