import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import SkillItem from "../../components/SkillItem";
import { ThemeContext } from "../../context/ThemeContext";
import { SKILL_ITEMS } from "../../records/records";

const SkillList = () => {
   const { themeStyle, selectedNavBar, showSkillsList, setShowSkillsList } =
      useContext(ThemeContext);
   const handleClickSkill = (skillSelect) => {
      setSelectedSkill(skillSelect);
      if (skillSelect === "Skills") {
         setShowSkillsList(false);
      }
   };
   return (
      <div>
         <h1
            className={`max-md:text-[30px] max-md:text-center max-md:pb-2 font-primary pb-5 ${themeStyle.headingColor} ${themeStyle.shadow} textshadow`}
         >
            SKILLS
         </h1>
         <div className="grid-cols-3 webkitcenter max-md:grid-cols-1 max-md:gap-[1%] grid gap-[5%] max-w-screen-xl self-center w-[100%] text-center text-custom-secondary text-4xl ">
            {SKILL_ITEMS.map((skill) => (
               <div key={skill.text}>
                  {skill.skill !== undefined ? (
                     <Link to={`/skill/${skill.skill}`} key={skill.id}>
                        <SkillItem
                           skillImages={skill.skillImages}
                           image1={skill.image1}
                           image2={skill.image2}
                           image3={skill.image3}
                           image4={skill.image4}
                           image5={skill.image5}
                           image6={skill.image6}
                           text={skill.text}
                           selectedButton={() => handleClickSkill()}
                           skill={skill.skill}
                        />
                     </Link>
                  ) : (
                     <SkillItem
                        skillImages={skill.skillImages}
                        image1={skill.image1}
                        image2={skill.image2}
                        image3={skill.image3}
                        image4={skill.image4}
                        image5={skill.image5}
                        image6={skill.image6}
                        text={skill.text}
                        selectedButton={() => handleClickSkill()}
                        skill={skill.skill}
                     />
                  )}
               </div>
            ))}
         </div>
      </div>
   );
};

export default SkillList;
