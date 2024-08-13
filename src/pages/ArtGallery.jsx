import React from "react"
import Image1 from "../assets/images/arts/Untitled-1.png"
import Image2 from "../assets/images/arts/Untitled-2.png"
import Image3 from "../assets/images/arts/Untitled-3.png"
import Image4 from "../assets/images/arts/Untitled-4.png"
import Image5 from "../assets/images/arts/Untitled-5.png"
import Image6 from "../assets/images/arts/Untitled-6.png"
import styles from "../styles/ArtGallery.module.css"

const ArtGallery = () => {
   const images = [
      {
         id: 1,
         src: Image1,
      },
      {
         id: 2,
         src: Image2,
      },
      {
         id: 3,
         src: Image3,
      },

      {
         id: 4,
         src: Image4,
      },
      {
         id: 5,
         src: Image5,
      },
      {
         id: 6,
         src: Image6,
      },
   ]
   return (
      <div
         className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen mr-auto"
         name="artgallery"
      >
         <div className="">
            <div className="p-14">
               <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                  Art Gallery
               </p>
            </div>
            <div className={styles.images}>
               {images.map(({ id, src }) => (
                  <div key={id}>
                     <button>
                        <img src={src} alt=" " className={styles.image} />
                     </button>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default ArtGallery
