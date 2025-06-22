import React from 'react'
import ResumeCard from './ResumeCard'
import { motion } from 'framer-motion'

const Experience = () => {
  return (
    <motion.div 
     initial={{opacity:0}}
      animate={{opacity:1,transition:{duration:.5}}}
      className='w-full'>
                <div className='py-12 font-titleFont '>
                    <p className='text-sm tracking-wide text-designColor'>2018 - 2025</p>
                    <h2 className='text-4xl font-bold'>Experience</h2>
                </div>
                <div className='flex w-full md:justify-center'>
                    <div className='w-full sm:w-auto lg:w-2/3 xl:w-1/2  h-auto border-l-[6px] border-black border-opacity-30 flex flex-col  gap-10'>
                    <ResumeCard
        
                    title="Full Stack Development Intern"
                    subTitle="Next24Tech"
          
                    timeline="June 2024 - July 2024"
                    location="Remote"
                    des="Completed in-depth coursework in Data Structures & Algorithms, Full Stack Web Development,   and Database Systems. Focused on building scalable applications and exploring AI-driven solutions with practical, project-based learning."
        
                     />
                     
                     
        
                </div>
                </div>
    </motion.div>
  )
}

export default Experience