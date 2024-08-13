export default function WebDesignExperience({ image, text, link }) {
   return (
      <a
         href={link}
         target="_blank"
         className="flex max-md:flex-col max-md:h-auto h-[200px] w-[100%] rounded-xl roun shadow-lg relative group shadow-custom-primary my-[20px] hover:scale-110 max-md:hover:scale-100 duration-300 border-t-2 border-custom-primary"
      >
         <img
            src={image}
            alt=""
            className="w-[35%] max-md:w-[100%] max-md:rounded-t-xl max-md:rounded-bl-none object-cover object-top rounded-l-xl h-[198px]"
         />

         <p className="w-[65%] max-md:w-[100%] max-md:text-justify max-md:text-[14px] max-md:leading-4 h-[198px] max-md:h-auto max-md:p-[15px]  p-[20px]">
            {text}
         </p>
         <div className="absolute -right-[100px] max-md:hidden m-1 scale-0 group-hover:scale-100 group-hover:right-0 group-hover:bottom-0 duration-300 -bottom-[20px] px-5 py-2 bg-custom-fourth font-primary rounded-xl text-white">
            Click to View Site
         </div>
      </a>
   )
}
