


import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black pt-4 pb-3 px-4 md:px-20">
      <div className="flex justify-between items-center">
        <div className="text-white text-2xl font-semibold">
          BLACK GRAPES GROUP
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-2xl focus:outline-none"
          >
            <CiMenuBurger />
          </button>
        </div>

        <div className="hidden md:flex flex-wrap justify-start gap-6">
          <a href="#" className="text-blue-500 text-lg hover:text-gray-200 transition duration-300">
            Home
          </a>
          <a href="#" className="text-blue-500 text-lg hover:text-gray-200 transition duration-300">
            Service
          </a>
          <a href="#" className="text-blue-500 text-lg hover:text-gray-200 transition duration-300">
            Other Service
          </a>
          <a href="#" className="text-blue-500 text-lg hover:text-gray-200 transition duration-300">
            About Us
          </a>
          <a href="#" className="text-blue-500 text-lg hover:text-gray-200 transition duration-300">
            Contact Us
          </a>
        </div>

        <div className="hidden md:block text-white text-lg text-center md:text-left ">
       <h4 className="font-semibold mb-2">Have any Questions?</h4>
       <a href="tel:8878416954" className="hover:text-gray-200">Call: 8878416954</a>
     </div>

        

      </div>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden mt-4 bg-blue-500 rounded-lg p-4`}
      >
        <a
          href="#"
          className="block text-white text-lg hover:text-gray-200 mb-2 transition duration-300"
        >
          Home
        </a>
        <a
          href="#"
          className="block text-white text-lg hover:text-gray-200 mb-2 transition duration-300"
        >
          Service
        </a>
        <a
          href="#"
          className="block text-white text-lg hover:text-gray-200 mb-2 transition duration-300"
        >
          Other Service
        </a>
        <a
          href="#"
          className="block text-white text-lg hover:text-gray-200 mb-2 transition duration-300"
        >
          About Us
        </a>
        <a
          href="#"
          className="block text-white text-lg hover:text-gray-200 transition duration-300"
        >
          Contact Us
        </a>
        
       


      </div> 
      
       

      

      

      
    </nav>
  );
}