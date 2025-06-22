import React from 'react'

const Title = ({title,des}) => {
  return (
 
     <div className='flex flex-col gap-4 font-titleFont'>
        {title&&<h3 className='text-sm font-light tracking-wide uppercase text-designColor'>{des}</h3>
}
        <h1 className='text-4xl font-bold text-center text-gray-300 capitalize md:text-5xl'>{title}</h1>

    </div>
 
  )
}

export default Title