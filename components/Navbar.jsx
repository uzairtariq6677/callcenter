"use client";
import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
const Navbar = () => {
  const [menu, setmenu] = useState(false);
  const [buttonColor, setButtonColor] = useState(false);
  const toggleMenu = () => {
    setmenu(!menu);
    setButtonColor(!buttonColor);
  };
  return (
    <>
      <div className="max-w-7xl mx-auto  ">
        <div className="max-w-[1149px]  h-[49px]  pt-10 pb-10 justify-around mx-auto  border-b border-[#333] shadow-sm items-center  flex flex-row">
          <div className="flex flex-row gap-5 text-white">
            <button className=" border-[1px] text-[14px] border-primary-red text-sm  px-[5px] py-[5px] font-roboto ">
              Client Access
            </button>
            <button className=" hidden md:block  font-roboto text-[14px]   border-[1px] border-primary-red px-[5px] py-[5px]">
              {" "}
              online bill payment
            </button>
          </div>
          <div className="flex flex-row gap-5 text-white">
            <button className=" hidden md:block   border-[1px] border-primary-red  justify-end px-[5px] py-[5px] font-roboto  ">
              {" "}
              Schdule Meeting
            </button>
            <button className="   px-5 flex items-center gap-2">
              <FaPhoneAlt className="items-center text-[#941647]" />
              64673738288272
            </button>
          </div>
        </div>
        <div className=" flex  flex-row items-center h-[90px] justify-between px-10 mt-1 ">
          <div className=" relative  w-[180px] h-[60px]">
            <Image src="/logo.png" fill={true}></Image>
          </div>
          {/* // for large screen */}
          <div className=" flex-row gap-5 hidden md:block">
            <ul className="flex flex-row gap-4 text-white text-[14px] uppercase">
              <Link href="/" className="hover:text-[#c50f42] mt-2">
                HOME
              </Link>
              <Link href="/about" className="hover:text-[#c50f42]  mt-2">
                ABOUT
              </Link>
              <Link href="/services" className="hover:text-[#c50f42]  mt-2">
                SERVICES
              </Link>
              <Link href="/contact" className="hover:text-[#c50f42]  mt-2">
                CONTACT
              </Link>
              <Link href="/contact">
                <button className="bg-[#c50f42] items-center px-3 py-2">
                  GET A FREE QUOTE
                </button>
              </Link>
            </ul>
          </div>
          {/* / for small screen */}
          <div className="md:hidden w-[100vw]   "  onClick={toggleMenu} >
            <div className={`flex relative justify-end w-fit ml-auto  p-2  ${buttonColor ? 'bg-[#C8C8C8]' : 'bg-transparent'}`}>
              <button  >
                <IoMenu className="text-white h-10 w-10" /> 
              
              </button>
              {menu && (
              <div className="absolute top-[70px] w-[95vw] right-[-20px]  gap-10 z-1 bg-white  ">
                <ul className="flex flex-col gap-10 pl-3 text-black  text-[14px] uppercase mt-3 mb-3">
                  <div>
                  <Link href="/" className="hover:text-[#c50f42] pl-3">
                    HOME
                  </Link>
                  </div>
                  <Link href="/about" className="hover:text-[#c50f42]  pl-3">
                    ABOUT
                  </Link>
                  <Link href="/services" className="hover:text-[#c50f42]  pl-3">
                    SERVICES
                  </Link>
                  <Link href="/contact" className="hover:text-[#c50f42]  pl-3">
                    CONTACT
                  </Link>
                  <div className="mx-2" >
                  <Link href="/contact">
                    <button className="bg-[#c50f42] w-full px-3 py-2 ">
                      GET A FREE QUOTE
                    </button>

                  </Link></div>
                </ul>
              </div>
            )}
            </div>

        
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
