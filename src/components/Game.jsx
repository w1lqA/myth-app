import React from 'react'
import Pattern from '../assets/Subtract.svg'
import Square from '../assets/square.svg'

import {isMobile} from 'react-device-detect';


export const Game = () => {
    if(!isMobile){
        return (
            <div className='bg-main gradient-game max-w-screen-3xl mx-auto pb-24 '>
              <div className='flex flex-col mx-auto items-center'>
                <h1 className='text-secondary font-normal text-4xl mx-auto flex flex-row space-x-6'>
                  <img src={Pattern} alt="Pattern" />
                  <span>Играй прямо здесь!</span>
                  <img src={Pattern} alt="Pattern" className='rotate-180' />
                </h1>
        
                <div className='overflow-hidden relative w-full flex justify-center items-center max-w-screen-lg my-24'>
                  <img src={Square} className='absolute inset-0'/>
                  <img src={Square} className='absolute inset-0 justify-self-end'/>
                  <img src={Square} className='absolute inset-0 self-end justify-self-end'/>
                  <img src={Square} className='absolute inset-0 self-end'/>
                  <iframe
                    src="https://boggart-games-bundles.hb.ru-msk.vkcloud-storage.ru/MipoBuild/index.html"
                    width="100%"
                    height="600px"
                    allowFullScreen
                    title="Game"
                    className='overflow-hidden clipped-background'
                  ></iframe>
                </div>
              </div>
            </div>
          )
    }
    else{
        return(
            <div></div>
        )
    }

}
