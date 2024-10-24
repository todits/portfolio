import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Button({ text, className, children }) {
   const { theme } = useContext(ThemeContext);
   return (
      <button
         className={`px-3 py-[3px] ${
            theme === "light"
               ? "bg-custom-secondary text-white "
               : "bg-gray-600 text-white"
         } text-[${text ? text : "14px"}]  pointer rounded-md ${className}`}
      >
         {children}
      </button>
   );
}
