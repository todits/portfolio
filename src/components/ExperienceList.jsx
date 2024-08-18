import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function ExperienceList({
   year,
   employer,
   job,
   role1,
   role2,
   role3,
   role4,
   role5,
   index,
}) {
   const alternateStyle = index % 2 === 0 ? "bg-white" : "bg-[#bee7e7] ";
   const { theme, themeStyle } = useContext(ThemeContext);

   return (
      <div className={`flex justify-center py-4 w-full `}>
         <div className="flex max-sm:flex-col max-sm:  w-full justify-center experiencegroup group hover:scale-105 duration-300">
            <div className="relative flex w-[60%] max-sm:w-[100%] max-sm:px-4">
               <div className="font-primary flex justify-center self-center h-[100%]">
                  <div
                     className={`absolute z-0 flex items-center self-center justify-center bg-[#bee7e7] h-[40px] rounded-full w-[40px]`}
                  ></div>
                  <div className="h-[10px] absolute rounded-full duration-200 delay-300 w-[10px] group-hover:scale-100 scale-0 bg-custom-secondary self-center z-[300]"></div>
               </div>
               <div className="w-[100%] relative self-center experienceHover  z-0 ">
                  <div
                     className={`${themeStyle.headingColor} max-sm:rounded-full pl-7 text-[20px] text-custom-secondary font-bold h-[10px] bg-[#bee7e7]  `}
                  >
                     <div className="absolute -top-7">{year}</div>
                  </div>
               </div>
            </div>

            <div
               className={`${
                  theme === "light" ? "bg-white" : "bg-gray-800"
               } max-sm:w-[90%] w-[40%] text-xl z-10  p-3  h-[100%] self-center rounded-xl text-center shadow-md`}
            >
               <div
                  className={`${
                     theme === "light"
                        ? "text-custom-third"
                        : "text-custom-background"
                  } font-primary text-2xl`}
               >
                  {employer}
               </div>
               <div
                  className={`${
                     theme === "light"
                        ? "text-custom-third"
                        : "text-custom-background"
                  } font-primary `}
               >
                  {job}
               </div>

               <ul>
                  {role1 && <li className="text-[17px] leading-5"> {role1}</li>}
                  {role2 && <li className="text-[17px] leading-5"> {role2}</li>}
                  {role3 && <li className="text-[17px] leading-5"> {role3}</li>}
                  {role4 && <li className="text-[17px] leading-5"> {role4}</li>}
                  {role5 && <li className="text-[17px] leading-5"> {role5}</li>}
               </ul>
            </div>
         </div>
      </div>
   );
}
