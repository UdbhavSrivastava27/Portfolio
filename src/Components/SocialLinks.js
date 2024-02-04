import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const SocialLinks = () => {

    
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn
          <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/udbhav-srivastava-a9305321b/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Github
          <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/UdbhavSrivastava27",
    },
    {
      id: 3,
      child: (
        <>
          Mail
          <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:udbhavsrivastava.27@gmail.com",
      style:"rounded-br-md"
    },
  ];

  return (
    <div className="flex md:flex lg:flex flex-col top-[65%] md:top-[25%] lg:top-[35%] left-0 absolute md:fixed">
      <ul>
        {links.map(({id, child, href, style }) => (
          <li  key={id} className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] bg-gray-400 hover:ml-[-10px] duration-300  hover:rounded-md "+ " " + style}>
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              target="_blank"
            >
            {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
