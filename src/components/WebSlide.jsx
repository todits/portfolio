import React, { useContext } from "react"
import "../styles/Portfolio.css"
import { ThemeContext } from "../context/ThemeContext"

export default function WebSlide({
   image,
   name,
   image3,
   image4,
   image5,
   image6,
   color,
   rate,
}) {
   const { themeStyle } = useContext(ThemeContext)
   return (
      <div className="flex mt-6 max-md:mt-3 justify-start place-items-center skill">
         <img className="slideimage w-36 max-md:w-16 " src={image} alt="" />
         <div className="hoverbar flex flex-col gap-2">
            <h3
               className={`${themeStyle.headingColor} slidetext font-primary text-left text-custom-secondary`}
            >
               {name}
            </h3>
            <div className="skillbar ml-7 bg-gray-500 h-[20px] max-md:h-[15px]  rounded-full">
               <div
                  className={`${color} h-[100%] skillpercent max-md:text-[12px]  text-right leading-[1.7]`}
                  style={{ width: rate }}
               >
                  {rate}
               </div>
            </div>
         </div>
      </div>
   )
}
