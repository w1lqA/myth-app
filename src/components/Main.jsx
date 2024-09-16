import React from 'react'

import MainBG from '../assets/bg-main.jpg'
import Char1 from '../assets/char1-main.png'
import Char2 from '../assets/char2-main.png'
import ShadowMain from '../assets/shadow-main.png'
import DescriptionBG from '../assets/bg-description-main.svg'
import Logo from '../assets/Logo_MP.svg'


export const Main = () => {
  return (
    <main   
        style={{
            backgroundImage: `url(${MainBG})`,
            backgroundSize: 'cover', 

            backgroundRepeat: 'no-repeat', 
        }}
       className="relative mx-auto lg:max-w-screen-3xl lg:bg-[95%_100%] bg-[50%_100%]">
        <img draggable={false} src={ShadowMain} className="absolute w-full z-20 inset-0 self-end"/>
        <div className='relative container justify-between flex flex-col md:flex-row max-w-screen-xl mx-auto py-48
        lg:pr-32 md:pr-16 pr-0'>
            <div className="flex flex-row 
                md:justify-start items-start justify-center">
                <img draggable={false} src={Char1}
                    className="absolute z-10 md:translate-y-6 translate-y-48 animate-in duration-500 fade-in zoom-in-50
                    lg:w-96 md:w-72 sm:w-56 w-48 md:translate-x-0 -translate-x-20"/>
                <img draggable={false} src={Char2}
                    className="absolute scale-x-[-1] animate-in duration-700 fade-in zoom-in-50
                    lg:w-96 md:w-72 sm:w-56 w-48
                    lg:translate-x-80 md:translate-x-56 translate-x-20 md:translate-y-0 translate-y-48"/>
            </div>

            <div className="col-span-5 flex flex-col justify-center space-y-24 items-center *:animate-in *:duration-700 *:fade-in *:zoom-in-50">
                <img draggable={false} src={Logo} className='drop-shadow-4xl md:translate-y-0 -translate-y-16'/>
                <div className='drop-shadow-4xl relative overflow-hidden z-30 flex items-center justify-center md:translate-y-0 translate-y-32  sm:scale-100 xs:scale-90 scale-75'>
                    <img 
                    draggable={false}
                    src={DescriptionBG} 
                    className="absolute inset-0 w-full h-full object-contain"
                    />
                    <p className="text-center relative z-10 text-secondary text-2xl font-normal p-12 ">
                        Приключение в мире легенд <br /> 
                        мордвы, татар, русских <br />
                        и чувашей.</p>
                </div>
            </div>
        </div>
  </main>
  )
}

// <main   
// style={{
//     backgroundImage: `url(${MainBG})`,
//     backgroundSize: 'cover', 
//     backgroundPosition: 'center', 
//     backgroundRepeat: 'no-repeat', 
// }}
// className="relative container mx-auto pt-32 px-6 grid grid-cols-12 gap-6 max-w-screen-3xl">

// <div className="col-span-7 flex flex-col justify-end">
// <img src={Chars} alt="Characters" className="w-full h-full"/>

// <img
//     src={ShadowMain} 
//     className="absolute w-full inset-0 self-end"
// />

// </div>

// <div className="col-span-5 flex flex-col justify-center space-y-24 items-center">
// <img src={Logo} className='drop-shadow-4xl'/>
// <div className='drop-shadow-4xl relative overflow-hidden w-[360px] h-[180px] flex items-center justify-center'>
//     <img 
//     src={DescriptionBG} 
//     className="absolute inset-0 w-full h-full object-contain"
//     />
//     <p className="text-center relative z-10 text-secondary text-2xl font-normal p-12">Приключение в мире легенд мордвы, татар, русских и чувашей.</p>
// </div>
// </div>
// </main>