import React, { useRef, useState } from 'react'
import Slider from 'react-slick'
import Arrow from '../assets/arrow.svg'
import Composition1 from '../assets/gallery-objects.png'
import Glow1 from '../assets/bg-gallery-glow.png'
import Glow2 from '../assets/glow2.png'
import Char from '../assets/char1-main.png'

export const Gallery = () => {
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
        draggable: true,
        swipe: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 200,
        dots: false,
        arrows: false,
        afterChange: (current) => {
            setCurrentSlide(current)
        }
    }

    return (
    <div className='bg-main max-w-screen-xl mx-auto pb-24 '>
            <h1 className='text-secondary font-normal text-2xl mx-auto text-center'>
        Полюбуйся на арт игровой!
    </h1>
      <Slider ref={slider} {...sliderSettings}>
            <div className='flex flex-col mx-auto bg-main'>
                <div className='flex flex-col justify-center items-center relative pb-24 pt-72 *:animate-in *:duration-700 *:fade-in *:zoom-in-50'>
                    <img draggable={false} src={Glow1} className='mx-auto absolute inset-0 self-center w-96 mix-blend-screen z-20 '/>
                    <img draggable={false} src={Glow2} className='mx-auto absolute inset-0 self-center w-96 z-10 mix-blend-screen '/>
                    <img src={Char} className='w-48 mx-auto absolute inset-0 self-center z-30'/>
                    <img draggable={false} src={Composition1} className='mx-auto w-96'/>
                </div>
            </div>
            <div className='flex flex-col mx-auto bg-main'>

                <div className='flex flex-col justify-center items-center relative pb-24 pt-72 *:animate-in *:duration-700 *:fade-in *:zoom-in-50'>
                    <img draggable={false} src={Glow1} className='mx-auto absolute inset-0 self-center w-96 mix-blend-screen z-20'/>
                    <img draggable={false} src={Glow2} className='mx-auto absolute inset-0 self-center w-96 z-10 mix-blend-screen '/>
                    <img src={Char} className='w-48 mx-auto absolute inset-0 self-center z-30'/>
                    <img draggable={false} src={Composition1} className='mx-auto w-96'/>
                </div>
            </div>
            <div className='flex flex-col mx-auto bg-main'>

                <div className='flex flex-col justify-center items-center relative pb-24 pt-72 *:animate-in *:duration-700 *:fade-in *:zoom-in-50'>
                    <img draggable={false} src={Glow1} className='mx-auto absolute inset-0 self-center w-96 mix-blend-screen z-20 '/>
                    <img draggable={false} src={Glow2} className='mx-auto absolute inset-0 self-center w-96 z-10 mix-blend-screen '/>
                    <img src={Char} className='w-48 mx-auto absolute inset-0 self-center z-30'/>
                    <img draggable={false} src={Composition1} className='mx-auto w-96'/>
                </div>
            </div>

      </Slider>
      <div className='flex flex-col mx-auto '>
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
                            <path d="M0 6L6 0L12 6L6 12L0 6Z" fill={i===CurrentSlide ? "#FFE8C3" : "#E8A877"} />
                        </svg>
                    </button>
                ))}
            </div>
            <button className='flex flex-col items-center scale-x-[-1] hover:drop-shadow-2xl drop-shadow-xl duration-200 transition-all ease-in-out' onClick={handleRButtonState}>
                <img src={Arrow} alt="Next" />
            </button>
        </div>
      </div>
    </div>
  )
}
