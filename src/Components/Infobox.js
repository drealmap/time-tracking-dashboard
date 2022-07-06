import React from 'react'

const Infobox = (prop) => {
    const title = prop.title;
    const current = prop.current;
    const previous = prop.previous;

  return (
    <div className='info_box'>
        <div className='left_side'>
            <h3>{title}</h3>
            <h1>{current}hrs</h1>
        </div>
        <div className='right_side'>
            <svg width= '21' height='5' className='ellipses' >
            <path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fillRule="evenodd"/>
            </svg>

            <h5>Last Week - {previous}hrs</h5>
        </div>
    </div>
  )
}

export default Infobox