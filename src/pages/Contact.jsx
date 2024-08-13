import React from "react";

const Contact = () => {
   return (
      <div name="contact" className="p-4 text-custom-secondary h-screen">
         <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
            <div className="pb-8">
               <p className="text-4xl font-bold inline border-b-4 border-gray-700">
                  Contact
               </p>
               <p className="py-6">Submit the form below</p>
            </div>
            <div className="flex justify-center items-center">
               <form
                  action="https://getform.io/f/b6981c22-eb01-42a0-adf2-e62481367762"
                  method="POST"
                  className="flex flex-col w-full md:w-1/2"
               >
                  <input
                     type="text"
                     name="name"
                     placeholder="Enter your name"
                     className="p-2 bg-transparent border-2 rounded-md text-custom-secondary focus:outline-none"
                  />
                  <input
                     type="text"
                     name="name"
                     placeholder="Enter your email"
                     className="my-4 p-2 bg-transparent border-2 rounded-md text-custom-secondary focus:outline-none"
                  />
                  <textarea
                     name="message"
                     placeholder="Enter your message"
                     rows="10"
                     className="p-2 bg-transparent border-2 rounded-md text-custom-secondary focus:outline-none"
                  ></textarea>

                  <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-100 duration-300">
                     Let's Talk
                  </button>
               </form>
            </div>
         </div>
      </div>
   );
};

export default Contact;

// for background
//  className="p-4 text-white bg-gradient-to-b from-gray-800 to-black w-full h-screen"
