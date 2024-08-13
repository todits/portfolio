import React from "react";
import "../styles/Experience.css";
import { EXPERIENCELIST } from "../records/records";
import ExperienceList from "../components/ExperienceList";

const Experience = () => {
   return (
      <div name="experience" className="flex h-screen w-full content ">
         <div className=" mx-auto flex-col justify-center place-items-center  w-full h-full relative mt-[100px]">
            <p className="font-primary text-[70px] textshadow flex justify-center text-custom-secondary sm:text-[50px] font-bold self-center p-2 ">
               WORK EXPERIENCE
            </p>
            <div className="relative flex mt-[20px] flex-col justify-center place-items-center">
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
                     />
                  )
               )}
            </div>
         </div>
      </div>
   );
};

export default Experience;
