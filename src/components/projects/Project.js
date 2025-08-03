import React from 'react'
import Title from '../layouts/Title'
import ProjectCard from './ProjectCard'
import {projectOne,projectTwo,projectThree} from "../../assets/index"


const Project = () => {
  return (
   <section id="project" className='w-full   py-10  md:py-20  border-b-[1px] border-b-black'>
   <div className='flex justify-center mb-10'>
     <Title title="My Projects"  />

   </div>
   <div className='grid grid-cols-1 gap-10 px-2 md:grid-cols-2 auto-rows-auto xl:grid-cols-2 xl:gap-14'>
  <ProjectCard 
  title="CINE-BOT"
  github="https://github.com/Saikrishna1819-lang/netflix-gpt"

  link="https://netflix-gpt-sai.vercel.app"
  des="Developed a movie browsing web app with a responsive UI using Tailwind CSS and React. Integrated GPT-based functionality to deliver intelligent movie recommendations, along with real-time dynamic search features for efficient movie discovery."
src={projectOne}
    />
    <ProjectCard 
  title="DEVTINDER"
  github="https://github.com/Saikrishna1819-lang/DevTinder-web"
  link="https://devtinder-web-am0y.onrender.com"
  des="DevTinder is a platform for developers to connect and collaborate on projects.
Users can swipe through profiles, send requests, and chat in real-time.
It helps showcase skills and build a strong developer network."
src={projectTwo}
    />
    <ProjectCard 
  title="Prescripto"
  github="https://github.com/Saikrishna1819-lang/Prescripto"
  link="https://prescripto-0w3n.onrender.com"
  des="Developed a full-stack doctor appointment platform where patients can book appointments with doctors based on
 availability.
 • Implemented user roles for Admin, Doctor, and Patient with secure JWT-based authentication "
  src={projectThree}
/>

     
    
 
  
   </div>
    </section>
  )
}

export default Project