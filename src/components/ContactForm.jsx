import React, { useState } from 'react'
import Square from '../assets/square.svg'
import ButtonBG2 from '../assets/button-bg3.png'

export const ContactForm = () => {

    const [formData, setFormData] = useState({name: '', email: '', message: ''})
    const handleDataChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        console.log(formData)
        e.preventDefault();
        fetch('http://212.67.15.87/api/send-message', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.error(err));
      };
    
    return (
    <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center space-y-6 font-roboto mx-auto max-w-max'>
        <input 
            value={formData.name}
            onChange={handleDataChange} type="text" id="name" name="name" 
            className="bg-[#291F1C] text-[#E8A877] placeholder:text-[#E8A877] w-full py-4 px-8 text-base font-normal outline-none contact-form-clip" placeholder={'Ваше имя'}/>
        <input 
            value={formData.email}
            onChange={handleDataChange} type="text" id="email" name="email" 
            className="bg-[#291F1C] text-[#E8A877] placeholder:text-[#E8A877] w-full py-4 px-8 text-base font-normal outline-none contact-form-clip" placeholder={'Email'}/>
        <textarea
            value={formData.message}
            onChange={handleDataChange}
            rows="1"
            id="message"
            name="message"
            className="bg-[#291F1C] placeholder:text-[#E8A877]  text-[#E8A877] w-full py-4 px-8 text-base font-normal outline-none contact-form-clip "
            placeholder="Ваш текст">
        </textarea>
        <div className="relative w-full flex items-center justify-center">
            <img 
                src={Square} 
                className='absolute -left-4 z-30'
                alt="Square"
            />
            <button type="submit" className="relative overflow-hidden flex items-center justify-center w-full xs:px-40 px-28"> 
                <img  
                    draggable={false}
                    src={ButtonBG2} 
                    className="absolute inset-0 w-full h-full object-contain"
                    alt="Button Background"
                />
                <p className="text-center z-20 text-white text-2xl py-4">Отправить</p>
            </button>
            <img 
                src={Square} 
                className='absolute -right-4 z-30'
                alt="Square"
            />
        </div>  
    </form>
  )
}
