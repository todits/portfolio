import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = (props) => {
   const links = [
      {
         id: 1,
         child: (
            <>
               LinkedIn <FaLinkedin size={30} />
            </>
         ),
         href: "https://www.linkedin.com/in/daryl-onlayao-79a49527a/",
         style: "rounded-tr-md",
      },
      {
         id: 2,
         child: (
            <>
               GitHub <FaGithub size={30} />
            </>
         ),
         href: "https://www.linkedin.com/in/daryl-onlayao-79a49527a/",
      },
      {
         id: 3,
         child: (
            <>
               Mail <HiOutlineMail size={30} />
            </>
         ),
         href: "mailto:onlayao@gmail.com",
      },
      {
         id: 4,
         child: (
            <>
               Resume <BsFillPersonLinesFill size={30} />
            </>
         ),
         href: "/CV and Portfolio.pdf",
         style: "rounded-br-md",
         download: true,
      },
   ];
   return (
      <div className="flex flex-col top-[35%] left-0 justify-center z-50 fixed">
         <ul className="">
            {links.map(({ id, child, href, style, download }) => (
               <li
                  key={id}
                  className={
                     "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] bg-custom-third hover:rounded-tr-md hover:rounded-br-md duration-300 hover:ml-[0px]" +
                     " " +
                     style
                  }
               >
                  <a
                     href={href}
                     className="flex justify-between items-center w-full text-white"
                     download={download}
                     target="_blank"
                     rel="noreferrer"
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
