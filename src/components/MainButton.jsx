import React from "react";
import ButtonBG from '../assets/button-bg.png'

const MainButton = ({title, classes}) => {
    return (
    <button className={`relative overflow-hidden flex items-center justify-center ${classes}`}> 
        <img  
            draggable={false}
            src={ButtonBG} 
            className="absolute inset-0 w-full h-full object-contain"
            alt="Button Background"
        />
        <p className="text-center z-20 text-white py-4">{title}</p>
    </button>   
    )
}
export default MainButton;