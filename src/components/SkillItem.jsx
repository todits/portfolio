import React, { useContext, useState } from "react";
import "../styles/Skills.css";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

export default function SkillItem({
   text,
   image1,
   image2,
   image3,
   image4,
   image5,
   image6,
   skillImages,
   skill,
   selectedButton,
}) {
   const [clickSkill, setClickSkill] = useState("");
   const imagesExist = image1 || image2 || image3 || image4 || image5 || image6;

   const handleClickSkill = (value) => {
      setClickSkill(value);
   };

   const { themeStyle, theme } = useContext(ThemeContext);

   const borderColor =
      theme === "light"
         ? "bg-custom-secondary border-custom-secondary"
         : "border-black bg-black";

   const backgroundColor =
      theme === "light"
         ? "bg-custom-background border-custom-secondary"
         : "bg-gray-500 border-black";

   return (
      <div>
         {skill ? (
            <button
               onClick={selectedButton}
               className={`${borderColor} justify-start group hover:bg-custom-third cursor-pointer shadow-md bg-custom-secondary rounded-[30px] max-md:rounded-lg skilltext  group flex select-none`}
            >
               <div
                  className={`${borderColor}  w-[30px] max-md:rounded-l-[10px] group-hover:bg-custom-third  h-[100%] rounded-l-[30px]`}
               ></div>
               <div
                  className={`${backgroundColor}  relative  skilltextpadding w-full max-md:border-[2px] skillhover group-hover:border-custom-third  border-custom-secondary rounded-r-[30px] max-md:rounded-r-lg  max-md:rounded-l-[5px] rounded-l-[25px] border-[6px] h-full place-content-center`}
               >
                  <div
                     className={`${themeStyle.headingColor} relative bg-cu z-30 font-primary max-md:leading-none duration-100 text-[27px] group-hover:text-white min-[1600px]:text-[40px] min-[1600px]:leading-10 max-md:text-[19px] leading-7`}
                  >
                     {text}
                  </div>
                  <div className="min-[1600px]:text-xl  text-white text-[16px] h-[30px] font-bold tracking-wide max-md:hidden -mt-[30px] duration-300 scale-0 group-hover:-mt-[5px] min-[1600px]:group-hover:mt-[5px] group-hover:scale-100">
                     Click for Details
                  </div>
               </div>

               {/* <div className="opacity-0 group absolute group-hover:opacity-100 group-hover:relative duration-100 ">
                  <div className="text-[30px] min-[1600px]:text-[40px]">
                     {text}
                  </div>
                  <div className="min-[1600px]:text-xl text-[20px]  max-md:hidden ">
                     Click for Details
                  </div>
               </div> */}
            </button>
         ) : (
            <div
               className={`skilltext duration-300 justify-center font-primary skilltextpadding cursor-default select-none self-center px-5 min-[1600px]:text-[40px] text-[27px] bg-custom-primary rounded-lg`}
            >
               {text}
            </div>
         )}

         {imagesExist && (
            <div className={skillImages}>
               {image1 && <img className="skillImage" src={image1} alt="" />}
               {image2 && <img className="skillImage" src={image2} alt="" />}
               {image3 && <img className="skillImage" src={image3} alt="" />}
               {image4 && <img className="skillImage" src={image4} alt="" />}
               {image5 && <img className="skillImage" src={image5} alt="" />}
               {image6 && <img className="skillImage" src={image6} alt="" />}
            </div>
         )}
      </div>
   );
}
