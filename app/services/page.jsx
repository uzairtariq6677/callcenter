import Navbar from "@/components/Navbar";
import BasicRating from "@/components/Rating";
import { LuClock3 } from "react-icons/lu";
import Link from "next/link";

import Image from "next/image";

export default function Services() {
  return (
    <>
      <div
        className="h-[100vh]"
        style={{
          backgroundImage: "url('/banner5.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Navbar />
        <div className="  flex flex-col justify-center items-center my-20 ">
          <p className="text-center text-white text-[60px] font-roboto font-bold">
            OUR SERVICES
          </p>
          <p className="text-white text-[26px]">
            Let our experts relieve your business pains
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center my-16 px-2 hidden ">
        
          
          <div className="flex flex-col lg:flex-row px-3 gap-12 my-7 lg:w-[1169px] justify-center items-center  ">
          <div className="relative w-[100%] h-[400px] ">
            <Image
              src="/banner2.png"
              alt="carImg"
              objectFit="contain"
              fill
              className="h-full w-full top-0 left-0 object-cover rounded-[6px]"
            />
          </div>
          <div className="flex flex-col gap-4 w-[100%] items-center lg:items-start">
            <h1 className="text-[#444] text-[28px] font-bold font-roboto">
              IT Consulting
            </h1>
            <p className="text-[#58676d] text-[18px] text-center lg:text-left">
              Lorem ipsum dolor sit amet, cons ec tetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim ven iam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <button className="text-left  border-primary-red bg-[#c50f42] px-2 py-2 w-fit">
              button Text
            </button>
          
        </div>
        </div>
          
        <div className="flex flex-col lg:flex-row px-3 gap-12 my-7 lg:w-[1169px] justify-center items-center  ">
          
          <div className="flex flex-col gap-4 w-[100%] items-center lg:items-start">
            <h1 className="text-[#444] text-[28px] font-bold font-roboto">
              IT Consulting
            </h1>
            <p className="text-[#58676d] text-[18px] text-center lg:text-left">
              Lorem ipsum dolor sit amet, cons ec tetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim ven iam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <button className="text-left  border-primary-red bg-[#c50f42] px-2 py-2 w-fit">
              button Text
            </button>
          
        </div>
        <div className="relative w-[100%] h-[400px] ">
            <Image
              src="/banner2.png"
              alt="carImg"
              objectFit="contain"
              fill
              className="h-full w-full top-0 left-0 object-cover rounded-[6px]"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row px-3 gap-12 my-7 lg:w-[1169px] justify-center items-center  ">
          <div className="relative w-[100%] h-[400px] ">
            <Image
              src="/banner2.png"
              alt="carImg"
              objectFit="contain"
              fill
              className="h-full w-full top-0 left-0 object-cover rounded-[6px]"
            />
          </div>
          <div className="flex flex-col gap-4 w-[100%] items-center lg:items-start">
            <h1 className="text-[#444] text-[28px] font-bold font-roboto">
              IT Consulting
            </h1>
            <p className="text-[#58676d] text-[18px] text-center lg:text-left">
              Lorem ipsum dolor sit amet, cons ec tetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim ven iam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <button className="text-left  border-primary-red bg-[#c50f42] px-2 py-2 w-fit">
              button Text
            </button>
          
        </div>
        </div>
      </div>
      <div className="mb-5">
        <h1 className="text-[#444] text-[28px] font-roboto font-bold text-center">
          See what our experts says about us. We have got over 1000s of positive
          reviews.
        </h1>
        <p className="text-[#58676d]  text-[18px] text-center">
          Lorem ipsum dolor sit amet, cons ec tetur adipis cing elit, sed do
          eiusmod tempor incididunt ut labore et dolore.
        </p>
      </div>
      <div className="flex flex-col hidden mx-3 lg:flex-row gap-2 px-2  justify-center items-center ">
        <div className="bg-white lg:w-[369px] shadow-custom-light flex flex-col px-8 py-10">
          <div className="flex flex-col gap-2 mb-4">
            <Image
              src="/5c167fe0dab576040877b7c3_icon-14.svg"
              height={40}
              width={34}
            />
            <p className="text-[#58676d] text-[18px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </p>
          </div>
          <div className="flex flex-col ">
            <h1 className="text-[#444] text-[28px] font-roboto font-bold">
              Ben Griffin
            </h1>
            <span>Lorem ipsum</span>
          </div>
        </div>
        <div className="bg-white shadow-custom-light lg:w-[369px]  flex flex-col px-8 py-10">
          <div className="flex flex-col gap-2 mb-4">
            <Image
              src="/5c167fe0dab576040877b7c3_icon-14.svg"
              height={40}
              width={34}
            />
            <p className="text-[#58676d] text-[18px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </p>
          </div>
          <div className="flex flex-col ">
            <h1 className="text-[#444] text-[28px] font-roboto font-bold">
              Ben Griffin
            </h1>
            <span>Lorem ipsum</span>
          </div>
        </div>
        <div className="bg-white shadow-custom-light lg:w-[369px]  flex flex-col px-8 py-10">
          <div className="flex flex-col gap-2 mb-4">
            <Image
              src="/5c167fe0dab576040877b7c3_icon-14.svg"
              height={40}
              width={34}
            />
            <p className="text-[#58676d] text-[18px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </p>
          </div>
          <div className="flex flex-col ">
            <h1 className="text-[#444] text-[28px] font-roboto font-bold">
              Ben Griffin
            </h1>
            <span>Lorem ipsum</span>
          </div>
        </div>
      </div>
      <div className=" hidden h-[189px] my-5 bg-[#f1f1f1]  flex flex-col justify-center items-center text-center ">
        <h1 className="text-[#043063] text-4xl font-roboto font-bold">
          Sed ut perspiciatis unde omnis iste
        </h1>
        <p className="text-lg text-[#043063] font-roboto font-light">
          Lorem ipsum dolor sit amet, cons ec tetur adipis cing elit, sed do
          eiusmod tempor incididunt ut labore et dolore.
        </p>
      </div>
      {/* </div> */}
      {/* </div> */}
    </>
  );
}
