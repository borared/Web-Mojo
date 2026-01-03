import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import {motion} from "framer-motion";

import Navbar from "./Navbar";
const HeadService = () => {
  return (
    <div className="bg-[#090216] h-screen relative">
      <Navbar />
      <div className="absolute z-20 mt-60 w-full">
        <div className="flex">
          <div className=" grow z-20 px-6 flex flex-col gap-5 lg:px-15 ">
            <h1
              className="text-white text-7xl"
              style={{
                fontFamily: "Rosemartin",
              }}
            >
              Our full service
            </h1>
            <p className="text-white text-3xl">
              We deliver complete, end-to-end digital solutions, handling
              strategy, design, and development for high-growth startups.
            </p>
            <div className="flex gap-2">
              <button className="bg-white text-black w-50 h-10 rounded-3xl hover:cursor-pointer hover:bg-[#3461d2] hover:text-white transition-all duration-300">
                Web Development
              </button>
              <button className="bg-white text-black w-50 h-10 rounded-3xl hover:cursor-pointer hover:bg-[#3461d2] hover:text-white transition-all duration-300">
                Web Design
              </button>
              <button className="bg-white text-black w-50 h-10 rounded-3xl hover:cursor-pointer hover:bg-[#3461d2] hover:text-white transition-all duration-300">
                Poster Design
              </button>
            </div>
          </div>
          <div className="w-150 grow z-20 px-6 flex flex-col mr-10 gap-5 lg:px-15 ">
            <DotLottieReact
              src="https://lottie.host/2c57e171-9aac-417e-a297-bb698b52040b/cPYhRaXTdm.lottie"
              loop
              autoplay
              className="w-180 -ml-35 -mt-20"
            />
          </div>
        </div>
      </div>

      <div className="absolute z-20 mt-168 w-full">
       
        <div
          style={{ fontFamily: "Stretch Pro" }}
          className="overflow-hidden absolue inset-0 flex justify-between text-black bg-[#3461d2] text-2xl px-5 h-13 items-center rotate-3 translate-y-13"
        >
          <motion.p
                className="text-black text-2xl font-normal whitespace-nowrap"
                animate={{ x: [1650, -2000] }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 30,
                    ease: "linear",
                  },
                }}
                style={{ willChange: "transform", fontFamily: "Stretch Pro", }}
              >
                Web Development x Web Design x Poster Design x Web Development x Web Design x Poster Design

              </motion.p>
          
        </div>

       <div
          style={{ fontFamily: "Stretch Pro" }}
          className="overflow-hidden absolue inset-0 flex justify-between text-black bg-white text-2xl px-5 h-13 items-center -rotate-3"
        >
          <motion.p
                className="text-black text-2xl font-normal whitespace-nowrap"
                animate={{ x: [-2000, 2000] }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 30,
                    ease: "linear",
                  },
                }}
                style={{ willChange: "transform", fontFamily: "Stretch Pro", }}
              >
                Web Development x Web Design x Poster Design x Web Development x Web Design x Poster Design

              </motion.p>
          
        </div>
      </div>
    </div>
  );
};

export default HeadService;
