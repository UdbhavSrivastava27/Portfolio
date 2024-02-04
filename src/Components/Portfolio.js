import React, { useEffect, useState } from "react";
import { AppText, portfolio } from "../Constants";
import SectionHeading from "../Shared/SectionHeading";
import { robo } from "./../assets/index";
import { FaGithub } from "react-icons/fa";
import { BsFillRocketTakeoffFill } from "react-icons/bs";

const Portfolio = () => {
  const [portfolioList, setPortfolioList] = useState([]);
  const [portfolioListOrg, setPortfolioListOrg] = useState([]);

  useEffect(() => {
    setPortfolioList(portfolio);
    setPortfolioListOrg(portfolio);
  }, []);
  const filterPortfolio = (type) => {
    if (type == "All") {
      setPortfolioList(portfolioListOrg);
    } else {
      const result = portfolioListOrg.filter((item) => item.type == type);
      setPortfolioList(result);
      console.log(result);
    }
  };
  return (
    <div className="mt-20 flex justify-center flex-col" id="portfolio">
      <div className="flex flex-row px-6 md:px-0 items-center justify-center">
        {/* <h1 className='text-[40px] font-bold'>{AppText.Creative}
        <span className='text-purple-600'>{AppText.Portfolio}</span></h1> */}
        <SectionHeading
          firstTitle={AppText.Creative}
          secondTitle={AppText.Portfolio}
        />
        <img src={robo} className="w-[70px] ml-5 animate-bounce" alt="robo img"/>
      </div>

      <p className="p-2 m-2 mt-0 text-center font-bold md:-ml-8 text-lg text-slate-700">
        Explore a glimpse of my portfolio right here !
      </p>

      <div className="flex flex-row justify-evenly gap-4 px-4 md:px-72">
        <button
          onClick={() => filterPortfolio("All")}
          className="border-purple-600 border-2 
            text-purple-600 focus:text-white
            active:bg-purple-500 p-1 px-4 rounded-md
            focus:ring-violet-300 focus:bg-purple-600 focus:ring "
        >
          All
        </button>
        <button
          onClick={() => filterPortfolio("ui/ux")}
          className="border-purple-600 border-2 
            text-purple-600 focus:text-white
            active:bg-purple-500 p-1 px-4 rounded-md
            focus:ring-violet-300 focus:bg-purple-600 focus:ring "
        >
          UI/UX
        </button>
        <button
          onClick={() => filterPortfolio("website")}
          className="border-purple-600 border-2 
            text-purple-600 focus:text-white
            active:bg-purple-500 p-1 px-4 rounded-md
            focus:ring-violet-300 focus:bg-purple-600 focus:ring "
        >
          Web App
        </button>
      </div>
      <div
        className="grid grid-cols-2 items-center content-center md:grid-cols-3 lg:grid-cols-3
        md:px-24 lg:px-48 p-4 "
      >
        {portfolioList.map((item, index) => (
          <div
            className="p-2 flex flex-col m-2 rounded-lg bg-purple-100 relative overflow-hidden
                transition-all ease-in-out group hover:scale-110 cursor-pointer
                "
          >
            <img
              src={item.imageUrl}
              alt="Project photo"
              className="h-[180px] object-cover rounded-lg shadow-md shadow-gray-800"
              
            />
             
             
        <div className=' text-center'>

            <h1 className="text-[14px] group-hover:scale-110 mt-2 text-center  font-bold">
              {item.title}
            </h1>
            <h1 className="text-[12px] text-gray-500 px-6 pb-3">{item.desc}</h1>

            <div className="absolute inset-0 bg-opacity-70 backdrop-filter backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">

            <div className="flex justify-center space-x-10 font-semibold ">
              <a
                href={item.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={50} className="shadow-md shadow-gray-500 rounded-full"/>
                <p className=" text-slate-400 mt-2 font-thin">Github</p>
              </a>
              <a
                href={item.deployLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsFillRocketTakeoffFill  size={50} />
                <p className=" text-slate-400  font-thin mt-2">Project</p>
              </a>
            </div>
          </div>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
