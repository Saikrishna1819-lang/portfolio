import React from 'react'
import {useTypewriter,Cursor} from "react-simple-typewriter"
import {FaLinkedin,FaReact} from "react-icons/fa"
import { SiMongodb,SiExpress,SiNodedotjs} from "react-icons/si"


const LeftBanner = () => {
    const [text]=useTypewriter({
        words:["Professional Coder","Full Stack Developer"],
        loop:true,
        typeSpeed:20,
        deleteSpeed:10,
        delaySpeed:2000,
    })
  return (
         <div className='flex flex-col w-full gap-10 pt-10 md:gap-20 md:pt-20 md:pr-28 lg:pr-20 xl:pr-0 lgl:w-1/2'>
            <div className='flex flex-col gap-5' >
                <h4 className='text-lg font-normal'>WELCOME TO MY WORLD</h4>
                <h1 className='text-5xl font-bold text-white'>Hi, I'm {" "}
                    <span className='capitalize text-designColor '>Sai Krishna Poosarla</span>
                </h1>
                <h2 className='text-4xl font-bold text-white'>a <span>{text}</span>
                <Cursor
                cursorBlinking="false"
                cursorStyle="|"
                cursorColor='#ff014f'
                 />
                </h2>
                <p className='leading-6 tracking-wide text-white text-md font-bodyFont'>I’m a full-stack developer focused on building scalable web architectures and real-world applications using the MERN stack.
                     Proficient in <span className="text-lg text-designColor ">React.js , Node.js, MongoDB, and Express.js</span >, with hands-on experience in building responsive UIs with Tailwind CSS,
                     integrating REST APIs, and deploying full-stack apps with a strong emphasis on performance, security, and maintainability..</p>
    
    
            </div>
           <div className='flex flex-col justify-between gap-6 lgl:flex-row'>
             <div>
                <h2 className='mb-4 text-base uppercase font-titleFont'>Find me in</h2>
                <div className='flex gap-4'>
                    <span className='text-white bannerIcon'>
                        <a href="https://www.linkedin.com/in/sai-krishna-poosarla/"><FaLinkedin/></a>
                    </span>
                  
    
                </div>
            </div>
             <div>
                <h2 className='mb-4 text-base uppercase font-titleFont'>Best Skills On</h2>
                <div className='flex gap-4'>
                    <span className='text-white bannerIcon'>
                        <FaReact/>
                    </span>
                    <span className='text-white bannerIcon'>
                        <SiNodedotjs/>
                    </span>
                    
                    <span className='text-white bannerIcon'>
                        <SiExpress/>
                    </span>
                    <span className='text-white bannerIcon'>
                        <SiMongodb/>
                    </span>
                    
    
                </div>
            </div>
           </div>
    
    
            </div>
  )
}

export default LeftBanner