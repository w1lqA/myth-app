import React, { useRef, useState } from 'react'
import BG from '../assets/slider-bg2.png'
import Arrow from '../assets/arrow.svg'
import Pic1 from '../assets/sliderPic.jpg'

import PicOverlayLeft from '../assets/sliderPicOverlayLeft.png'
import PicOverlayRight1 from '../assets/sliderPicOverlayRight1.png'
import PicOverlayRight2 from '../assets/sliderPicOverlayRight2.png'
import PicOverlayRight3 from '../assets/sliderPicOverlayRight3.png'

import Pic2 from '../assets/sliderPic2.jpg'
import Pic2overlay from '../assets/2_sliderPicOverlay.png'
import InventoryUI from '../assets/2_sliderPicOverlayInventory.svg'
import InventoryItem1 from '../assets/2_sliderPicOverlayItem1.png'
import InventoryItem2 from '../assets/2_sliderPicOverlayItem2.png'

import Pic3 from '../assets/bg-about.jpg'
import Pic3Composition1 from '../assets/right-composition-about.png'
import Pic3Composition2 from '../assets/3_sliderPicOverlayBG.png'
import Pic3Composition3 from '../assets/bottom-right-composition-about.png'
import Pic3Char1 from '../assets/right-char1-about.png'
import Pic3Char2 from '../assets/right-char2-about.png'
import Pic3Char3 from '../assets/left-char-about2.png'
import Pic3Char4 from '../assets/3_sliderPicOverlayChar.png'


import Slider from 'react-slick'

export const SliderSection = () => {
    const SlidesAmount = 3
    const slider = useRef(null)
    const [CurrentSlide, setCurrentSlide] = useState(0)
    const handleLButtonState = () => {
        slider?.current?.slickPrev()
        setCurrentSlide(CurrentSlide>0 ? CurrentSlide-1 : SlidesAmount-1-CurrentSlide)
    }

    const handleRButtonState = () => {
        slider?.current?.slickNext()
        setCurrentSlide(CurrentSlide< SlidesAmount-1 ? CurrentSlide+1 : 0)
    }

    const sliderSettings = {
        draggable: false,
        swipe: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 200,
        dots: false,
        arrows: false,
    }
    const slides = [
        {
            description:
            (<>
                Колдуны и хранители, <br />
                духи и домовые, богатыри <br />
                и красавицы — кого только <br />
                не встретишь <br />
                в «Мифах Поволжья»!
            </>),
            composition:
            (<div className='relative flex flex-col items-center justify-center'>
                <div
                    style={{
                        backgroundImage: `url(${Pic1})`,
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                    className="inset-0 w-full clipped-background bg-cover bg-clip-padding z-10"
                >
                    <div className='md:px-72 py-48 sm:px-64 xs:px-48 px-32'></div>
                </div>
                <img
                    draggable={false}
                    src={PicOverlayLeft}
                    className='absolute inset-0 z-20 self-start justify-self-start md:w-72 w-48 md:-translate-y-6 translate-y-36 md:-translate-x-24 sm:translate-x-12 -translate-x-12'
                />
                <img draggable={false}
                    src={PicOverlayRight1}
                    className='absolute inset-0 z-30 self-end justify-self-center md:w-32 w-24 md:translate-y-24 translate-y-20 translate-x-6 scale-x-[-1]'
                />
                <img draggable={false}
                    src={PicOverlayRight2}
                    className='absolute inset-0 z-20 self-end justify-self-end md:w-72 w-48 translate-y-16 md:translate-x-0 sm:-translate-x-24 xs:-translate-x-3 translate-x-12 scale-x-[-1]'
                />
                <img draggable={false}
                    src={PicOverlayRight3}
                    className='absolute inset-0 z-30 self-end justify-self-end md:w-32 w-24 translate-y-16 md:translate-x-12 sm:-translate-x-12 xs:translate-x-6 translate-x-12 scale-x-[-1]'
                />
            </div>)
        },
        {
            description:
            (<>
                Сражайся и кастомизируй <br/>
                персонажа — а иногда <br/>
                и смекалку применяй, <br/>
                квесты проходи!
            </>),
            composition:
            (<div className='relative flex flex-col items-center justify-center'>
                <div
                    style={{
                        backgroundImage: `url(${Pic2})`,
                        backgroundPosition: '13% 100%',
                        backgroundRepeat: 'no-repeat',
                    }}
                    className="inset-0 w-full clipped-background bg-cover bg-clip-padding z-10"
                >
                    <div className='md:px-72 py-48 sm:px-64 xs:px-48 px-32'></div>
                </div>
                <img
                    draggable={false}
                    src={Pic2overlay}
                    className='absolute inset-0 z-20 self-start justify-self-center md:w-72 w-48 md:-translate-y-6 translate-y-36 md:-translate-x-24 sm:translate-x-12 -translate-x-12'
                />

                <div className='absolute inset-0 z-20 self-end justify-self-center translate-x-36 -translate-y-20 sm:scale-100 scale-75'>
                    <img draggable={false}
                        src={InventoryUI}
                        className=' w-44'
                    />
                    <img draggable={false}
                    src={InventoryItem1}
                    className='absolute inset-0 z-20 w-36 -translate-x-2 -translate-y-2'
                    />
                </div>

                <div className='absolute inset-0 z-20 self-end justify-self-center translate-x-36 translate-y-20 sm:scale-100 scale-75'>
                    <img draggable={false}
                        src={InventoryUI}
                        className=' w-44'
                    />
                    <img draggable={false}
                    src={InventoryItem2}
                    className='absolute inset-0 z-20 rotate-180 w-36 -translate-x-2 -translate-y-2'
                    />
                </div>
   
            </div>),

        },
        {
            description:
            (<>
                Узнавай новое о культуре <br/>
                России, о народных <br/>
                костюмах и приметах
            </>),
            composition:
            (<div className='relative flex flex-col items-center justify-center'>
                <div
                    style={{
                        backgroundImage: `url(${Pic3})`,
                        backgroundPosition: '40% 100%',
                        backgroundRepeat: 'no-repeat',
                    }}
                    className="inset-0 w-full clipped-background bg-cover bg-clip-padding z-10"
                >
                    <div className='md:px-72 py-48 sm:px-64 xs:px-48 px-32'></div>
                    <img src={Pic3Composition1} className='absolute inset-0 self-end justify-self-start z-20 scale-x-[-1] w-56'/>
                    <img src={Pic3Composition3} className='absolute inset-0 self-end justify-self-start z-20 scale-x-[-1] w-56'/>
                    <img src={Pic3Composition2} className='absolute inset-0 self-end justify-self-center z-10 w-full'/>
                </div>
                <img
                    draggable={false}
                    src={Pic3Char1}
                    className='absolute inset-0 z-30 self-end justify-self-start translate-y-20 sm:translate-x-0 -translate-x-20 md:w-48 w-36 '
                />
                <img
                    draggable={false}
                    src={Pic3Char2}
                    className='absolute inset-0 z-20 self-end justify-self-start translate-y-12 sm:translate-x-32 translate-x-6 md:w-28 w-20'
                />

                <img draggable={false}
                    src={Pic3Char3}
                    className='absolute inset-0 z-20 self-end justify-self-end sm:-translate-x-36 -translate-x-4 translate-y-16 scale-x-[-1] md:w-32 w-24'
                />
                <img draggable={false}
                    src={Pic3Char4}
                    className='absolute inset-0 z-30 self-end justify-self-end translate-y-20 sm:-translate-x-4 translate-x-16 scale-x-[-1] md:w-36 w-28'
                />
            </div>)
        }
    ]
    return (
        <div
            style={{
                backgroundImage: `url(${BG})`,
            }}
            className='max-w-screen-3xl bg-clip bg-center bg-no-repeat mx-auto relative flex flex-col py-12 mb-24'
        >
            <Slider ref={slider} {...sliderSettings}>
                {slides.map((slide,i) => (
                    <div className="relative justify-self-center z-20">
                    <div className='flex lg:flex-row mx-auto flex-col justify-center items-center lg:py-24 py-12'>
                        {slide.composition}
                        <div className='flex flex-col justify-end items-start col-span-5 lg:pl-24 lg:pt-0 pl-0 pt-32'>
                            <p className="lg:text-left text-center relative z-10 text-secondary2 text-3xl font-normal">
                                {slide.description}
                            </p>
                        </div>
                    </div>
                </div>
                ))
                }

            </Slider>

            <div className='z-30 mx-auto flex flex-row justify-between items-center space-x-6 pb-12'>
                <button className='flex flex-col items-center hover:drop-shadow-2xl drop-shadow-xl duration-200 transition-all ease-in-out' onClick={handleLButtonState}>
                    <img src={Arrow} alt="Prev" />
                </button>
                <div className='flex flex-row items-center justify-center space-x-4'>
                    {[...Array(3)].map((_, i) => (
                        <button key={i} onClick={() => {
                                slider.current.slickGoTo(i)
                                setCurrentSlide(i)
                            }} className='my-auto'>
                            <svg xmlns="http://www.w3.org/2000/svg" width={i===CurrentSlide ? 16 : 12} height={i===CurrentSlide ? 16 : 12} viewBox="0 0 12 12" fill="none">
                                <path d="M0 6L6 0L12 6L6 12L0 6Z" fill="#AF2710" />
                            </svg>
                        </button>
                    ))}
                </div>
                <button className='flex flex-col items-center scale-x-[-1] hover:drop-shadow-2xl drop-shadow-xl duration-200 transition-all ease-in-out' onClick={handleRButtonState}>
                    <img src={Arrow} alt="Next" />
                </button>
            </div>
        </div>
    )
}
