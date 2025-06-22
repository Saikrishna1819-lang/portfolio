import React from 'react'
import LeftBanner from './LeftBanner'
import RightBanner from './RightBanner'




const Banner = () => {
    
  return (
    <section id="home" className='w-full  lgl:pt-10 pb-20 flex  flex-col gap-5 lgl:gap-10 lgl:flex-row  border-b-[1px] border-b-black'>
        <LeftBanner/>  
        <RightBanner/>
        
    </section>
  )
}

export default Banner