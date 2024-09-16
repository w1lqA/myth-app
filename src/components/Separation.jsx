import React from 'react'
import Pattern from '../assets/separation-pattern.png'
import Pattern2 from '../assets/separation-pattern2.svg'
export const Separation = () => {
  return (
    <div className='relative z-20 overflow-hidden flex items-center justify-center pb-24 mx-auto bg-main'>
        <img draggable={false}
          src={Pattern} 
          className="z-10  w-full "
        />
        <img draggable={false} src={Pattern2} className='absolute z-20 sm:scale-100 scale-50'/>
    </div>
  )
}

