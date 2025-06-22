import React, { useState } from 'react'
import Title from '../layouts/Title'

import Education from './Education'
import Skills from './Skills'
import Experience from './Experience'

const Resume = () => {
    const [resumeData,setResumeData]=useState("Education")
    const componentMap={
        Education:<Education/>,
        Skills:<Skills/>,
        Experience:<Experience/>,

    }
  return (
    <section id="resume" className='w-full py-10 md:py-16 xl:py-20 border-b-[1px] border-b-black'>
        <Title title="My Resume"/>
        <div className='mt-5'>
            <ul className='grid justify-between w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:px-16 '>
                <li onClick={()=>{setResumeData("Education")}} className={`${resumeData==="Education"?"border-designColor rounded-lg":"border-transparent"} resumeLi`}>Education</li>
                <li onClick={()=>{setResumeData("Skills")}} className={`${resumeData==="Skills"?"border-designColor rounded-lg":"border-transparent"} resumeLi`} >Professional Skills</li>
                <li onClick={()=>{setResumeData("Experience")}} className={`${resumeData==="Experience"?"border-designColor rounded-lg":"border-transparent"} resumeLi`} >Experience</li>
            </ul>
        </div>
        {componentMap[resumeData]}
      

    </section>
  ) 
}

export default Resume