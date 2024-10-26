import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Form = () => {
  return (
    <div id='contact' className='font-[profile] pb-24 bg-[#4361ee] pt-40 relative
    h-[50vh] '>
     
      <div className='flex flex-col items-center mt-16'>
        <p className='text-base sm:text-lg md:text-xl text-center text-white w-full max-w-lg px-4'>
          Living, learning, & leveling up one day at a time.
        </p>
        <div className='flex gap-6 mt-6'>
          <a 
           className='text-3xl sm:text-4xl' href='https://github.com/suraj371k/'><FaGithub /></a>
          <a 
           className='text-3xl sm:text-4xl' href='https://www.linkedin.com/in/suraj-kushwaha-a696a8258/'><FaLinkedin /></a>
        </div>
      </div>
    </div>
  );
}

export default Form;