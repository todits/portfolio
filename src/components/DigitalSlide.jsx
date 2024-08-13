import React from "react";
import { styled } from "styled-components";

const Image = styled.img`
   height: auto;
   min-height: 60px;
   animation: pop-in 0.5s cubic-bezier(0.68, -0.55, 0.65, 0.52) forwards;
`;

function DigitalSlide({ name, onSelect, isSelected }) {
   return (
      <div className="flex justify-center">
         <button onClick={onSelect} className="group">
            <div
               className={`${
                  isSelected
                     ? "border-solid border-2 border-custom-secondary selectedicon min-[1600px]:w-[85px] min-[1600px]:h-[85px] h-[65px] w-[65px] from-custom-background bg-gradient-to-b  to-custom-fourth"
                     : "min-[1600px]:w-[80px] min-[1600px]:h-[80px] h-[60px] w-[60px] m-[2px]  from-custom-background bg-gradient-to-b  to-custom-primary ]"
               }  rounded-[5px]  `}
            >
               <Image
                  className=" h-[auto] min-h-[60px] min-[1600px]min-h-[80px]"
                  src={name}
                  alt="Selected Digital Art"
                  loading="lazy"
               />
            </div>
         </button>
      </div>
   );
}

export default DigitalSlide;
