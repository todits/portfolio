import React, { useState } from "react";
import Footer from "../../components/Footer";
import VideoSlide from "../../components/VideoSlide";
import { videoEditingIcon, videoThumbnails } from "../../records/records";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export default function VideoEditing() {
   const { themeStyle } = useContext(ThemeContext);
   const [videosrc, setVideosrc] = useState("");

   const handleClickVideo = (value) => {
      setVideosrc(value);
   };

   return (
      <div name="videoEditing" className=" flex skillsScreen w-full">
         <div className=" md:max-w-screen-xl  p-x mx-auto flex flex-col place-content-start w-full h-full">
            <div className="text-center mb-5 max-[850px]:mb-0">
               <h1
                  className={`${themeStyle.headingColor} ${themeStyle.shadow} max-md:text-[30px] uppercase font-primary text-[50px] text-custom-secondary textshadow`}
               >
                  Video Editing Background
               </h1>
               <div className="flex justify-center gap-[4%]">
                  {videoEditingIcon.map((videoIcon) => (
                     <VideoSlide
                        key={videoIcon.id}
                        image={videoIcon.image}
                        name={videoIcon.name}
                        selectCircle={videoIcon.selectCircle}
                        rate={videoIcon.rate}
                     />
                  ))}
               </div>
            </div>
            <div className="max-[1600px]:mt-[4%] mt-[0] flex gap-8 max-[850px]:flex-col">
               <div className=" flex flex-col gap-2 w-[75%] max-[850px]:w-full">
                  <div className="z-50 rounded-s-3xl responsive-iframe">
                     <iframe
                        autoPlay
                        allowFullScreen
                        src={
                           videosrc
                              ? videosrc.source
                              : "https://drive.google.com/file/d/1n2um39FJD2RVvmOoZeX8HdRJGyGu5ZT6/preview"
                        }
                        width="100%	"
                     ></iframe>
                  </div>
                  <div className="text-2xl">{videosrc.title}</div>
                  <div className="w-[100%] bg-slate-200 h-[100px] rounded-xl p-3"></div>
               </div>
               <div className=" w-[25%] flex flex-col z-50 gap-[2%] max-[850px]:flex-row max-[850px]:w-full">
                  {videoThumbnails.map((videoThumbnail) => (
                     <div
                        key={videoThumbnail.id}
                        className="flex flex-col cursor-pointer max-[850px]:w-[33.33%]"
                        onClick={() => handleClickVideo(videoThumbnail)}
                     >
                        <div>
                           <img
                              src={videoThumbnail.image}
                              alt=""
                              className="w-[100%] rounded-lg"
                           />
                        </div>
                        <div className="text-2xl max-[850px]:text-[16px] ">
                           {videoThumbnail.title}
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
}
