import React from "react";
import Footer from "../../components/Footer";

export default function PhotoEditing() {
   return (
      <div
         name="photoEditing"
         className="flex h-screen skillsScreen w-full from-white bg-gradient-to-b  to-custom-background"
      >
         <div className="absolute z-0">
            <p className="portfolio font-primary inline z-0 ">Portfolio</p>
         </div>

         <div className="max-w-screen-xl p-4 pt-20 mx-auto flex flex-col place-content-start w-full h-full">
            <div className="">
               <p className=" text-5xl font-primary  text-custom-third inline border-b-4  border-custom-third">
                  Photo Editing
               </p>
               <div className="flex justify-between mt-[300px] z-50">
                  <Footer className="z-50" next="emailMarketing" />
               </div>
            </div>
         </div>
      </div>
   );
}
