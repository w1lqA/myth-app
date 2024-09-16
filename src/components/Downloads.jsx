import React from 'react'
import VK from '../assets/VK_Play_logo.svg'
import RU from '../assets/Ru_Store_logo.svg'
import Google from '../assets/Google_Play_2022_logo.svg'

export const Downloads = () => {
  return (
    <div className='bg-main max-w-screen-3xl mx-auto pb-24'>
        <div className='flex flex-col mx-auto'>
            <h1 className='text-secondary font-normal text-3xl pb-12 mx-auto text-center'>Скоро релиз обещан</h1>
            <div className='flex md:flex-row flex-col md:space-x-6 md:space-y-0 space-x-0 space-y-6 mx-auto '>
                <button className='px-8 py-1 flex flex-col items-center justify-center text-center bg-white rounded-xl'> 
                    <p>Доступно в</p>
                    <img src={VK}/>
                </button>
                <button className='px-8 py-1 flex flex-col items-center justify-center text-center bg-white rounded-xl'> 
                    <p>Доступно в</p>
                    <img src={RU}/>
                </button>
                <button className='px-8 py-1 flex flex-col items-center justify-center text-center bg-white rounded-xl'> 
                    <p>Доступно в</p>
                    <img src={Google}/>
                </button>
            </div>

        </div>
    </div>
  )
}
