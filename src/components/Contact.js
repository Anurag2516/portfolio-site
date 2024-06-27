import React, { useState, forwardRef } from 'react';
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import emailjs from 'emailjs-com';

const ContactMe = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lgnpk2i', 'template_tnid6n5', e.target, 'NgC6M9157VJRRj2yB')
      .then((result) => {
        console.log(result.text);
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
        }, 3000);
      }, (error) => {
        console.log(error.text);
        alert('Failed to send the message, please try again.');
      });

    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section id='Contact' ref={ref} className='py-12 md:ml-32 lg:ml-0'>
      <div className='flex flex-col lg:flex-row justify-center items-start md:gap-10 px-4 sm:px-6 lg:px-8'>
        <div className="md:mr-12 mt-8 md:mt-28 xxs:ml-8">
          <h2 className="text-4xl xxl:text-5xl">Contact Me</h2>
          <div className='flex flex-row justify-start text-2xl md:text-4xl mt-4 pb-3 gap-3'>
            <a href='https://github.com/Anurag2516/' target='_blank' rel="noopener noreferrer">
              <AiFillGithub className='hover:cursor-pointer' />
            </a>
            <a href='https://www.linkedin.com/in/anurag-yadav-263706291/' target='_blank' rel="noopener noreferrer">
              <AiFillLinkedin className='hover:cursor-pointer' />
            </a>
          </div>
        </div>

        <form className="w-full max-w-lg bg-gray-50 shadow-md rounded-2xl px-4 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <div className="mb-6 mt-3 xxl:mt-6">
            <label className="block text-gray-700 text-sm font-bold mb-2 ml-3 xxl:text-xl " htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded xxl:text-lg w-full py-2 px-3 xl:text-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              name="name"
              type="text"
              placeholder='Your Name'
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-6 xxl:mt-8">
            <label className="block text-gray-700 text-sm font-bold  xxl:text-xl mb-2 ml-3 " htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded xxl:text-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
              type="email"
              placeholder='Your Email'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-6 xxl:mt-8 xxl:mb-8">
            <label className="block text-gray-700 text-sm font-bold xxl:text-xl mb-2 ml-3" htmlFor="message">
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full xxl:text-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              name="message"
              placeholder='Your Message'
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-center justify-between mb-3">
            <button
              className="border-2 border-black font-medium py-2 px-4 ml-2 rounded-3xl xxl:text-xl focus:outline-none focus:shadow-outline hover:cursor-pointer hover:bg-gray-800 hover:text-white hover:font-light transition-all duration-100"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>

      {showAlert && (
        <div className="fixed top-0 left-0 w-full flex items-center justify-center bg-green-500 text-white py-4">
          Message sent successfully!
        </div>
      )}
    </section>
  );
});

export default ContactMe;



