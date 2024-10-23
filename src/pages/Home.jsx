import React, { useContext } from "react";
import Profile from "../assets/profile2.png";
import "../styles/Home.css";
import background from "../assets/images/background.png";
import {
   FaFacebookSquare,
   FaLinkedin,
   FaFileAlt,
   FaGithub,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Button from "../components/Button";
import { SKILL_ITEMS } from "../records/records";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";

const socials = [
   {
      text: "Facebook",
      icon: (
         <FaFacebookSquare
            size={40}
            className="  z-20 max-sm:w-[30px] max-[1600px]:w-[30px]"
         />
      ),
      href: "https://www.facebook.com/todits123/",
   },
   {
      text: "Mail",
      icon: (
         <IoMdMail
            size={40}
            className=" z-20 max-sm:w-[30px] max-[1600px]:w-[35px]"
         />
      ),
      href: "mailto:onlayao@gmail.com",
   },
   {
      text: "LinkedIn",
      icon: (
         <FaLinkedin
            size={40}
            className="z-20 max-sm:w-[30px] max-[1600px]:w-[30px]"
         />
      ),
      href: "https://www.linkedin.com/in/daryl-onlayao-79a49527a/",
   },
   {
      text: "Git",
      icon: (
         <FaGithub
            size={45}
            className="self-center  z-20 max-sm:w-[30px] max-[1600px]:w-[30px]"
         />
      ),
      href: "https://github.com/todits",
   },
   {
      text: "Download CV/Resume",
      icon: (
         <FaFileAlt
            size={45}
            className="self-center  z-20 max-sm:w-[25px] max-[1600px]:w-[23px]"
         />
      ),
      download: true,
      href: "/CV and Portfolio.pdf",
   },
];

const Home = ({ onSelectNav }) => {
   const { theme, setSelectedNavBar, showSkillsList, setShowSkillsList } =
      useContext(ThemeContext);
   console.log(showSkillsList);

   const backgroundtext =
      theme === "light"
         ? "text-custom-secondary duration-300"
         : "text-white duration-300";

   const handleClick = () => {
      setSelectedNavBar("skills");
      setShowSkillsList(false);
   };
   return (
      <div name="home" className="flex h-screen w-full max-sm:h-full relative ">
         <img
            className="absolute z-0 h-full w-full object-cover opacity-70 min-h-screen"
            src={background}
         />

         <div className="min-h-screen max-sm:justify-between justify-start w-[100%] max-sm:pt-[40px] flex items-center  h-[100%] flex-col pt-[10vh]">
            <h2
               style={{ fontSize: "clamp(35px, 4.1vw, 80px)" }}
               className={`rise max-sm:text-[20px] max-sm:px-[20px] flex mb-[2%] pt-[20px] min-[1600px]:py-[50px] font-primary text-center leading-[35px] relative z-10 ${
                  theme === "light"
                     ? "text-custom-secondary duration-300 textshadow"
                     : "text-white duration-300 textshadowdark"
               }`}
            >
               PERSONAL PORTFOLIO
            </h2>

            <div className="w-[100%] h-[100%] max-sm:min-h-[80vh] max-sm:h-full flex justify-between max-sm:gap-[45px] flex-col relative ">
               <div className="flex px-[5%] mx-auto  h-[auto] max-sm:my-[10px] w-full max-w-screen-xl ">
                  <div className="showText max-w-screen-xl flex flex-col justify-center w-[60%] max-sm:w-[100%] ">
                     <h3
                        className={`text-outline max-sm:text-[20px] duration-300 text-[25px] min-[1600px]:text-[30px] font-bold -mb-[20px] z-20 ${
                           theme === "light"
                              ? "text-custom-secondary"
                              : "text-gray-100"
                        } `}
                     >
                        Hello and welcome! I'm
                     </h3>
                     <h2
                        className={`text-[52px] max-sm:text-[35px] max-sm:leading-[3.75rem] min-[1600px]:text-[60px] font-bold duration-300 text-custom-fourth ${
                           theme === "light"
                              ? "text-custom-fourth"
                              : "text-custom-primary"
                        }`}
                     >
                        DARYL LOUIE
                     </h2>
                     <h2
                        className={`text-[70px] min-[1600px]:text-[81px] min-[1600px]:-mt-7 font-bold max-sm:text-[47px] max-sm:-mt-7 text-custom-third -mt-10 ${backgroundtext}`}
                     >
                        ONLAYAO
                     </h2>
                     <div className={`pb-7`}>
                        <h3 className="pb-4 max-sm:text-[15px] max-sm:pb-2 max-sm:leading-4">
                           In this portfolio, I'm excited to showcase my journey
                           and the work that I've poured my heart into.
                        </h3>
                        <h3 className="pb-4 max-sm:text-[15px] max-sm:pb-2 max-sm:leading-4">
                           Each project you'll find here is a testament to my
                           commitment to excellence and my drive to exceed
                           expectations.
                        </h3>
                        <h3 className="max-sm:text-[15px] max-sm:leading-4">
                           <strong
                              className={`duration-300 ${
                                 theme === "light"
                                    ? "text-custom-secondary"
                                    : "text-custom-primary"
                              }`}
                           >
                              Thank you
                           </strong>{" "}
                           for joining me on this journey, and I hope you find
                           inspiration and excitement within these pages.
                        </h3>
                     </div>
                     <div className="flex flex-wrap gap-2 w-[80%] max-sm:w-[60%] max-sm:content-start max-sm:min-h-[200px]">
                        {SKILL_ITEMS.map(({ text, id, skill }) =>
                           skill ? (
                              <Link
                                 to={`skill/${skill}`}
                                 onClick={onSelectNav}
                                 key={id}
                              >
                                 <Button onClick={() => handleClick()}>
                                    {text}
                                 </Button>
                              </Link>
                           ) : null
                        )}
                     </div>
                  </div>
               </div>

               <div className="w-full flex justify-start">
                  <div className="min-w-screen-lg flex gap-5 max-sm:mb-0 mb-5 pl-[4%]">
                     {socials.map(({ text, icon, href, download }) => (
                        <a
                           href={href}
                           download={download}
                           target="_blank"
                           rel="noreferrer"
                           className={`flex gap-1 socialIconPair cursor-pointer relative ${backgroundtext}`}
                           key={text}
                        >
                           {icon}

                           <div
                              className={`min-[1600px]:text-[20px] socialIcon flex place-items-end z-0 max-sm:hidden font-bold text-[15px] whitespace-nowrap duration-300 ${
                                 theme === "light"
                                    ? "text-custom-third hover:text-custom-fourth"
                                    : "text-custom-background"
                              }`}
                           >
                              {text}
                           </div>
                        </a>
                     ))}
                  </div>
               </div>
               <div className="slideleft absolute min-[1600px]:max-w-[2150px] max-w-[1100px] w-[100%]  self-center bottom-0">
                  <img
                     src={Profile}
                     alt="my profile"
                     className="max-sm:h-[400px]  mx-auto min-[1600px]:min-w-none h-[70vh] absolute bottom-[0] right-[0]"
                  />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Home;
