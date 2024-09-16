import React, { useEffect, useState } from 'react';
import MainButton from './MainButton';
import Logo from '../assets/Logo_MP.svg'
import Pattern from '../assets/separation-pattern.png'
import Pattern2 from '../assets/separation-pattern2.svg'
import VK from '../assets/vk2.svg'
import TG from '../assets/tg2.svg'
import Square from '../assets/square.svg'
import CloseButton from '../assets/closeButton.svg'
import OpenButton from '../assets/openButton.svg'

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640 && isModalOpen) {
        setIsModalOpen(false);
        document.body.style.overflow = ''; 
      }
    };

    window.addEventListener('resize', handleResize);

    if (isModalOpen) {
      document.body.style.overflow = 'hidden'; 
    } else {
      document.body.style.overflow = ''; 
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      document.body.style.overflow = ''; 
    };
  }, [isModalOpen]);

  return (
    <>
      <header className='fixed top-0 w-full z-50 '>
        <div className={`gradient-header w-full absolute inset-0 ${isModalOpen ? 'hidden' : 'flex'}`}></div>
        <nav className="lg:scale-100 scale-75 container flex flex-row items-center justify-end sm:justify-center mx-auto py-4 lg:max-w-screen-lg text-2xl font-normal text-nowrap text-white">
          <ul className="mx-auto z-20 items-center justify-between sm:flex hidden">
            <img src={Square}/>
            <MainButton title={'Играть'} classes={'px-24'} />
            <img src={Square}/>
            <MainButton title={'Об игре'} classes={'px-24'} />
            <img src={Square}/>
            <MainButton title={'Поддержка'} classes={'px-20'} />
            <img src={Square}/>
          </ul>
          <button onClick={toggleModal} className="sm:hidden z-50 flex flex-col space-y-2 p-2">
            <img src={isModalOpen ? CloseButton : OpenButton}/>
          </button>
        </nav>
      </header>


      {isModalOpen && (
        <div className="fixed inset-0 bg-burger-menu z-40 sm:hidden flex justify-center overflow-y-scroll">
          <div className="flex flex-col justify-start items-center pt-12">
            <img draggable={false} src={Logo} className='drop-shadow-4xl py-12'/>
            <ul className="flex flex-col items-center space-y-6 text-2xl font-normal text-nowrap text-white pb-12">
              <li className='flex items-center'>
                <img src={Square}/>
                <MainButton title={'Играть'} classes={'px-24'} />
                <img src={Square}/>
              </li>
              <li className='flex items-center'>
                <img src={Square}/>
                <MainButton title={'Об игре'} classes={'px-24'} />
                <img src={Square}/>
              </li>
              <li className='flex items-center justify-between'>
                <img src={Square}/>
                <MainButton title={'Поддержка'} classes={'px-20'} />
                <img src={Square}/>
              </li>
              <li className='flex flex-row items-center space-x-6'>
                <button><img src={VK}/></button>
                <button><img src={TG}/></button>
              </li>
              <div className='relative z-20 overflow-hidden flex items-center justify-center mx-auto'>
                <img 
                  src={Pattern} 
                  className="z-10  w-full "
                />
                <img src={Pattern2} className='absolute z-20 sm:scale-100 scale-75'/>
            </div>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
