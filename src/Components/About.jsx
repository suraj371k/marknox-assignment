import React from 'react'
import about from '../assets/markAbout.jpg'
import name from '../assets/suraj image2.jpg'

function About() {
  return (
    <div className=' w-full h-screen container mx-auto flex justify-evenly items-center
    lg:flex-row md:flex-col flex-col gap-y-7 mb-10'>
       <div className='flex flex-col gap-y-10'>
         <div>
          <h2 
          className='font-semibold lg:text-[4rem] text-[3rem] leading-tight'>Discover <br/> Our 
          <span className='font-light'> Studio</span></h2>
         </div>
         <div className='w-[400px] space-y-10 text-lg'>
          <p>
            Hi, my name is Suraj Kushwaha and I am from Uttar Pradesh, Ghazipur. I'm a 
            Frontend web developer and a third-year university student pursuing a Bachelor
             of Computer Application from Lucknow.
             </p>
             <p>
             I love to create projects with beautiful designs and put my own twists on it.
              You can check out some of my work in the project section.
             </p>
             <p>
              As a fresher, I am enthusiastic about the opportunity to apply my knowledge in 
              real-world scenarios and contribute to creating exceptional user experiences.
             </p>
         </div>
         <div className='flex gap-x-4'>
           <div>
            <img src={name} className='w-[40px] rounded-full' />
           </div>
           <div className='text-lg'>
            <p> <span className='font-bold'>Creative Innovative</span> Detailed-Oriented
               <br/> Frontend Developer</p>
           </div>
         </div>
       </div>
       <div>
          <img src={about} className='lg:w-[24vw] md:w-full]'/>
       </div>
    </div>
  )
}

export default About