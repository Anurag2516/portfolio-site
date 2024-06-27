 import React, { useState, useEffect } from 'react';
//import { FaArrowUp } from 'react-icons/fa';
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`fixed bottom-10 right-0 hidden md:block  animate-bounce ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
      <button
        type="button"
        onClick={scrollToTop}
        className=" text-black font-bold py-2 p-4  rounded-full focus:outline-none focus:shadow-outline"
      >
        <MdKeyboardDoubleArrowUp className="text-5xl xxl:text-7xl" />
      </button>
    </div>
  );
};

export default ScrollToTopButton;
