import React, { useState } from 'react';
import { sectionIds } from "./sectionIds";
import { Link } from "react-router-dom";
import HamburgerMenu from 'react-hamburger-menu';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const scrollToY = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: scrollToY, behavior: "smooth" });
    }
  };

  return (
    <nav className="w-full xxs:mt-5 xs:ml-6 xs:pr-6 md:pr-0 md:ml-0 xl:px-32 z-20">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-12 lg:px-24">
        <a href="/" className="text-black text-2xl md:text-4xl xxl:text-5xl font-bold font-playwrite">
          {"<"} Anurag {"/>"}
        </a>
        <div className="md:hidden">
          <HamburgerMenu
            isOpen={isOpen}
            menuClicked={toggleMenu}
            width={28}
            height={15}
            strokeWidth={3}
            rotate={0}
            color='black'
            borderRadius={0}
            animationDuration={0.5}
          />
        </div>
        <ul
          className={`flex flex-col md:flex-row md:space-x-6 md:static absolute bg-customColor transition-all duration-300 ${
            isOpen ? 'left-[-100px] top-24 w-full' : 'top-[-300px] ' 
          }`}
        >
          {sectionIds.map((sectionId, index) => (
            <li key={index} className="py-2 md:py-0 text-center xl:text-xl md:text-left xxl:text-3xl">
              <Link
                to={`#${sectionId}`} 
                onClick={() => {
                  scrollToSection(sectionId);
                }}
                className="block px-6 md:px-3 xl:px-4 py-2 font-medium hover:text-gray-600 hover:underline cursor-pointer transition duration-200"
              >
                {sectionId}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
