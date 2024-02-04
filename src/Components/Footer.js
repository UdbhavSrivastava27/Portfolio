import React from 'react'
import { AppText } from '../Constants'
import { footerBanner } from '../assets'
import { FaArrowCircleUp } from "react-icons/fa";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const Footer = () => {
  return (
    <div className='bg-gradient-to-t from-slate-500 to-white flex items-center -mt-10 md:-mt-5 '>
       <ScrollLink
    to='navbar'
    spy={true}
    smooth={true}
    offset={-70} // Adjust the offset based on your layout
    duration={1000} // Adjust the duration of the scroll
    
  >
     <FaArrowCircleUp className=' absolute  mr-4 md:mr-20 right-0 shadow-xl shadow-slate-600 rounded-full   text-2xl md:text-4xl lg:text-6xl animate-bounce' />
  </ScrollLink>
    <div className='mt-10  items-center flex flex-col  '>
   
      
        <img className=' rounded-md w-3/4 mt-10 md:mt-18 mb-5' src={footerBanner} alt='footer banner'/>
       
        <h1 className='text-black text-[15px] mb-5'>{AppText.copywriteText}</h1>
        
    </div>
     
    </div>
  )
}

export default Footer
