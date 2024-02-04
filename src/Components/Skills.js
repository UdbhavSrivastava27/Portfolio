import React from 'react'
import '../assets'
import { skill } from '../assets'
import '../Constants'
import { AppText, skillsList } from '../Constants'

const Skills = () => {
  return (
    <div className='mt-10' id="skills">
        <div className='flex flex-row justify-center items-center'>
        <img src={skill} className="w-[90px] mb-8 hover:animate-bounce " alt='skils img'/>
        <h1 className='text-[40px] font-bold'>{AppText.Skills}<span className='text-purple-600'>{AppText.Experties}</span></h1>
        </div>
        <div className='flex flex-col md:flex-row  justify-evenly px-8 md:px-0  '>
          <div className='grid grid-cols-2 md:grid-cols-5 gap-10  items-center'>
            {skillsList.map((item, index)=>(
              < div className='flex flex-col items-center'>
                <div className='w-[60px] md:w-[100px] group transition ease-in-out delay-100 group hover:scale-125 bg-purple-50
                 p-5 rounded-full' >
                    <img src={item.icon} 
                    className="w-[80px] hover:animate-spin" alt='icons img'/>
                    
                </div>
                <h1 className=' p-4 group hover:font-semibold text-lg'>{item.name}</h1>
                </div>
               
            ))}
                </div>
                
        </div>
    </div>
  )
}

export default Skills
