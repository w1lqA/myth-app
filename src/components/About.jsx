import React from 'react'
import AboutBG from '../assets/bg-about.jpg'
import RightComposition from '../assets/right-composition-about.png'
import LeftComposition from '../assets/left-composition-about.png'
import BottomRightComposition from '../assets/bottom-right-composition-about.png'
import LeftChar from '../assets/left-char-about.png'
import LeftChar2 from '../assets/left-char-about2.png'
import RightChar1 from '../assets/right-char1-about.png'
import RightChar2 from '../assets/right-char2-about.png'
import DescriptionBG from '../assets/bg-description-about.svg'
import DescriptionBG2 from '../assets/bg-description-about2.svg'

import Square from '../assets/square.svg'


export const About = () => {
  return (
<div className='bg-main max-w-screen-3xl mx-auto sm:pb-48 pb-64 relative z-20'>
    <div className='relative flex justify-center items-center max-w-screen-xl mx-auto'>
        <img src={LeftChar} 
            className='md:flex hidden absolute inset-0 z-30 self-end justify-self-start 
            xl:w-[26rem] w-80 xl:translate-x-20 translate-x-8 translate-y-12'/>
        <img src={LeftChar2} 
            className='md:hidden flex absolute inset-0 z-30 self-end justify-self-start 
            w-36 xl:translate-x-20 sm:translate-x-8 translate-y-12'/>
        <img src={RightChar1} 
            className='transform scale-x-[-1] absolute inset-0 z-30 self-end justify-self-end 
            xl:w-60 w-48 xl:-translate-x-72 md:-translate-x-32 sm:-translate-x-40 -translate-x-16 translate-y-16'/>
        <img src={RightChar2} 
            className='absolute scale-x-[-1] inset-0 z-30 self-end justify-self-end 
            xl:w-40 w-32 xl:-translate-x-48 sm:-translate-x-12 translate-y-16'/>
        <div className='absolute z-40 flex md:hidden'>
            <div className='lg:scale-100 scale-[85%] sm:translate-y-48 translate-y-64 relative overflow-hidden flex items-center justify-center max-w-screen-lg'>
                <img 
                    src={DescriptionBG} 
                    className=" absolute inset-0 w-full object-contain"
                />

                <p className="text-center relative z-10 text-secondary xs:text-xl text-lg font-normal p-12 xs:pt-6 pt-3">
                    В игре <br />
                    «Мифы Поволжья» <br />
                    все по-настоящему. <br />
                    Здесь живут люди простые, <br />
                    да честные — те, кто <br />
                    в твоем мире русскими, мордвой,<br />
                    татарами и чувашами зовется.<br />
                    Помогай им за правду сражаться, <br />
                    нечистую силу побеждать да память <br />
                    родовую воскрешать!
                </p>
            </div>
        </div>
        <div 
            style={{
                backgroundImage: `url(${AboutBG})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundPositionX: 'right',
            }} 
            className='relative clipped-background w-full flex justify-center items-end max-w-screen-lg 
                lg:py-24 sm:py-12 py-6
                xl:mx-0 mx-6'>
            
            <img src={LeftComposition} 
                className='absolute inset-0 self-end justify-self-start w-[29rem] 
                lg:translate-x-0 -translate-x-24 sm:translate-y-0 -translate-y-16 hidden xs:flex'/>
            <img src={RightComposition} 
                className='absolute inset-0 self-end justify-self-end -translate-y-10 
                lg:w-96 w-72'/>
            <img src={BottomRightComposition} 
                className='absolute inset-0 self-end justify-self-end 
                lg:w-96 w-72'/>
            
            <div className='opacity-0 md:opacity-100 lg:scale-100 scale-[85%] relative overflow-hidden flex items-center justify-center max-w-screen-lg'>
                <img 
                    src={DescriptionBG} 
                    className=" absolute inset-0 w-full object-contain"
                />

                <p className="text-center relative z-10 text-secondary text-xl font-normal p-12 pt-6">
                    В игре <br />
                    «Мифы Поволжья» <br />
                    все по-настоящему. <br />
                    Здесь живут люди простые, <br />
                    да честные — те, кто <br />
                    в твоем мире русскими, мордвой,<br />
                    татарами и чувашами зовется.<br />
                    Помогай им за правду сражаться, <br />
                    нечистую силу побеждать да память <br />
                    родовую воскрешать!
                </p>
            </div>
        </div>
    </div>
</div>

  )
}
