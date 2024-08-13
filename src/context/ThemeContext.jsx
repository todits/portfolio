import { head } from "lodash";
import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
   const savedTheme = JSON.parse(localStorage.getItem("theme"));
   const [theme, setTheme] = useState(savedTheme || "light");
   const [showSkillsList, setShowSkillsList] = useState(true);

   const textColor = theme === "light" ? "text-black" : "text-white ";

   const backgroundColor =
      theme === "light"
         ? "to-white bg-gradient-to-b  from-custom-background"
         : "bg-gray-700 duration-300";

   const themeStyle = {
      textColor: theme === "light" ? "text-black" : "text-white ",
      backgroundColor:
         theme === "light"
            ? "to-white bg-gradient-to-b from-custom-background duration-300"
            : "bg-gray-700 duration-300",
      backgroundStrip:
         theme === "light"
            ? "bg-custom-primary duration-300"
            : "bg-gray-500 duration-300",
      bgWhite: theme === "light" ? "bg-white " : "bg-gray-600 ",
      headingColor:
         theme === "light"
            ? "text-custom-secondary duration-300"
            : "text-white duration-300",
      brownHeading:
         theme === "light"
            ? "text-custom-third duration-300"
            : "text-white duration-300",
      shadow: theme === "light" ? "textshadow" : "textshadowdark2",
   };
   useEffect(() => {
      localStorage.setItem("theme", JSON.stringify(theme));
   }, [theme]);

   useEffect(() => {
      const savedTheme = JSON.parse(localStorage.getItem("theme"));
      if (savedTheme) {
         setTheme(savedTheme);
      }
   }, []);

   return (
      <ThemeContext.Provider
         value={{
            theme,
            setTheme,
            textColor,
            backgroundColor,
            themeStyle,
            showSkillsList,
            setShowSkillsList,
         }}
      >
         {children}
      </ThemeContext.Provider>
   );
};

export default ThemeContextProvider;
