import Image from "next/image";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  // return
  return (
    
    <div className="bg-[#04254a]"  style={{
      backgroundImage: "url('/bgimage.png')",
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
      backgroundPosition:"50% 0px",
     
    }}>
      <div className="max-w-7xl  mx-auto p-4 pt-[150px] mt-10  ">
       
          <div className="flex flex-row h-[82px]  border-b border-[#333] pb-3  items-center  justify-between">
            <div>
              <Image src="/logo.png" width={200} height={82} />
            </div>
            <div className="flex flex-row gap-3">
              <FaFacebookF className="border border-red-500 bg-[#c50f42]  " />
              <FaTwitter className="border border-red-500 bg-[#c50f42] " />
              <FaSquareInstagram className="border border-red-500 bg-[#c50f42]" />
            </div>
           
          </div>
          <div className=" flex flex-col  lg:flex-row  flex-wrap justify-between mt-8 pb-12 border-b border-[#333] ">
            <div className="flex flex-col  lg:flex-row gap-3 text-white md:max-w-[767px]">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure
              </p>
              <p>
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </p>
            </div>
            <div className="flex flex-col gap-4 text-white">
              <h1>Contact DETAILS</h1>
              <div className="flex flex-row gap-2 text-white items-center">
                <FaLocationDot /> <p>PO BOX 7053 Hicksville, NY 11802</p>
              </div>
              <div className="flex flex-row gap-2 text-white items-center">
                <FaPhoneAlt />
                <p>+1 646 568 5308</p>
              </div>
              <div className="flex flex-row gap-2 text-white items-center">
                <MdEmail />
                <p>newyork@aabusiness.org</p>
              </div>
            </div>
            
          </div>
          <div className="flex flex-col lg:flex-row gap-3 text-center items-center text-white justify-between mt-3">
              <div className="flex md:flex-row flex-col gap-3">
                <Link href=''>Legal</Link>
                <Link href=''>Privacy Policy</Link>
                <Link href=''>Terms of Use</Link>
                <Link href=''>Help Center</Link>
                
               
              </div>
              <div><p>Copyright © 2016 All American Business Solutions Inc. All rights reserved.</p></div>
            </div>
       
      </div>
    </div>
  );
};

export default Footer;
