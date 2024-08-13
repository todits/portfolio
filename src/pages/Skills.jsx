import React, { useContext, useEffect, useState } from "react";
import IconButton from "../components/IconButton";
import skills from "../assets/images/skills/skillIcon/skills.png";
import digitalArt from "../assets/images/skills/skillIcon/digitalArt.png";
import webDeveloping from "../assets/images/skills/skillIcon/webDeveloping.png";
import socialMedia from "../assets/images/skills/skillIcon/socialMedia.png";
import webDesign from "../assets/images/skills/skillIcon/webDesign.png";
import videoEditing from "../assets/images/skills/skillIcon/videoEditing.png";
import { motion, AnimatePresence } from "framer-motion";
import { Link, Outlet, useLocation } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

const skillsset = [
   {
      image: skills,
      label: "Skills",
      link: "list",
   },
   {
      image: digitalArt,
      label: "Digital Art",
      link: "digitalArt",
   },
   {
      image: webDeveloping,
      label: "Web Developing",
      link: "webDeveloping",
   },

   {
      image: videoEditing,
      label: "Video Editing",
      link: "videoEditing",
   },
   {
      image: webDesign,
      label: "Web Design",
      link: "webDesign",
   },
   {
      image: socialMedia,
      label: "Social Media Manager",
      link: "socialMediaManager",
   },
];

export default function Skills() {
   const [selectedSkill, setSelectedSkill] = useState("Skills");
   const { themeStyle, setShowSkillsList, theme } = useContext(ThemeContext);
   const location = useLocation();

   useEffect(() => {
      console.log("Selected Skill:", selectedSkill);
   }, [selectedSkill]);

   const handleClickSkill = (skillSelect) => {
      setSelectedSkill(skillSelect);
      if (skillSelect === "Skills") {
         setShowSkillsList(false);
      }
   };

   return (
      <div
         name="skills"
         className={` content max-w-screen-xl min-h-screen h-full max-md:pt-[40px] max-md:px-[20px] flex flex-col min-[1600px]:px-[0px] px-[5%] mx-auto min-[1600px]:min-h-[100vh]  w-full pt-[40px] min-[1600px]:pt-[70px] pb-[20px]`}
      >
         <div className="max-w-screen-xl justify-center self-center w-[100%]">
            <div className=" flex gap-3 max-md:flex-col max-md:h-auto min-[1600px]:h-[100px] max-md:mt-[10px] h-[70px] mt-[30px] justify-between ">
               <div
                  className={` max-md:self-center flex justify-center ${
                     setShowSkillsList && "max-md:hidden"
                  }`}
               >
                  <h2
                     className={`${themeStyle.brownHeading} text-3xl max-md:text-[25px] font-primary  inline  border-gray-500`}
                  >
                     {selectedSkill}
                  </h2>
               </div>
               {location.pathname !== "/skill/list" && (
                  <AnimatePresence>
                     <motion.div
                        key="box"
                        initial={{ x: "-50%", opacity: 0, scale: 0 }}
                        animate={{ x: 0, opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className={`flex gap-7 max-md:justify-center`}
                        exit={{ x: "-50%", opacity: 0, scale: 0 }}
                     >
                        {skillsset.map(({ image, label, link }, index) => (
                           <Link to={`/skill/${link}`} key={index}>
                              <IconButton
                                 image={image}
                                 iconselect={() => handleClickSkill(label)}
                                 iconName={label}
                              />
                           </Link>
                        ))}
                     </motion.div>
                  </AnimatePresence>
               )}
            </div>
         </div>

         <Outlet />
      </div>
   );
}

{
   /* <AnimatePresence>
{selectedSkill === "Web Developing" ? (
   <motion.div
      key="webDeveloping"
      initial={{ y: "-50%", scale: 0.5, opacity: 0 }}
      animate={{ y: 0, scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      exit={{ y: "-50%", scale: 0, opacity: 0 }}
      className="h-[100%]"
   >
      <WebDeveloping />
   </motion.div>
) : undefined}
{selectedSkill === "Video Editing" ? (
   <motion.div
      key="videoEditing"
      initial={{ y: "-50%", scale: 0.5, opacity: 0 }}
      animate={{ y: 0, scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      exit={{ y: "-50%", scale: 0, opacity: 0 }}
      className="h-[100%]"
   >
      <VideoEditing />
   </motion.div>
) : undefined}
{selectedSkill === "Web Design" ? (
   <motion.div
      key="webDesign"
      initial={{ y: "-50%", scale: 0.5, opacity: 0 }}
      animate={{ y: 0, scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      exit={{ y: "-50%", scale: 0, opacity: 0 }}
      className="h-[100%]"
   >
      <WebDesign />
   </motion.div>
) : undefined}
{selectedSkill === "Social Media Manager" ? (
   <motion.div
      key="socialMedia"
      initial={{ y: "-50%", scale: 0.5, opacity: 0 }}
      animate={{ y: 0, scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      exit={{ y: "-50%", scale: 0, opacity: 0 }}
      className="h-[100%]"
   >
      <SocialMediaManager />
   </motion.div>
) : undefined}
{selectedSkill === "Digital Art" ? (
   <motion.div
      key="digitalArt"
      initial={{ y: "-50%", scale: 0.5, opacity: 0 }}
      animate={{ y: 0, scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      exit={{ y: "-50%", scale: 0, opacity: 0 }}
      className="h-[100%]"
   >
      <DigitalArt />
   </motion.div>
) : undefined}
</AnimatePresence> */
}
