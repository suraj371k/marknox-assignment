import React from 'react';
import data from './ProjectData';
import Background3D from './Background3d';

function Project() {
  return (
    <div
    id='project'
     className="relative w-full bg-black text-white overflow-hidden
    min-h-screen">
      <div className="relative z-10 p-8">
        <h2 className="lg:text-5xl md:text-4xl text-3xl font-semibold text-center 
        mb-8">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8 place-items-center
        gap-y-20">
          {data.map((item) => (
            <div key={item.id} className="bg-[#1a1a1a] rounded-lg shadow-lg p-6 space-y-5
             transform hover:scale-105 transition duration-300 ease-in-out lg:w-[35vw]
             md:w-[70vw] w-full">
              <img src={item.image} alt={item.title} className="w-full h-48 
              object-cover rounded-md mb-4" />

              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>

              <p className="text-gray-400">{item.description}</p>
              <div className='flex gap-x-8'>
             <button className='px-8 py-2 rounded-full bg-blue-500 text-white
             '><a target='_blank' href={item.github} >Github</a></button> 
              <button className='px-8 py-2 rounded-full bg-blue-500 text-white
              '><a target='_blank' href={item.site} >Site</a></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
