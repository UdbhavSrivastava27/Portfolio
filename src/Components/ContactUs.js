import React from 'react'
import { contactusbg, phone } from '../assets'
import { AppText } from '../Constants'
import SectionHeading from '../Shared/SectionHeading'
import SocialLinks from './SocialLinks'

function ContactUs() {
  return (
    <div id="contact" className='flex flex-col justify-center mt-20'>
        <div className='flex flex-row  justify-center '>
        <SectionHeading firstTitle={AppText.Contact} secondTitle={AppText.Us}/>
        <img src={phone} alt='phone img' className="w-[80px] ml-4"/>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 justify-evenly px-10 md:px-44  '>
            <img src={contactusbg} alt='contact us background' className="w-[300px] mr-10"/>
           <div className='w-full'>
            <form  action="https://getform.io/f/cfce4e03-0bc3-46bb-a5ff-97811ec07f33" method="POST">
           <div className='flex flex-col shadow-md hover:shadow-purple-300'
            
           >
           <label className='text-gray-400  '>Name</label>
            <input name='name' type="text"  placeholder='Your name'
             className='border-[1.5px] px-2 border-purple-300 
              hover:border-purple-500 rounded-md'  />
            </div>
            <div className='flex flex-col shadow-md hover:shadow-purple-300 '>
            <label className='text-gray-400 '>Email</label>
            <input name= 'email' type="text"  placeholder='yourname@gmail.com'
             className='border-[1.5px] px-2 border-purple-300 
              hover:border-purple-500 rounded-md'  />
            </div>
            <div className='flex flex-col'>
            <label className='text-gray-400 '>Message</label>
            <textarea type="text" rows={7} placeholder='Type your message here'
             className='border-[1.5px] px-2 hover:border-purple-500 border-purple-300 rounded-md'  />
           <button className='transition-all ease-in-out hover:scale-110 bg-purple-500 flex flex-row items-center justify-center text-[14px]  py-1 mt-5 text-white  rounded-md'>
           Let's Talk 
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-2 w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
</svg>

            </button>
            </div>
            
          
         
            </form>
           </div>
           
           
        </div>
        <SocialLinks/>
    </div>
  )
}

export default ContactUs
