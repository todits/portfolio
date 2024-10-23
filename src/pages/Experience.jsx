import React, { useContext } from "react";
import "../styles/Experience.css";
import { EXPERIENCELIST } from "../records/records";
import ExperienceList from "../components/ExperienceList";
import { ThemeContext } from "../context/ThemeContext";

const Experience = () => {
   const { themeStyle } = useContext(ThemeContext);
   return (
      <div
         name="experience"
         className="flex min-h-screen max-w-screen-lg mx-auto content "
      >
         <div className=" mx-auto flex-col justify-center place-items-center  h-full relative mt-[100px] max-md:mt-[60px]">
            <p
               className={`${themeStyle.headingColor} ${themeStyle.shadow}  text-center leading-10 font-primary text-[50px] max-md:text-[35px] textshadow flex justify-center text-custom-secondary  font-bold self-center p-2`}
            >
               WORK EXPERIENCE
            </p>
            <div className="relative flex max-lg:pl-12 max-sm:pl-7 py-[40px] flex-col justify-center place-items-center gap-8 px-7">
               {EXPERIENCELIST.map(
                  (
                     {
                        id,
                        year,
                        employer,
                        job,
                        role1,
                        role2,
                        role3,
                        role4,
                        role5,
                        animate,
                     },
                     index
                  ) => (
                     <ExperienceList
                        key={id}
                        year={year}
                        employer={employer}
                        job={job}
                        role1={role1}
                        role2={role2}
                        role3={role3}
                        role4={role4}
                        role5={role5}
                        index={index}
                        style={animate}
                     />
                  )
               )}
            </div>
         </div>
      </div>
   );
};

export default Experience;
