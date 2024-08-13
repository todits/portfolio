import React, { useContext } from "react";
import "../styles/NavBar.css";
import { Link, NavLink } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

export default function NewNavbar({ name, onSelectNav, isSelected, to }) {
   const { theme } = useContext(ThemeContext);
   return (
      <NavLink to={to} onClick={onSelectNav}>
         <div
            className={`px-4 py-0 cursor-pointer rounded-md font-primary text-xl max-[1600px]:text-[15px] tracking-wider uppercase  hover:scale-100 ${
               isSelected ? "navbarlist-active" : "navbarlist"
            } ${
               theme === "light"
                  ? "hover:text-custom-secondary"
                  : "hover:text-gray-900"
            } ${theme === "dark" && isSelected ? "navbarlist-activedark" : ""}`}
         >
            <div className="px-[10px] py-[5px] max-[1600px]:py-[0px] uppercase">
               {name}
            </div>
         </div>
      </NavLink>
   );
}

// para sa NavLink

{
   /* <div
         className={`px-4 py-0 cursor-pointer rounded-md font-primary text-xl max-[1600px]:text-[15px] tracking-wider uppercase  hover:scale-100 ${
            isSelected ? "navbarlist-active" : "navbarlist"
         } ${
            theme === "light"
               ? "hover:text-custom-secondary"
               : "hover:text-gray-900"
         } ${theme === "dark" && isSelected ? "navbarlist-activedark" : ""}`}
      >
         <button
            onClick={onSelectNav}
            className={`px-[10px] py-[5px] max-[1600px]:py-[0px] uppercase`}
         >
            {name}
         </button>
      </div>*/
}
