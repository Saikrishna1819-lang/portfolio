import React from 'react'

const ResumeCard = ({title,subTitle,result,timeline,location,des}) => {
  return (
    <div className='flex w-full md:w-[500px] lg:w-full group'>
        <div className='w-10 h-[6px] bgOpacity mt-16 relative'>
            <span className='absolute flex items-center justify-center w-5 h-5 bg-black rounded-full -top-2 -left-3 bg-opacity-60'>
                <span className='inline-flex w-3 h-3 duration-300 rounded-full bg-bodyColor group-hover:bg-designColor'></span>
            </span>
        </div>
        <div className='flex flex-col justify-center w-full gap-2 px-4 py-4 duration-300 bg-black rounded-lg lgl:px-10 lgl:py-10 lgl:gap-10 bg-opacity-20 hover:bg-opacity-30 shadow-shadowOne'>
            <div className='flex flex-col justify-between gap-3 lgl:flex-row'>
                <div>
                    <h1 className='text-lg font-semibold text-gray-300 duration-300 lgl:text-2xl group-hover:text-white '>{title}</h1>
                    <h4 className='mt-2 text-sm text-gray-400 duration-300 group-hover:text-white'>{subTitle}</h4>
                </div>
                {result&&<div className='' >
                    <p className='flex items-center justify-center w-20 h-10 text-sm font-medium bg-black bg-opacity-25 rounded-lg item-center text-designColor shadow-shadowOne'>{result}</p>
                </div>}
            </div>
            <div className='flex items-center gap-1'>
                <h4 className='text-sm text-gray-200 lgl:text-base group-hover:text-gray-100'>{timeline}</h4>
                <span className='font-bold text-md group-hover:text-gray-100'>| </span>
                
                <h4 className='text-sm text-gray-200 lgl:text-base group-hover:text-gray-100'>{location}</h4>
            </div>
            <div>
                <p className='text-sm text-gray-400 lgl:text-base group-hover:text-gray-300'>{des}</p>
            </div>
        </div>
    </div>
  )
}

export default ResumeCard