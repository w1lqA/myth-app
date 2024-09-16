import React, { useState } from 'react'

import VK from '../assets/VKTextLogo.svg'
import TG from '../assets/tg_logo.svg'
import ButtonBG from '../assets/button-bg2.png'
import { ContactForm } from './ContactForm'

export const Contacts = () => {

  return (
    <div className='bg-main max-w-screen-xl mx-auto pb-24 '>
        <div className='flex flex-col mx-auto'>
            <h1 className='text-secondary font-normal text-3xl pb-12 mx-auto text-center'>
                Где связь держать?
            </h1>
            <p className='text-center text-secondary font-roboto font-normal pb-12'>
                Присоединяйся к сообществам — <br />
                там новости свежие да легенды древние
            </p>
            <div className='flex md:flex-row flex-col md:space-x-6 md:space-y-0 space-x-0 space-y-6 mx-auto mb-16'>
                <button className="relative overflow-hidden flex items-center justify-center px-24"> 
                    <img  
                        draggable={false}
                        src={ButtonBG} 
                        className="absolute inset-0 w-full h-full object-contain"
                    />
                    <img draggable={false} src={VK} className='z-20 py-6'/>
                </button>   
                <button className="relative overflow-hidden flex items-center justify-center px-24"> 
                    <img  
                        draggable={false}
                        src={ButtonBG} 
                        className="absolute inset-0 w-full h-full object-contain"
                    />
                    <p className='z-20 py-6 flex flex-row items-center text-white text-xl font-roboto font-medium'><img src={TG} draggable={false} className='mr-2'/> Telegram</p>
                </button>   
            </div>
            <div>
                <p className='text-center text-secondary font-roboto font-normal pb-8'>
                    Или напрямую нам пиши — отзывы, предложения <br />
                    да слова ласковые
                </p>
                <ContactForm/>
            </div>
        </div>
    </div>
  )
}
