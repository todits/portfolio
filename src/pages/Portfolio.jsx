import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import { experiences } from "../records/records";

const Portfolio = () => {
   const portfolios = [
      {
         id: 1,
         src: arrayDestruct,
      },
      {
         id: 2,
         src: reactParallax,
      },
      {
         id: 3,
         src: navbar,
      },
      {
         id: 4,
         src: reactSmooth,
      },
      {
         id: 5,
         src: installNode,
      },
      {
         id: 6,
         src: reactWeather,
      },
   ];
   return (
      <div
         name="portfolio"
         className="flex h-screen w-full from-white bg-gradient-to-b  to-custom-background md:h-screen"
      >
         <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8 pt-24">
               <p className="text-5xl font-primary  text-custom-third inline border-b-4 border-custom-third">
                  Portfolio
               </p>
               <p className="py-6">Check out some of my work right here</p>
               <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                  {portfolios.map(({ id, src }) => (
                     <div
                        key={id}
                        className="shadow-md shadow-gray-600 rounded-lg"
                     >
                        <img
                           src={src}
                           alt=""
                           className="rounded-md duration-200 hover:scale-105"
                        />
                        <div className="flex items-center justify-center">
                           <button className="w1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                              Demo
                           </button>
                           <button className="w1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                              Code
                           </button>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
            <div className="w-full  text-center py-8 px-12 sm:px-0 table">
               <ul>
                  {experiences.map(({ id, src, title, style, rate, color }) => (
                     <li
                        key={id}
                        className={`column-table hover:shadow-md duration-700 rounded-lg ${style}`}
                     >
                        <div className="table-left">
                           <div
                              className={` flex-col hover:scale-105 duration-500 py-2 rounded-lg icon  `}
                           >
                              <img src={src} alt="" className="w-12 mx-auto" />
                           </div>
                        </div>
                        <div className="column-text">
                           <p className="">{title}</p>
                        </div>
                        <div className="bar flex">
                           <div
                              className="percent"
                              style={{ width: rate, background: color }}
                           >
                              <div className="color-percent">..</div>
                           </div>
                           <div className="pl-2">{rate}</div>
                        </div>
                     </li>
                  ))}
               </ul>
            </div>
         </div>
      </div>
   );
};

export default Portfolio;
