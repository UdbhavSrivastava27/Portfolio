import React from 'react'
import { AppText, aboutSection } from '../Constants'
import { laptop, wave } from '../assets'

const AboutMe = () => {
  return (
    <div id='about'>
      <img src={wave} className='w-full absolute ' alt='wave img'/>
      <img src={laptop} className=' absolute  mt-[-30px] md:mt-[-100px] w-[150px] md:w-[200px]' alt='laptop img' />
      <div className='h-auto pb-5 -mt-4 bg-purple-600  w-full object-cover'>
      <h2 className='text-[50px] font-bold text-black md:text-white text-center pt-24 md:pt-14 '>{AppText.About }
      <span className='text-black p-2 '>{AppText.Me}</span>
      </h2>

      <h2 className=' text-lg md:text-xl text-center text-slate-200 mt-10 px-10 md:px-64 lg:px-80 mb-10'>{AppText.aboutMeDescripion}</h2>
      </div>
      <div className='flex flex-col mt-[-60px] md:flex-row justify-around  items-center px-32'>
        {
          aboutSection.map((item,index)=>(
            <div className='group hover:bg-purple-600 mb-5 p-7 rounded-lg '>
              <img src={item.image} alt='item img' className='w-[230px] h-[230px] object-cover rounded-lg '/>
              <div className='w-[230px] pb-[20px]'>
              <h2 className='font-bold text-center group-hover:text-white'>{item.title}</h2>
              <h2 className='text-[12px] text-gray-500 group-hover:text-gray-200'>{item.desc}</h2>
              </div>
            </div>
          ))
        }
      </div>

        
    </div>
  )
}

export default AboutMe