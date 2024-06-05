import Navbar from "@/components/Navbar";
import BasicRating from "@/components/Rating";
import { LuClock3 } from "react-icons/lu";
import Link from "next/link";

import Image from "next/image";

export default function About() {
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
        {" "}
        <Navbar />
        <div className=" flex flex-col px-2 my-32 justify-center items-center">

          <p className="text-center text-white text-[60px] font-roboto font-bold">
            About Us
          </p>
          <p className="text-white text-[26px]">
            Let our experts lead your vision
          </p>
        </div>
      </div>
      
        <div className="flex flex-col   lg:flex-row justify-center items-center my-20 gap-14 px-2 ">
          <div className="lg:max-w-[600px] gap-3">
            <h1 className="text-[#444] text-[28px] font-roboto ">
              AABS Mission
            </h1>
            <p className="text-[#58676d] text-left">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat volupt
            </p>
          </div>
          <div className="lg:max-w-[600px] gap-3">
            <h1 className="text-[#444] text-[28px] font-roboto">
              Today's Mission, Tomorrow's Goals
            </h1>
            <p className="text-[#58676d] text-left">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore
            </p>
          </div>
        </div>
      
      <div
        className="relative h-[700px] my-5"
        style={{
          backgroundImage: "url('/aboutbanner.jpeg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
     
        <div className="flex lg:flex-row flex-col  justify-center items-center gap-3 px-4 my-12">
          <div className="flex flex-col px-4 py-3 lg:max-w-[500px] shadow-custom-light bg-white">
            <div className="flex flex-row items-center gap-3">
              <Image
                src="/5c167fe0dab57656ff77b7b3_icon-9.svg"
                width={37}
                height={37}
              />
              <h1>64 Kittens & Doggies</h1>
            </div>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo invent ore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          </div>
          <div className="flex flex-col px-4 py-3   lg:max-w-[500px] shadow-custom-light bg-white">
            <div className="flex flex-row items-center gap-3">
              <Image
                src="/5c167fe0dab57656ff77b7b3_icon-9.svg"
                width={37}
                height={37}
              />
              <h1>3 Billion Cupcakes</h1>
            </div>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo invent ore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          </div>
          <div className="flex flex-col px-4 py-3  lg:max-w-[500px] shadow-custom-light bg-white">
            <div className="flex flex-row items-center gap-3">
              <Image
                src="/5c167fe0dab57656ff77b7b3_icon-9.svg"
                width={37}
                height={37}
              />
              <h1>2,000 Armed Soldiers</h1>
            </div>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo invent ore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          </div>
        </div>
        <div className=" h-[189px] px-2  bg-[#f1f1f1]   flex flex-col justify-center items-center text-center ">
          <h1 className="text-[#043063] text-4xl font-roboto font-bold">
            Get on our side today!
          </h1>
          <p className="text-lg text-[#043063] font-roboto font-light">
            Lorem ipsum dolor sit amet, cons ec tetur adipis cing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>
        </div>
     

      {/* </div> */}
    </>
  );
}
