import React from "react";
import { book, content, linkedinPost } from "../assets";
import { AppText } from "../Constants";
import SectionHeading from "../Shared/SectionHeading";
import { FaRegHeart, FaRegCommentDots, FaLinkedin } from "react-icons/fa";
import { TbLocationShare } from "react-icons/tb";
import { BiRepost } from "react-icons/bi";
import { RiArrowLeftSLine } from "react-icons/ri";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const Content = () => {
  return (
    <div className=" mt-28" id="content">
      <div
        className="flex flex-row  justify-center
            
           "
      >
        <img src={book} alt="book img" className=" w-32 -mt-16" />
        <SectionHeading
          firstTitle={AppText.Blog}
          secondTitle={AppText.Content}
        />
      </div>
      <h1 className="font-semibold text-xl text-center mt-4">Where Creativity Meets Coding Mastery 🚀</h1>
     
      <div className=" flex  flex-col md:flex-row justify-center  items-center">
        <img src={content} className="w-[400px] md:-ml-[350px] md:-mr-24"/>
      <RiArrowLeftSLine size={150} className=" hidden md:flex -mr-8 text-gray-600"/>
        <div className="mt-10 rounded-lg bg-gradient-to-t from-slate-300 to-purple-300  p-4 ">
        
          <div className="transition-all ease-in-out group hover:scale-105 rounded-md relative">
            <a
              href="https://www.linkedin.com/posts/udbhav-srivastava-a9305321b_javascript-interview-prep-kit-activity-7142096137749942273-SJoE?utm_source=share&utm_medium=member_desktop"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img 
                className="h-96 mb-5 shadow-md shadow-black 
               transition-all ease-in-out group hover:scale-110 rounded-md"
                src={linkedinPost} alt="linkedin post"
              />

              <div className="opacity-0 group-hover:opacity-100 absolute  top-0 right-0 bottom-0 left-0 flex items-center justify-center backdrop-filter backdrop-blur-sm">
                <p className="text-black  text-xl font-semibold">
                Gain insights on LinkedIn
                </p>
                <FaLinkedin size={50} className="text-blue-700" />
              </div>
            </a>
          </div>

          <div className="flex flex-row justify-between mx-8">
            <FaRegHeart
              size={30}
              className=" transition-all ease-in-out group hover:scale-125 hover:text-red-500"
            />
            <FaRegCommentDots size={30} className=" hover:text-blue-500" />
            <BiRepost
              size={35}
              className="transition-all ease-in-out group hover:scale-125"
            />
            <TbLocationShare
              size={30}
              className="transition-all ease-in-out group hover:scale-125"
            />
          </div>
        </div>
        <MdOutlineKeyboardArrowRight size={150} className="-ml-8 text-gray-600 hidden md:flex"/>
      </div>
    </div>
  );
};

export default Content;
