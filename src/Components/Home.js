import React from 'react'
import { AppText } from '../Constants'
import { homeImage, profilePhoto } from '../assets'
import { FaCloudDownloadAlt } from "react-icons/fa";
import Typewriter from 'typewriter-effect'
import SocialLinks from './SocialLinks';
const Home = () => {


  
  return (
    <div id="home" className=' mt-10 px-4 md:px-24  flex flex-col md:flex-row items-center'>
      
      <div className='md:-mt-28'>
      <h1 className='text-5xl  font-bold'>{AppText.hello}</h1>
      <h1 className='text-4xl font-bold py-2'>{AppText.Iam} 
      <span className='text-purple-600  '><Typewriter
  options={{
    strings: [AppText.Udbhav,AppText.UIUXDesigner, AppText.FrontedDeveloper,AppText.BackendDeveloper],
    autoStart: true,
    loop: true,
    
  }}
/></span></h1>

      


      <h1 className='text-gray-500'>{AppText.IntroDesc}</h1>
      <button className='bg-sky-500 p-2 px-3 rounded-md my-4 transition-all ease-in-out hover:scale-110 hover:bg-slate-500 flex flex-row' 
      onClick={() => window.open('/Resume.pdf', '_blank')}
      >
      Resume
      <span className='p-1'><FaCloudDownloadAlt/></span></button>
      </div>
      <div>
     <img className='w-70  rounded-full h-80 mt-10 m-20 ml-40 hidden  md:hidden lg:flex' src={profilePhoto} alt='profile photo'/>
     </div>
   
     <img className=' w-[400px] md:w-[500px]' src={homeImage} alt='img' />
    
    </div>
  )
}

export default Home