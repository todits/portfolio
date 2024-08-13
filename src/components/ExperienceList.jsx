import React from "react";

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

   return (
      <div
         className={`flex justify-center py-4 w-full ${
            index % 2 === 0 ? "bg-[#bee7e7] " : "bg-white "
         }`}
      >
         <div className="flex max-w-screen-lg place-items-center w-full ">
            <div className="font-primary flex justify-center self-center text-[30px] w-[20%]">
               <div className="h-[100%] z-10 relative self-center text-custom-third">
                  {year}
               </div>
               <div
                  className={`absolute  z-0 flex items-center self-center ${alternateStyle} bg-[#bee7e7] h-[100px] rounded-full text-center w-[100px]`}
               ></div>
            </div>
            <div className="w-[40%] relative  self-center z-0">
               <div
                  className={`-mx-[70px]  h-[20px] self-center rounded-full text-center ${alternateStyle}`}
               ></div>
            </div>
            <div
               className={`w-[40%] text-xl z-10  p-3 ${alternateStyle} h-[100%] self-center rounded-xl text-center`}
            >
               <div className="font-primary text-custom-third text-2xl">
                  {employer}
               </div>
               <div className="font-primary text-custom-third">{job}</div>

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
