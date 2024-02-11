import React, { useState } from 'react'
import { us} from '../assets'
import { TbLocationShare } from 'react-icons/tb';
const NavBar = () => {

   const [toggle, setToggle] = useState(false);

  return (
    <>
    <div className='flex relative  justify-center' id='navbar'>
      <img src={us} className='h-24 m-4 absolute left-0'/>
      <div className=' p-3 mx-4 rounded-lg h-12 hidden md:flex items-center justify-center bg-slate-50 mt-5 border-2 shadow-md shadow-slate-300 
       
      ' >
        <ul className=' flex flex-row mx-4  text-lg '>
        
          <li className='mr-8 hover:scale-110 cursor-pointer hover:text-gray-500'>Home</li>
          <li className='mr-8 transition-all ease-in-out hover:scale-110 cursor-pointer
           hover:text-gray-500
          ' >
            <a href='/#about'>
           AboutMe</a>
           </li>
          <li  className='mr-8 transition-all ease-in-out hover:scale-110 cursor-pointer hover:text-gray-500' ><a href='/#skills'>
          Skills</a></li>
          <li className='mr-8 transition-all ease-in-out hover:scale-110 cursor-pointer hover:text-gray-500' >
            <a href='/#portfolio'>
           Portfolio</a>
           </li>
           <li className=' mr-8 transition-all ease-in-out hover:scale-110 cursor-pointer hover:text-gray-500' >
            <a href='/#content'>Content</a></li>
          <li className=' mr-2 transition-all ease-in-out hover:scale-110 cursor-pointer hover:text-gray-500' >
            <a href='/#contact'>Contact Me</a></li>
        </ul>
      </div>
      <div className='md:hidden lg:hidden -mr-[75%] '>
          
       {!toggle? 
       <svg xmlns="http://www.w3.org/2000/svg" fill="none"
       onClick={()=>setToggle(true)} viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 m-6  mr-6 cursor-pointer">
       <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
     </svg>
     :
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" 
     onClick={()=>setToggle(false)} viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 m-6 mr-32 cursor-pointer ">
     <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
   </svg>
   }
    {toggle?
    
    <div className=' relat'>
    <div className=' absolute  mr-20'>
      <ul className=' flex flex-col font-semibold bg-gray-200 p-4 rounded-md '>
          <li className=' p-2 transition-all ease-in-out hover:scale-110 cursor-pointer'><a href='/#home'>Home</a></li>
          <li className=' mt-2 p-2 transition-all ease-in-out hover:scale-110 cursor-pointer'><a href='/#about'>About Me</a></li>
          <li  className=' p-2 mt-2  transition-all ease-in-out hover:scale-110 cursor-pointer' ><a href='/#skills'>Skills</a></li>
          <li className=' p-2 mt-2 transition-all ease-in-out hover:scale-110 cursor-pointer' ><a href='/#portfolio'>Portfolio</a></li>
          <li className=' p-2 mt-2  transition-all ease-in-out hover:scale-110 cursor-pointer' ><a href='/contact'>Contact Me</a></li>
          
        </ul>
        </div>
        
        </div>:null}
      </div>
    
    </div>
    </>
  )
}

export default NavBar