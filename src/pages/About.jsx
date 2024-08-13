import React, { useContext } from "react"
import gif from "../assets/images/about.gif"
import speech from "../assets/images/bubblespeach.png"
import { ThemeContext } from "../context/ThemeContext"

const About = () => {
   const { textColor, backgroundColor, theme } = useContext(ThemeContext)
   return (
      <div name="about" className={`content w-full h-screen ${textColor}`}>
         <div className="max-w-screen-xl px-[80px] max-md:pt-[144px] max-md:px-[20px] pt-20 min-[1600px]:pt-28 mx-auto flex flex-col place-content-start w-full h-full">
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
               className={`${
                  theme === "light" ? "border-custom-secondary " : "text-white "
               } duration-300 flex max-md:flex-col rounded-xl  border-[8px] max-md:border-[4px] max-md:leading-4`}
            >
               <div className="z-20 relative max-md:fixed max-md:top-[51px] max-md:-ml-[20px] flex place-items-end justify-center w-[1800px] max-m-[1600px]:w-[2500px] max-md:w-[150px] -ml-[70px] -mr-[30px] group -mb-[1px] ">
                  <img src={gif} alt="" className="" />
                  <div className="z-10 absolute -mr-[300px] top-[250px] max-w-[400px] h-auto scale-0 group-hover:-mr-[600px] group-hover:scale-100 duration-300">
                     <div className="absolute text-black h-[100%] w-[100%] place-content-center text-center pr-[30px] pl-[65px]">
                        Start exploring more about my skills and previous
                        expreriences by clicking <strong>here</strong>.
                     </div>
                     <img src={speech} alt="" className="" />
                  </div>
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
      </div>
   )
}

export default About
