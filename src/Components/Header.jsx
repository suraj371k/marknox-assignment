import React from 'react';
import Background3D from './Background3d';
import { FaArrowDown } from "react-icons/fa";


function Header() {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden flex justify-between">
      <Background3D /> 
      <div className="absolute inset-0 flex justify-center container mx-auto 
      font-poppins flex-col gap-y-20 z-10">
        <div>
          <h2 className="lg:text-[5rem] md:text-[4rem] text-[2rem] font-light text-white">
            <span className="font-bold">Designing</span> a Better
            <br />
            <span className="font-bold">World</span> Today
          </h2>
        </div>
        <div>
          <p className="text-[#bfbcbc]">
            Welcome to my world of endless imagination and boundless
            <br /> creativity. Together, let's embark on a remarkable journey
            where <br /> dreams become tangible realities.
          </p>
        </div>
        <div className="flex gap-x-10">
          <div className="flex bg-[#d00000] rounded-full">
            <a href='#about'
             className='lg:px-20 md:px-12 px-8 text-center py-5'>About me
             </a>
          </div>
          <div className="px-20 py-5 text-white flex justify-between">
            <div className=''>
            <a href='#project'>View work</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
