import React, { useContext } from "react";
import WebSlide from "../../components/WebSlide";
import Footer from "../../components/Footer";
import { skills } from "../../records/records";
import Portfolio from "../Portfolio";
import image1 from "../../assets/images/skills/webDeveloping/project1.png";
import image2 from "../../assets/images/skills/webDeveloping/project2.png";
import image3 from "../../assets/images/skills/webDeveloping/project3.png";
import image4 from "../../assets/images/skills/webDeveloping/project4.png";
import image5 from "../../assets/images/skills/webDeveloping/project5.png";
import { ThemeContext } from "../../context/ThemeContext";
import { animate } from "framer-motion";

const Projects = [
   {
      id: 4,
      image: image4,
      title: "Tic-Tac-Toe Application",
      link: "https://tic-tac-toe-pi-pied.vercel.app/",
      description:
         "Webpage application featuring a classic game interface for interactive play and scoring.",
      skills: [
         { id: 2, skill: "CSS" },
         { id: 1, skill: "ReactJS" },
         { id: 6, skill: "JS" },
         { id: 7, skill: "Udemy" },
         { id: 3, skill: "mini game" },
         { id: 5, skill: "mobile responsive" },
         { id: 4, skill: "2 players" },
      ],
      animationstyle: {
         animation: `slide-in-from-top 1s cubic-bezier(0.68, -0.55, 0.65, 0.52) forwards`,
      },
   },
   {
      id: 5,
      image: image5,
      title: "Web Builder Assignment",
      link: "https://home-project-tau.vercel.app/",
      description:
         "A task from my previous application involved improving and revamping a single webpage, using the existing page as a reference.",
      skills: [
         { id: 2, skill: "CSS" },
         { id: 1, skill: "ReactJS" },
         { id: 6, skill: "JS" },
         { id: 3, skill: "TypeScript" },
         { id: 5, skill: "mobile responsive" },
         { id: 4, skill: "useContext" },
      ],
      animationstyle: {
         animation: `slide-in-from-top 1s 0.3s cubic-bezier(0.68, -0.55, 0.65, 0.52) forwards`,
      },
   },
   {
      id: 1,
      image: image1,
      title: "Project Organizer",
      link: "https://project-organizer-three.vercel.app/",
      description:
         "Project Organizer webpage for better collaboration and task management, using skills from a Udemy ReactJS tutorial.",
      skills: [
         { id: 1, skill: "reactJS" },
         { id: 2, skill: "CSS" },
         { id: 3, skill: "Vite" },
         { id: 4, skill: "organizer" },
         { id: 5, skill: "JS" },
         { id: 6, skill: "Udemy Course" },
         { id: 7, skill: "tasks" },
      ],
      animationstyle: {
         animation: `slide-in-from-top 1s 0.6s cubic-bezier(0.68, -0.55, 0.65, 0.52) forwards`,
      },
   },
   {
      id: 2,
      image: image2,
      title: "Timing Skill Challenge",
      link: "https://timing-skill-challenge.vercel.app/",
      description:
         " A timing skill challenge platform where users test their precision by stopping a timer as close to a target time as possible.",
      skills: [
         { id: 1, skill: "ReactJS" },
         { id: 2, skill: "CSS" },
         { id: 3, skill: "skill game" },
         { id: 6, skill: "JS" },
         { id: 7, skill: "Udemy Course" },
         { id: 4, skill: "useState" },
         { id: 5, skill: "challenge" },
      ],
      animationstyle: {
         animation: `slide-in-from-top 1s 0.9s cubic-bezier(0.68, -0.55, 0.65, 0.52) forwards`,
      },
   },
   {
      id: 3,
      image: image3,
      title: "Online Shopping Application",
      link: "https://online-shopping-rose.vercel.app/",
      description:
         "Simple online shopping application webpage for seamless browsing and purchasing, focusing on user-friendly design and functionality.",
      skills: [
         { id: 1, skill: "ReactJS" },
         { id: 3, skill: "online shop" },
         { id: 7, skill: "Udemy Course" },
         { id: 6, skill: "Java" },
         { id: 4, skill: "add to cart" },
         { id: 5, skill: "calculator" },
      ],
      animationstyle: {
         animation: `slide-in-from-top 1s 1.2s cubic-bezier(0.68, -0.55, 0.65, 0.52) forwards`,
      },
   },
];
// const styles = {
//    height: "auto",
//    minHeight: "60px",
//    ,
// };
function WebDeveloping() {
   const { themeStyle } = useContext(ThemeContext);

   const repeatCount = 4; // Number of times to repeat the `skills` rendering

   const repeatedSkills = [];
   for (let i = 0; i < repeatCount; i++) {
      repeatedSkills.push(
         ...skills.map(({ id, name, src, color, rate }) => (
            <WebSlide
               image={src}
               name={name}
               key={`${id}-${i}`} // Ensure unique keys
               color={color}
               rate={rate}
            />
         ))
      );
   }

   return (
      <div name="webDeveloping" className="flex w-full">
         <div className="max-w-screen-xl p-4 max-md:p-0 max-md:pt-4 mx-auto flex flex-col place-content-start w-full h-full">
            <div className="sticky top-[10%]">
               <div className=" slidecontainer">
                  <div className="slidegroup">
                     <div className="gap-2 z-50 ">{repeatedSkills}</div>
                  </div>
               </div>
            </div>

            <div className="flex justify-between">
               <div className=" relative h-[80vh] min-h-[800px] "></div>
               <div className="flex justify-start flex-col w-[85%] gap-2 max-md:pl-[5%]">
                  <div
                     className={`${themeStyle.headingColor} ${themeStyle.shadow} rise max-md:px-0 font-primary text-[50px] max-md:text-[30px] max-md:text-center max-md:leading-8 textshadow min-[1600px]:text-[70px]`}
                  >
                     WEB DEVELOPING SKILLS
                  </div>
                  <p className=" px-11 max-md:px-0 place-items-center rise ">
                     While working as a teacher, I had the opportunity to be
                     exposed to web development through my brother, who works as
                     a web developer. He taught me the ropes of web development,
                     which became the foundation of my knowledge while I pursued
                     a job as a virtual assistant. As a pastime, I continue to
                     learn and enhance my web development skills. Additionally,
                     I gained practical experience by working part-time as a web
                     developer alongside my brother.
                  </p>
                  <h2
                     className={`py-6 text-center leading-6 font-primary text-custom-third ${themeStyle.brownHeading}`}
                  >
                     Check out some of my work right here
                  </h2>
                  <div className="grid gap-6 grid-cols-3 max-[1300px]:grid-cols-2 max-md:grid-cols-1">
                     {Projects.map(
                        ({
                           id,
                           image,
                           title,
                           link,
                           description,
                           skills,
                           animationstyle,
                        }) => (
                           <a
                              className={`${themeStyle.bgWhite} translate-y-[30%] opacity-0 w-full cursor-pointer  shadow rounded-lg border-custom-primary border hover:scale-105 max-md:hover:scale-100 duration-300 flex flex-col h-full`}
                              key={id}
                              href={link}
                              target="_blank"
                              style={animationstyle}
                           >
                              <img
                                 src={image}
                                 alt=""
                                 className="rounded-md "
                                 loading="lazy"
                              />
                              <div className="py-[10px] px-[5%] flex flex-col h-full justify-between">
                                 <div>
                                    <h3
                                       className={`${themeStyle.brownHeading} text-center w-full font-bold text-custom-third`}
                                    >
                                       {title}
                                    </h3>
                                    <p className="text-[15px] pt-[10px]">
                                       {description}
                                    </p>
                                 </div>
                                 <div className="flex gap-x-1 gap-y-[7px] pt-4 pb-2 flex-wrap">
                                    {skills &&
                                       skills.map(({ id, skill }) => (
                                          <div
                                             key={id}
                                             className="px-3 py-[1px] bg-custom-primary rounded-md text-black  text-[13px]"
                                          >
                                             {/* mx-[5px] my-[4px] bg-[#cdf7f7]*/}
                                             {skill}
                                          </div>
                                       ))}
                                 </div>
                              </div>
                           </a>
                        )
                     )}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default WebDeveloping;
