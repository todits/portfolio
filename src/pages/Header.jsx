import Image from "../assets/images/logo2.png";
import "../styles/NavBar.css";
import React, { useContext, useRef, useState } from "react";
import logo from "../assets/images/icon.png";
import dark from "../assets/images/dark.png";
import { FaMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";
import { ThemeContext } from "../context/ThemeContext";
import { IoMenu } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";

export default function Header({ children }) {
   const { theme, setTheme } = useContext(ThemeContext);
   const [openMenu, setOpenMenu] = useState(false);

   const modal = useRef();

   const handleClickMenu = () => {
      modal.current.classList.toggle("mobile-toggle");
   };

   console.log(openMenu);

   const handleClickMode = () => {
      setTheme((prev) => (prev === "light" ? "dark" : "light"));
   };
   return (
      <div
         className={`slidefromtop flex justify-between max-md:h-[45px] items-center duration-300 w-full min-[1600px]:h-[80px] h-[60px] text-black fixed ${
            theme === "light" ? "bg-custom-secondary" : "bg-gray-800"
         }  px-[4%] navbarbackground`}
      >
         {/* <div className="">
            <button
               style={{ fontSize: "clamp(30px, 2.5vw, 40px)" }}
               className="transitionObject text-outline font-primary   "
            >
               <div className="scale-0">DARYL LOUIE</div>
            </button>

            <img src={Image} alt="" className="imageHover" />
         </div> */}
         <img
            src={logo}
            className="w-[50px] drop-shadow-2xl max-md:w-[35px] "
         />
         <div className="flex relative">
            <IoMenu
               size={30}
               className="text-white min-[768px]:hidden absolute right-[30px]"
               onClick={handleClickMenu}
            />
            <div
               ref={modal}
               className={`mobile-view relative duration-300 ${
                  theme === "light" ? "mobilelight" : "mobiledark"
               }`}
            >
               <IoCloseOutline
                  size={35}
                  className="md:hidden visible absolute right-0 mr-4 text-white"
                  onClick={handleClickMenu}
               />
               <ul
                  onClick={handleClickMenu}
                  className="md:flex  h-full content-center md:mr-12 mr-0 max-md:w-[200px] self-center md:pt-0 pt-10 "
               >
                  {children}
               </ul>
            </div>

            <button onClick={handleClickMode} className="w-[20px]">
               {theme === "dark" && (
                  <FaMoon
                     size={25}
                     className="rise text-white user select-none max-md:w-[20px]"
                  />
               )}
               {theme === "light" && (
                  <MdSunny
                     size={25}
                     className="rise  text-white select-none max-md:w-[20px]"
                  />
               )}
            </button>
         </div>
      </div>
   );
}

/* <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
         >
            {nav ? <FaTimes size={30}></FaTimes> : <FaBars size={30}></FaBars>}
         </div>

         {nav && (
            <ul className="absolute top-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 items-center flex flex-col justify-center">
               {links.map(({ id, link }) => (
                  <li
                     key={id}
                     className="px-4 cursor-pointer capitalize py-6 text-4xl"
                  >
                     {link}
                  </li>
               ))}
            </ul>
         )} */
