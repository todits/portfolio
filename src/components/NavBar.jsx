import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "../assets/images/logo2.png";
import { Link } from "react-scroll";
import "../styles/NavBar.css";

export default function NavBar() {
   const [active, setActive] = useState("");

   const links = [
      {
         id: 1,
         link: "home",
      },
      {
         id: 2,
         link: "about",
      },
      {
         id: 4,
         link: "skills",
      },
      // {
      // 	id: 5,
      // 	link: "portfolio",
      // },
      {
         id: 6,
         link: "experience",
      },
      {
         id: 8,
         link: "contact",
      },
   ];

   const activeNav = (value) => {
      setActive(value);
   };
   console.log(active);

   return (
      <ul className="hidden md:flex">
         {links.map(({ id, link }) => (
            <li
               key={id}
               className={`px-4 cursor-pointer font-primary text-xl tracking-wider text-white uppercase hover:scale-105 navbarlist ${
                  active === link ? active : ""
               }`}
            >
               <Link
                  to={link}
                  smooth
                  duration={500}
                  onClick={() => activeNav(link)}
                  className="navbarlink"
               >
                  {link}
               </Link>
            </li>
         ))}
      </ul>
   );
}

{
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
}
