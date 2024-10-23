import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import "./global.css";
import Header from "./pages/Header";
import NewNavbar from "./components/NewNavbar";
import { useState, useContext, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import navBarList from "./records/navBar.json";
import WebDeveloping from "./pages/portfolio/WebDeveloping";
import WebDesign from "./pages/portfolio/WebDesign";
import ThemeContextProvider, { ThemeContext } from "./context/ThemeContext";
import VideoEditing from "./pages/portfolio/VideoEditing";
import SocialMediaManager from "./pages/portfolio/SocialMediaManager";
import DigitalArt from "./pages/portfolio/DigitalArt";
import SkillList from "./pages/portfolio/SkillList";

function App() {
   const [selectedNavBar, setSelectedNavBar] = useState("home");
   const { showSkillsList, setShowSkillsList, themeStyle } =
      useContext(ThemeContext);

   useEffect(() => {
      if (location.pathname === "/") {
         setSelectedNavBar("home");
      } else if (location.pathname === "/about") {
         setSelectedNavBar("about");
      } else if (location.pathname === "/contact") {
         setSelectedNavBar("contact");
      } else if (location.pathname.startsWith("/skill")) {
         setSelectedNavBar("skills");
      } else if (location.pathname === "/experience") {
         setSelectedNavBar("experience");
      } else if (location.pathname === "/contact") {
         setSelectedNavBar("contact");
      }
   }, [location.pathname]);

   console.log(selectedNavBar);

   const handleClickNavbar = (selectedtab) => {
      setSelectedNavBar(selectedtab);
   };

   const NavItems = [
      { name: "home", path: "/" },
      { name: "about", path: "about" },
      // { name: "skills", path: "skill/list" },
      { name: "experience", path: "experience" },
      { name: "contact", path: "contact" },
   ];

   return (
      <BrowserRouter>
         <Header>
            {NavItems.map(({ name, path }) => (
               <NewNavbar
                  onSelectNav={() => handleClickNavbar(name)}
                  name={name}
                  to={path}
                  key={name}
                  isSelected={selectedNavBar === name}
               />
            ))}
         </Header>
         <div
            className={`${themeStyle.backgroundColor} ${themeStyle.textColor} min-h-screen h-full`}
         >
            <Routes>
               <Route
                  path="/"
                  element={
                     <Home onSelectNav={() => handleClickNavbar("skills")} />
                  }
               />
               <Route path="about" element={<About />} />
               <Route path="skill" element={<Skills />}>
                  <Route path="list" element={<SkillList />} />
                  <Route path="webDeveloping" element={<WebDeveloping />} />
                  <Route path="videoEditing" element={<VideoEditing />} />
                  <Route path="webDesign" element={<WebDesign />} />
                  <Route
                     path="socialMediaManager"
                     element={<SocialMediaManager />}
                  />
                  <Route path="digitalArt" element={<DigitalArt />} />
               </Route>
               <Route path="experience" element={<Experience />} />
               <Route path="contact" element={<Contact />} />
            </Routes>
         </div>
      </BrowserRouter>
   );
}

export default App;

// <div>
//          <Header>
//             {navBarList.map(({ link, id }) => (
//                <NewNavbar
//                   key={id}
//                   onSelectNav={() => handleClickNavbar(link)}
//                   name={link}
//                   isSelected={selectedNavBar === link}
//                />
//             ))}
//          </Header>
//          <div
//             className={`relative h-full min-h-screen backdrop-blur-0 ${themeStyle.backgroundColor} ${themeStyle.textColor}`}
//          >
//             {selectedNavBar === "home" && <Home />}
//             {selectedNavBar === "about" && <About />}
//             {selectedNavBar === "skills" && <Skills />}
//             {selectedNavBar === "experience" && <Experience />}
//             {selectedNavBar === "contact" && <Contact />}
//          </div>
//       </div>
