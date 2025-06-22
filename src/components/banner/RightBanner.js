import React from 'react'
import { bannerImg } from '../../assets'
const RightBanner = () => {
  return (
     <div className='flex items-center justify-center w-full mt-10 xl:pl-20 lgl:w-1/2'> 
          
          <div className='w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md-w[400px] md:h-[400px] lg:w-[400px] mt-1 relative lg:h-[400px] lgl:w-[400px] lgl:h-[400px]  xl:w-[500px] xl:h-[500px] rounded-full flex items-center justify-center '>
             <div className='absolute  z-0  w-[280px] h-[280px] lg:w-[420px] lg:h-[420px] sm:w-[330px] sm:h-[330px] xl:w-[530px] xl:h-[530px] rounded-full bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne '></div>
             <img src={bannerImg} className=' w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px]  lg:w-full lg:h-full rounded-full z-10 ' alt="sai"></img>

           </div>
          </div>
           
  )
}

export default RightBanner