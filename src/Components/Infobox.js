import React from 'react'

const Infobox = (prop) => {
    const title = prop.title;
    const current = prop.current;
    const previous = prop.previous;

  return (
    <div style={{ contentVisibility: 'auto' }} className='rounded-2xl block bg-[#1c1f4a] justify-around -mt-[38px] hover:bg-[#6f76c8] hover:cursor-pointer sm:flex sm:justify-between sm:pb-3'>
        <div className='mt-[30px] ml-[30px] sm:ml-[35px] '>
            <h3 className='text-lg text-white '>{title}</h3>
            <h1 className='text-5xl mb-0 mt-[30px] font-semibold text-white sm:text-3xl'>{current}hrs</h1>
        </div>
        <div className='text-[#6f76c8] mt-[30px] sm:mr-2 sm:pr-[8px] sm:mt-[35px]'>
            <svg width= '21' height='5' className='float-right -mt-[110px] mr-[30px] sm:mt-2 sm:mr-0' >
            <path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fillRule="evenodd"/>
            </svg>

            <h5 className='ml-[30px] -mt-4 text-[#bdc1ff] pb-2 text-sm sm:mt-16 sm:pb-0 sm:text-[0.8rem]'>Last Week - {previous}hrs</h5>
        </div>
    </div>
  )
}

export default Infobox