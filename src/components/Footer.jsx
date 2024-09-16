import React from 'react'
import BG from '../assets/footer-bg.png'
import Age from '../assets/age.svg'
import Logo1 from '../assets/boggart-logo.svg'
import Logo2 from '../assets/iri-logo.svg'


export const Footer = () => {
  return (
    <div style={{
        backgroundImage: `url(${BG})`, 
    }}
    className='max-w-screen-3xl bg-cover bg-center bg-no-repeat mx-auto py-12 relative'>

        <div className='flex flex-col items-center justify-center mx-auto z-30 '>
            <img src={Age} className='z-30 py-6'/>
            <h3 className='text-[#233041] text-center font-medium text-xl font-roboto sm:pb-16 pb-8'>
                Информационная продукция для людей, <br className='sm:flex hidden'/>
                достигших возраста шестнадцати лет
            </h3>
            <div className='flex flex-row items-end space-x-8 pb-6'>
                <button className='flex flex-col items-center justify-center text-center '> 
                    <img src={Logo1}/>
                </button>
                <button className='flex flex-col items-center justify-center text-center '> 
                    <img src={Logo2}/>
                </button>
            </div>
            <button><h4 className='text-[#AF2710] font-normal text-base text-center font-roboto '>Политика конфиденциальности</h4></button>
            <h4 className='text-[#233041] font-normal text-sm font-roboto py-6 text-center'>© Мифы Поволжья, 2024. <br className='sm:hidden flex'/> Все права защищены.</h4>
        </div>
    </div>
  )
}
