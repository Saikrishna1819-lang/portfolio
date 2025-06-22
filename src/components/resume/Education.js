import React from 'react'
import ResumeCard from './ResumeCard'
import { motion } from 'framer-motion'

const Education = () => {
  return (
    <motion.div 
      initial={{opacity:0}}
      animate={{opacity:1,transition:{duration:.5}}}
     className='w-full sm:px-5 md:px-0'>
                <div className='py-12 font-titleFont '>
                    <p className='text-sm tracking-wide text-designColor'>2018 - 2025</p>
                    <h2 className='text-3xl font-bold lgl:4xl'>Education</h2>
                </div>
                <div className='flex w-full md:justify-center'>
                    <div className='w-full sm:w-auto lg:w-2/3 xl:w-1/2   border-l-[6px] border-black border-opacity-30 flex flex-col  gap-10'>
                    <ResumeCard
        
                    title="Bachelor Of Technology in Information Technology"
                    subTitle="R.V.R. & J.C. COLLEGE OF ENGINEERING"
                    result="8.7 CGPA"
                    timeline="2021-2025"
                    location="Guntur, India"
                    des="Completed in-depth coursework in Data Structures & Algorithms, Full Stack Web Development,   and Database Systems. Focused on building scalable applications and , project-based learning."
        
                     />
                     
                      <ResumeCard
        
                    title="Higher Secondary School"
                    subTitle="Viveka Junior College"
                    result="96%"
                    timeline="2019-2021"
                    location="Tuni, India"
                    des="Completed the course in Mathematical Science with 96%. Started freelancing and got interested in web development"
        
                     />
                      <ResumeCard
        
                    title="Secondary School Education"
                    subTitle="Z.P.H.SCHOOL"
                    result="9.7"
                    timeline="2018-2019"
                    location="Mangavaram, India"
                    des="Learned good values,dedication and disciplne. Participated and won in several quiz competetitons"
        
                     />
                    
        
                </div>
                </div>
    </motion.div>
  )
}

export default Education