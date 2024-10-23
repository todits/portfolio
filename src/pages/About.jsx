import React, { useContext, useEffect, useState } from "react";
import gif from "../assets/images/about.gif";
import speech from "../assets/images/bubblespeach.png";
import { ThemeContext } from "../context/ThemeContext";
import { SKILL_ITEMS } from "../records/records";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const About = () => {
   const { textColor, backgroundColor, theme } = useContext(ThemeContext);
   const [selectedSkill, setSelectedSkill] = useState(SKILL_ITEMS[0]);
   const [delay, setDelay] = useState(true);

   const handleSkillClick = (skill) => {
      setSelectedSkill(skill); // Update the selected skill
      setDelay(false); // Set delay to false when the skill is clicked
   };

   useEffect(() => {
      if (!delay) {
         const timer = setTimeout(() => {
            setDelay(true);
         }, 0);

         return () => clearTimeout(timer);
      }
   }, [delay]);
   return (
      <div name="about" className={`content w-full h-screen ${textColor}`}>
         <div className="max-w-screen-xl px-[80px] max-md:pt-[167px] max-md:px-[20px] pt-20 min-[1600px]:pt-28 mx-auto flex flex-col place-content-start w-full ">
            <p
               className={`${
                  theme === "light"
                     ? "text-custom-secondary  "
                     : "text-white textshadowdark2 "
               } pb-3 text-[45px] max-md:text-[30px] max-md:ml-[120px] font-primary  inline textshadow`}
            >
               ABOUT
            </p>
            <div
               className={` duration-300 flex max-md:flex-col rounded-xl max-md:border-[4px] max-md:leading-4`}
            >
               <div className="z-20 relative max-md:fixed max-md:top-[51px] max-md:-ml-[20px] flex place-items-end justify-center w-[1800px] max-m-[1600px]:w-[2500px] max-md:w-[150px] -ml-[70px] -mr-[30px] group -mb-[1px] ">
                  <img src={gif} alt="" className="" />
                  {/* <div className="z-10 absolute -mr-[300px] top-[250px] max-w-[400px] h-auto scale-0 group-hover:-mr-[600px] group-hover:scale-100 duration-300">
                     <div className="absolute text-black h-[100%] w-[100%] place-content-center text-center pr-[30px] pl-[65px]">
                        Start exploring more about my skills and previous
                        expreriences by clicking <strong>here</strong>.
                     </div>
                     <img src={speech} alt="" className="" />
                  </div> */}
               </div>
               <div className="py-[40px] pr-[40px] max-md:py-[10px] max-md:pr-[10px] max-md:pl-[10px]">
                  <p className=" max-md:text-[15px] max-md:leading-4">
                     My journey into these fields began during the pandemic.
                     Stuck at home, I was inspired by my brother, a seasoned web
                     developer. What started as a curious dive into web
                     development quickly turned into a real passion. I loved
                     discovering the endless possibilities and creating
                     impactful digital experiences, which made me decide to
                     shift my career focus entirely.
                  </p>
                  <p className=" mt-[30px] max-md:text-[15px] max-md:leading-4">
                     Since then, I've taken on various part-time roles as a
                     virtual assistant, web developer, and web designer. Each
                     job has helped me grow my skills and understand how these
                     fields connect and complement each other.
                  </p>

                  <p className=" mt-[30px] max-md:text-[15px] max-md:leading-4">
                     I’m excited to work with you and bring your digital
                     projects to life, making a real impact in the online world.
                  </p>
               </div>
            </div>
         </div>
         <div>
            <div className="font-primary text-center text-[35px] text-custom-secondary mt-[50px]  textshadow mb-10">
               FEATURED SKILLS
            </div>
            <div className="flex max-w-screen-lg max-md:px-5  mx-auto justify-around max-md:flex-col px-11 pb-12 max-md:gap-4">
               <div className="max-md:gap-1 flex flex-col w-[30%] max-md:flex-row max-md:w-auto max-md:justify-center max-md:flex-wrap">
                  {SKILL_ITEMS.map((skill) => (
                     <button
                        key={skill.id}
                        onClick={() => handleSkillClick(skill)}
                        className={`relative px-5 py-3 font-semibold border-[1px] bg-white ${
                           selectedSkill.text === skill.text
                              ? "before:bg-[#008080] before:w-full text-white max-md:before:rounded-full"
                              : "before:w-0 text-gray-700"
                        } max-md:px-4 max-md:py-1 max-md:rounded-full before:duration-300 duration-300 before:block before:absolute before:-inset-0 border-pr hover:bg-[#bee7e7] hover:shadow-md`}
                     >
                        <div className="relative">{skill.text}</div>
                     </button>
                  ))}
               </div>

               <div className="w-[70%] max-md:w-[100%] max-w-[550px] h-full self-center flex flex-col items-center gap-4">
                  {delay && (
                     <div className="gap-6 w-full self-center flex flex-col items-center">
                        <div className="w-full self-center flex flex-col items-center text-gray-700 ">
                           {selectedSkill.icons?.map(
                              ({ id, name, rate, image, animate }) => (
                                 <div
                                    key={id}
                                    className="max-md:py-1 duration-300 flex w-full cursor-pointer justify-between opacity-0 group hover:shadow-lg px-6 py-3 rounded-lg"
                                    style={animate}
                                 >
                                    <img
                                       src={image}
                                       className="w-12 max-md:w-10 max-md:h-10"
                                    />
                                    <div className="self-center text-center px-1 w-[25%] font-medium">
                                       {name}
                                    </div>
                                    <div className="w-[60%] h-4 bg-slate-400 self-center rounded-full relative ">
                                       <div
                                          style={{ width: `${rate}` }}
                                          className={`w-[${rate}] h-full relative bg-custom-primary rounded-l-full before:opacity-0 before:group-hover:opacity-100 before:group-hover:w-[100%]  before:-inset-0 before:absolute before:block before:w-[0] before:duration-300 before:rounded-l-full  before:bg-custom-secondary`}
                                       ></div>
                                       <div className="absolute top-0 text-[14px] leading-4 left-3 group-hover:text-white">
                                          {rate}
                                       </div>
                                    </div>
                                 </div>
                              )
                           )}
                        </div>
                        {selectedSkill.skill && (
                           <Link
                              to={`/skill/${selectedSkill.skill}`}
                              style={{
                                 animation: `slide-in-from-left 1s 0.3s cubic-bezier(0.68, -0.55, 0.65, 0.52) forwards`,
                              }}
                              className="opacity-0"
                           >
                              <Button className="font-semibold" text="20px">
                                 Click to view recent my projects
                              </Button>
                           </Link>
                        )}
                     </div>
                  )}
               </div>
            </div>
         </div>
      </div>
   );
};

export default About;
