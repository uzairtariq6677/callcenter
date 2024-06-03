import Navbar from "@/components/Navbar";
import BasicRating from "@/components/Rating";
import { LuClock3 } from "react-icons/lu";
import Link from "next/link";

import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div
        className="h-[100vh]"
        style={{
          backgroundImage: "url('/banner4.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Navbar />
        <div className="my-3 gap-2 flex flex-col justify-center items-center">
          <p className="text-center text-white text-[40px] font-roboto font-bold md:text-[60px]">
            Professional Business Solutions
          </p>
          <p className="text-white text-sm md:text-[26px] font-roboto">
            Let our consultants relieve your business pains from IT to branding
          </p>
        </div>
        <div className="flex flex-row my-2 gap-2 justify-center items-center pt-2s">
          <button className="p-3 border-white border-[1px] rounded-[3px] text-white uppercase">
            Services
          </button>
          <button className="border border-primary-red bg-red-600 p-3 uppercase">
            Free Quote
          </button>
        </div>
       
      </div>

      
        <div className="my-12 ">
          <h1 className="text-center text-2xl font-roboto font-bold">AABS Services</h1>
        </div>

        <div className=" flex flex-col lg:flex-row justify-center items-center gap-9 my-10">
          <div className="bg-white mx-3 shadow-custom-light lg:max-w-[359px]  border-r-4 flex flex-col gap-3 py-6 px-3 justify-center items-center transition-transform duration-300 ease-in-out transform hover:scale-110">
            <div className="relative h-[140px] w-[205px]">
              <Image
                src="/It.png"
                layout="fill"
                objectFit="contain"
                alt="IT Consulting"
              />
            </div>
            <p className="text-[20px] text-center font-semibold font-roboto">
              IT Consulting
            </p>
            <p className=" text-center text-[#58676d] font-roboto mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare.
            </p>
          </div>
          <div className=" lg:max-w-[359px] mx-3  bg-white shadow-custom-light border-r-4 flex px-3 flex-col gap-3 py-6 justify-center items-center transition-transform duration-300 ease-in-out transform hover:scale-110">
            <div className="relative min-h-[140px] w-[205px]">
              <Image
                src="/banner2.png"
                layout="fill"
                objectFit="contain"
                alt="Web Design and Development"
              />
            </div>
            <p className="text-[20px] text-center font-semibold font-roboto">
              Web Design and Development
            </p>
            <p className=" text-center text-[#58676d] font-roboto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare.
            </p>
          </div>
          <div className=" lg:max-w-[359px] mx-3 bg-white shadow-custom-light border-r-4 px-3 flex flex-col gap-3 py-6 justify-center items-center transition-transform duration-300 ease-in-out transform hover:scale-110">
            <div className="relative min-h-[140px] w-[205px]">
              <Image
                src="/banner3.png"
                layout="fill"
                objectFit="contain"
                alt="Brand Development"
              />
            </div>
            <p className="text-[20px] text-center font-semibold font-roboto">
              Brand Development
            </p>
            <p className=" text-center text-[#58676d] font-roboto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="border border-primary-red hover:bg-[#c50f42] px-6 py-1 rounded-[3px] text-center">
            View More
          </button>
        </div>
       
        <p className="text-center py-24 text-4xl font-bold text-[#444]">
          Professional Client Reviews
        </p>
        <div className="flex flex-col lg:flex-row gap-7 px-3 lg:justify-center">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="flex flex-col shadow-custom-light bg-white p-4 gap-5 lg:w-[695px]"
            >
              <div className="flex flex-row gap-3 items-center">
                <Image
                  src="/person.png"
                  height={37}
                  width={37}
                  className="rounded-full"
                  alt="Person"
                />
                <p className="text-[18px] text-[#444] font-roboto font-bold">
                  Susan Schehr
                </p>
              </div>
              <p className="font-roboto text-gray-500">
                I have been a business and personal client of Alex for 612
                years. My favorite part of the business is when they deliver
                fresh cupcakes to my establishment. Totally recommend.
              </p>
              <div className="flex flex-row items-center gap-2 justify-between">
                <div>
                  <BasicRating />
                </div>
                <div className="flex flex-row items-center gap-1">
                  <LuClock3 /> 4 months ago
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="my-14 flex justify-center py-2">
          <button className="border border-primary-red text-center hover:bg-[#c50f42] px-2 py-2">
            View More Reviews
          </button>
        </div>
        <div className="flex  pl-[2%] pr-[2%]  items-center md:pl-[300px] py-[20px] w-full  gap-16 bg-[#f4f6f8]  uppercase " style={{backgroundImage:"URL('/3dimage.png')",backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
          <div className=" w-[400px]  ">
            <div className="mb-5">
              <h1 className="text-[30px] text-[#444] font-bold ">
                Why Businesses Choose Us
              </h1>
            </div>
            <div className=" flex flex-col gap-5">
              <p className="text-[20px] font-medium font-roboto">76 Day Guarantee</p>
              <p className="text-[#58676d] font-roboto">
                We offer a 14-day guarantee on all services, to ensure we’re the
                right fit for each other. We recommend you take advantage of our
                free consultation before even making your decision to work with
                us.{" "}
                <Link href="" className="uppercase text-red-700">
                  Read more
                </Link>
              </p>
            </div>
            <div className=" flex flex-col gap-5 mt-5">
              <p className="text-[20px] font-medium">
                Loads of Super Knowledge
              </p>
              <p className="text-[#58676d]">
                Our experts know all about running a successful business and
                what is needed. We have over 45 years of combined experience.
                Contact us to learn more about how we can help your venture
                grow!{" "}
                <Link href="" className="uppercase text-red-700">
                  Read more
                </Link>
              </p>
            </div>
            <div className=" flex flex-col gap-5 mt-5">
              <p className="text-[20px] font-medium">
                We're Everywhere! Even while you sleep!
              </p>
              <p className="text-[#58676d]">
                All American Business Solutions is the best choice for business
                consulting in the United States as well as worldwide. Whether
                it’s NYC or Alaska, we bring our service straight to your office
                or IT department.{" "}
                <Link href="" className="uppercase text-red-700">
                  Read more
                </Link>
              </p>
            </div>
          </div>
         
        </div>
        <div className="  flex flex-col p-3 lg:flex-row  my-7 md:justify-center items-center">
          <div className="flex flex-col gap-5 my-3  lg:max-w-[539px] ">
            <h1 className="text-[30px] font-roboto font-bold text-[#444]">
              Are you an entrepreneur looking to grow businesses and build
              wealth?
            </h1>
            <p className="text-[28px] font-light font-roboto text-[#58676d]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
            {[...Array(3)].map((_, index) => (
              <div key={index} className="flex flex-row gap-3 items-center">
                <div className="h-10">
                  <Image
                    src="/5c167fe0dab57656ff77b7b3_icon-9.svg"
                    width={40}
                    height={40}
                    alt="IT"
                  />
                </div>
                <div>
                  <p className="text-[20px] text-[#444] font-medium">
                    Increase your top-line by 34%
                  </p>
                  <p className="text-[#444]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            ))}
          </div>
<div className="lg:max-w-[539px]  w-full my-8">
          <div className="bg-[#f1f1f1]  p-8 rounded-lg shadow-lg  ">
            <h1 className="text-2xl font-bold mb-6 text-center ">
              Request a Call or Visit
            </h1>
            <ContactForm />
          </div>
          </div>
        </div>
     
     

     
    </>
  );
}
