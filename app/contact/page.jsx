import { FaPhoneAlt } from "react-icons/fa";
import React from "react";
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { TbWorldWww } from "react-icons/tb";

const page = () => {
  return (
    <>
      <div
        className="min-h-[100vh]"
        style={{
          backgroundImage: "url('/banner6.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
      
          <Navbar />
          <div className="my-20 flex flex-col justify-center items-center">
            <p className="text-center text-white text-[60px] font-roboto font-bold">
              Contact Us
            </p>
            <p className="text-white text-[26px]">
              Call us 24 x 7! We jump high and sleep hard!
            </p>
          </div>

      
      </div>
      <div className="bg-white shadow-custom-light mx-auto lg:w-[800px]  w-[500px]  flex flex-col gap-8  px-40 py-6 relative top-[-100px]">
         <div className="py-8 ">   <p className="text-center text-[#444] text-[28px] font-roboto font-bold">
              GET IN TOUCH
            </p></div>
            <ContactForm  className='pb-5'/>
          </div>
          <p className="text-center text-[36px] font-roboto font-bold mb-12  text-[#444]relative top-[-30px]">
            Customer satisfaction is our top priority,<br /> Don't hesitate to contact
            us
          </p>
          <div className="flex md:flex-row  flex-col gap-3 justify-center items-center mb-12">
          <div className='flex lg:flex-row flex-col gap-3' >
            <div className="min-h-[220px] mr-3 ml-3 p-[40px]  gap-3 shadow-custom-light border-r-[5px] flex flex-col justify-center items-center bg-white ">
              <FaPhoneAlt className="text-[#c50f42]"/>
              <p className="text-gray-400 font-roboto text-xs">CALL ME ON THE TELEPHONE </p>
              <span className="text-base font-roboto ">646 568 5308</span>
            </div>
            <div className="min-h-[220px] mr-3  gap-3  ml-3 p-[40px] shadow-custom-light border-r-[5px] flex flex-col justify-center items-center bg-white ">
              <MdEmail className="text-[#c50f42]"/>
              <p className="text-gray-400 font-roboto text-xs">EMAIL US </p>
              <span className="text-base font-roboto ">hello@aabusiness.org</span>
            </div>
            </div>
            <div className='flex lg:flex-row flex-col gap-3'>
            <div className="min-h-[220px] gap-3  mr-3 ml-3 p-[40px] shadow-custom-light border-r-[5px] flex flex-col justify-center items-center bg-white ">
              <FaLocationDot className="text-[#c50f42]"/>
              <p className="text-gray-400 font-roboto text-xs">VISIT OUR OFFICE </p>
              <span className="text-base font-roboto text-center ">PO BOX 7053 Hicksville,<br /> NY 11801 US</span>
            </div>
            <div className="min-h-[220px] gap-3  mr-3 ml-3 p-[40px] shadow-custom-light border-r-[5px] flex flex-col justify-center items-center bg-white ">
              <TbWorldWww className="text-[#c50f42]"/>
              <p className="text-gray-400 font-roboto text-xs">FIND US ON THE WEB </p>
              <span className="text-base font-roboto ">www.aabusiness.org</span>
            </div>
            </div>
          </div>
    </>
  );
};

export default page;
