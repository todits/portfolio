import React, { useState, useEffect, useContext } from "react"
import DigitalSlide from "../../components/DigitalSlide"
import { DIGITALIMAGES } from "../../records/imageRecords"
import VideoSlide from "../../components/VideoSlide"
import { digitalArtIcon } from "../../records/records"
import cover from "../../assets/images/skills/digitalArt/picture/cover.png"
import { ThemeContext } from "../../context/ThemeContext"

function DigitalArt() {
   const [image, setImage] = useState("sample")
   const [showImage, setShowImage] = useState(true)
   const { themeStyle } = useContext(ThemeContext)

   useEffect(() => {
      console.log("Selected Skill:")
   }, [image])

   const handleClickImage = (getimage) => {
      setImage(getimage.picture)
      setShowImage(false)

      setTimeout(() => {
         setShowImage(true)
      }, 0)
   }

   return (
      <div
         name="digitalArt"
         className="max-md:px-0 skillsScreen relative justify-start max-w-screen-xl p-4 mx-auto flex flex-col place-content-start w-full h-full"
      >
         <div className="max-md:border-[3px] flex justify-center border-[5px] border-solid rounded-lg  border-custom-primary">
            <div className="max-md:grid-rows-1 grid grid-flow-col grid-rows-2 gap-[5px] overflowscroll p-[5px]">
               {DIGITALIMAGES.map(({ id, icon, picture }) => {
                  return (
                     <DigitalSlide
                        key={id}
                        onSelect={() => handleClickImage({ picture })}
                        name={icon}
                        isSelected={image === picture}
                     />
                  )
               })}
            </div>
         </div>
         <div className="max-md:flex-col flex justify-between my-[0.75rem] gap-3 h-[100%] max-h-[800px]">
            <div className=" w-[40%] max-md:w-[100%]  border-[5px] border-solid border-custom-primary rounded-lg flex justify-center place-items-center ">
               <div className="content h-[100%] flex place-items-center justify-center w-full">
                  {showImage && (
                     <img
                        className={`showImage ${
                           image === "sample"
                              ? "max-md:h-full min-[1600px]:h-full h-[500px] object-cover w-full"
                              : "max-md:h-[55vh] min-[1600px]:h-[55vh] h-[500px] max-h-[700px] object-contain max-w-[120%]"
                        }`}
                        src={image === "sample" ? cover : image}
                        alt="Selected Digital Art"
                        loading="lazy"
                     />
                  )}
               </div>
            </div>

            <div
               className={`${themeStyle.backgroundColor} max-md:w-full w-[60%] flex flex-col  border-[5px] border-solid border-custom-primary rounded-lg justify-between p-[20px]`}
            >
               <p className="max-md:px-[0px] text-justify px-[20px] h-[50%] place-items-center flex">
                  Having previously served as both a Division and National
                  illustrator for the Department of Education, I have created
                  artwork that has gained national recognition and been
                  prominently featured in schools and on various social media
                  platforms. This experience has not only allowed me to develop
                  and refine my skills in digital art but has also sparked an
                  interest in pursuing a career as a virtual assistant within my
                  field.
               </p>
               <div className="min-[1600px]:h-[50%] flex flex-col">
                  <h1
                     className={`${themeStyle.headingColor} ${themeStyle.shadow} max-md-text-[30px] text-[35px] leading-9 uppercase font-primary text-center p-[10px]`}
                  >
                     Digital art software background
                  </h1>
                  <div className="flex justify-center gap-3">
                     {digitalArtIcon.map(
                        ({ id, image, name, selectCircle, rate }) => (
                           <VideoSlide
                              image={image}
                              name={name}
                              rate={rate}
                              key={id}
                              selectCircle={selectCircle}
                           />
                        )
                     )}
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default DigitalArt
