import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { FaGlobe } from 'react-icons/fa'

const ProjectCard = ({title,des,src,link,github}) => {
  return (
    <div className='w-full  sml:w-[400px]  sm:mx-auto md:w-full    lg:px-5 h-auto p-4   xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000'>
       <div className='w-full overflow-hidden rounded-lg'>
        <img src={src} className='object-cover w-full duration-300 h-60 group-hover:scale-110' alt="projectOne"></img>
       </div>
       <div className='flex flex-col w-full gap-2 mt-5'>
        <div className='flex items-center justify-between'>
          <h1 className='text-designColor'>{title}</h1>
          <div className='flex gap-3'>
            <span className='inline-flex items-center justify-center w-10 h-10 text-lg text-gray-400 duration-300 bg-black rounded-full cursor-pointer hover:text-designColor '>
              <a href={github}><BsGithub/></a>
            </span>
            <span className='inline-flex items-center justify-center w-10 h-10 text-lg text-gray-400 duration-300 bg-black rounded-full cursor-pointer hover:text-designColor '>
             <a href={link}><FaGlobe/></a>
            </span>
          </div>
        </div>
        <div>
          <p className='text-sm tracking-wide duration-300 group-hover:text-gray-100'>{des}</p>
        </div>
       </div>
    </div>
  )
}

export default ProjectCard