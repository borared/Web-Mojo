import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
const Work = () => {
  const mojoFashionRef = useRef(null);
  const mojoFInview = useInView(mojoFashionRef, {
    once: true,
    amount: 0.5, 
  });
  const mojoDesRef = useRef(null);
  const mojoDesInview = useInView(mojoDesRef, { once: true, amount: 0.2 });

  const mojoClothesRef = useRef(null);
  const mojoCInview = useInView(mojoClothesRef, {
    once: true,
    amount: 0.2, 
  });
  const mojoCDesRef = useRef(null);
  const mojoCDesInview = useInView(mojoCDesRef, { once: true, amount: 0.5 });

  const naekRef = useRef(null);
  const naekInview = useInView(naekRef, {
    once: true,
    amount: 0.2, 
  });
  const naekDesRef = useRef(null);
  const naekDesInview = useInView(naekDesRef, { once: true, amount: 0.5 });

  return (
    <div className="w-full bg-white xl:h-705 h-765 rounded-t-4xl -mt-15 lg:h-935 md:h-850 sm:h-795 relative z-20">
      <div className="px-4 pt-15 lg:px-15">
        <h1
          className="text-4xl xl:text-6xl md:text-5xl lg:text-6xl"
          style={{
            fontFamily: "Chetta Vissto",
          }}
        >
          Our project result
        </h1>
        <div className="mt-7">
          <hr />
        </div>
        <h1
          className="text-3xl xl:text-5xl md:text-4xl lg:text-5xl mt-7 whitespace-nowrap"
          style={{
            fontFamily: "Rosemartin",
          }}
        >
          E-commerce platform
        </h1>
      </div>

      <div className="flex gap-5 px-4 pt-7 lg:px-15">
        <motion.div
          ref={mojoDesRef}
          initial={{ opacity: 0, y: 80 }}
          animate={mojoDesInview ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grow-0 h-150 rounded-xl p-8 w-100 hidden xl:block"
          style={{
            backgroundColor: "#7C4E37",
          }}
        >
          <div>
            <h1 className="text-white text-3xl font-bold">MOJO FASHION</h1>

            <p className="text-white mt-15 qoute">
              "From the start, it was clear that <br /> Web Mojo are true
              masters <br />
              of modern web development. <br /> Choosing Web Mojo was the
              <br />
              non-negotiable step to <br /> successfully launch Mojo <br />
              Fashion."
            </p>

            <div className="mt-42">
              <hr className="border-[#FFFF]" />
            </div>

            <div className="flex h-15 mt-5 gap-2 ">
              <a
                href="https://lilsyaz45.github.io/my-portfolio/#"
                target="_blank"
                className="bg-white w-15 h-15 rounded-4xl"
                id="profile1"
              ></a>
              <div>
                <p className="text-white mt-2">
                  Mr.Sot Noreak Sattya (Co.Founder)
                </p>
                <p className="text-white whitespace-nowrap">
                  Head of development at Mojo Fashion
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          ref={mojoFashionRef}
          initial={{ opacity: 0, y: 80 }}
          animate={mojoFInview ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="grow-2 h-90 rounded-xl xl:h-150 md:h-120 lg:h-150 sm:h-110"
          id="MojoFashion"
          style={{
            backgroundColor: "#7C4E37",
          }}
        ></motion.div>
      </div>
      <div className="lg:px-15 mt-5 xl:hidden px-4">
        <div className="bg-[#7C4E37] rounded-xl h-80 p-8 lg:h-65 md:h-70 sm:h-70">
          <h1 className="text-white text-2xl font-bold">MOJO FASHION</h1>
          <p className="text-white qoute mt-2">
            "From the start, it was clear that Web Mojo are true masters of
            modern web development. Choosing Web Mojo was the non-negotiable
            step to successfully launch Mojo Fashion."
          </p>
          <hr className="mt-3 lg:mt-6 md:mt-6 sm:mt-6 border-[#FFF]" />
          <div className="flex h-15 lg:mt-6 md:mt-5 sm:mt-5 mt-4 gap-2 ">
            <a
              href="https://lilsyaz45.github.io/my-portfolio/#"
              target="_blank"
              className="bg-white w-15 h-15 rounded-4xl"
              id="profile1"
            ></a>
            <div>
              <p className="text-white mt-2">
                Mr.Sot Noreak Sattya (Co.Founder)
              </p>
              <p className="text-white whitespace-nowrap">
                Head of development at Mojo Fashion
              </p>
            </div>
          </div>
        </div>
        <hr className="mt-5" />
      </div>
      <div className="flex gap-5 px-4 pt-5 lg:px-15">
        <motion.div
          ref={mojoClothesRef}
          initial={{ opacity: 0, y: 80 }}
          animate={mojoCInview ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="grow-2 h-75 rounded-xl xl:h-165 md:h-155 lg:h-185 sm:h-125 hover:cursor-pointer"
          id="MojoClothes"
          style={{
            backgroundColor: "#7C4E37",
          }}
        >
          <video
            src="https://res.cloudinary.com/dicrvjstp/video/upload/v1760585543/MojoClothes_uwxd1s.mp4" // replace with your actual video URL
            className="w-full h-full object-cover rounded-xl"
            autoPlay
            muted
            loop
          ></video>
        </motion.div>

        <motion.div
          ref={mojoCDesRef}
          initial={{ opacity: 0, y: 80 }}
          animate={mojoCDesInview ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grow-0 h-165 rounded-xl p-8 w-100 hidden xl:block"
          style={{
            backgroundColor: "#273627",
          }}
        >
          <div>
            <h1 className="text-white text-3xl font-bold">MOJO CLOTHES</h1>

            <p className="text-white mt-15 qoute">
              "From the start, it was clear that <br /> Web Mojo are true
              masters <br />
              of modern web development. <br /> Choosing Web Mojo was the
              <br />
              non-negotiable step to <br /> successfully launch Mojo <br />
              Fashion."
            </p>

            <div className="mt-58">
              <hr className="border-[#FFFF]" />
            </div>

            <div className="flex h-15 mt-5 gap-5">
              <a
                className="bg-white w-15 h-15 rounded-4xl"
                id="profile2"
                href="https://red-bora-portfolio.vercel.app/"
                target="_blank"
              ></a>
              <div>
                <p className="text-white mt-2">Mr.Red Bora (Founder)</p>
                <p className="text-white">Head of design at Mojo Clothes</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="lg:px-15 mt-5 xl:hidden px-4">
        <div className="bg-[#273627] rounded-xl h-80 p-8 lg:h-65 md:h-70 sm:h-70">
          <h1 className="text-white text-2xl font-bold">MOJO CLOTHES</h1>
          <p className="text-white qoute mt-2">
            "From the start, it was clear that Web Mojo are true masters of
            modern web development. Choosing Web Mojo was the non-negotiable
            step to successfully launch Mojo Fashion."
          </p>
          <hr className="mt-3 lg:mt-6 md:mt-6 sm:mt-6 border-[#FFF]" />
          <div className="flex h-15 lg:mt-6 md:mt-5 sm:mt-5 mt-4 gap-2 ">
            <a
              href="https://red-bora-portfolio.vercel.app/"
              target="_blank"
              className="bg-white w-15 h-15 rounded-4xl"
              id="profile2"
            ></a>
            <div>
              <p className="text-white mt-2">Mr.Red Bora (Founder)</p>
              <p className="text-white whitespace-nowrap">
                Head of design at Mojo Clothes
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 pt-15 lg:px-15">
        <div className="mt-5">
          <hr />
        </div>
        <h1
          className="text-3xl mt-7 xl:text-5xl whitespace-nowrap"
          style={{
            fontFamily: "Rosemartin",
          }}
        >
          Entertaining platform
        </h1>
      </div>
      <div className="flex gap-5 px-4 pt-7 lg:px-15">
        <motion.div
          ref={naekDesRef}
          initial={{ opacity: 0, y: 80 }}
          animate={naekDesInview ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grow-0 h-150 rounded-xl p-8 w-100 hidden xl:block"
          style={{
            backgroundColor: "#000",
          }}
        >
          <div>
            <h1 className="text-white text-3xl font-bold">NAEK WATCH</h1>

            <p className="text-white mt-15 qoute">
              "From the start, it was clear that <br /> Web Mojo are true
              masters <br />
              of modern web development. <br /> Choosing Web Mojo was the
              <br />
              non-negotiable step to <br /> successfully launch Mojo <br />
              Fashion."
            </p>

            <div className="mt-42">
              <hr className="border-[#FFFF]" />
            </div>

            <div className="flex h-15 mt-5 gap-3 ">
              <a
                className="bg-white w-15 h-15 rounded-4xl"
                id="profile2"
                href="https://red-bora-portfolio.vercel.app/"
                target="_blank"
              ></a>
              <div>
                <p className="text-white mt-2">Mr.Red Bora (Founder)</p>
                <p className="text-white whitespace-nowrap">
                  Head of development at Naek Watch
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          ref={naekRef}
          initial={{ opacity: 0, y: 80 }}
          animate={naekInview ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grow-2 h-70 rounded-xl xl:h-150 md:h-120 lg:h-150 sm:h-110"
          
          style={{
            backgroundColor: "#000000",
          }}
        >
          <video
            src="https://res.cloudinary.com/dicrvjstp/video/upload/v1767452269/Screen_Recording_2026-01-03_215629_hox9y5.mp4" // replace with your actual video URL
            className="w-full object-cover rounded-xl"
            autoPlay
            muted
            loop
          ></video>
        </motion.div>
      </div>
      <div className="lg:px-15 mt-5 xl:hidden px-4">
        <div className="bg-[#000000] rounded-xl h-80 p-8 lg:h-65 md:h-70 sm:h-70">
          <h1 className="text-white text-2xl font-bold">NAEK WATCH</h1>
          <p className="text-white qoute mt-2">
            "From the start, it was clear that Web Mojo are true masters of
            modern web development. Choosing Web Mojo was the non-negotiable
            step to successfully launch Mojo Fashion."
          </p>
          <hr className="mt-3 lg:mt-6 md:mt-6 sm:mt-6 border-[#FFF]" />
          <div className="flex h-15 lg:mt-6 md:mt-5 sm:mt-5 mt-4 gap-2 ">
            <a
              href="https://lilsyaz45.github.io/my-portfolio/#"
              target="_blank"
              className="bg-white w-15 h-15 rounded-4xl"
              id="profile2"
            ></a>
            <div>
              <p className="text-white mt-2">Mr.Red Bora (Founder)</p>
              <p className="text-white whitespace-nowrap">
                Head of design at NAEK WATCH
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 pt-15 sm:px-4 lg:px-15">
        <div className="mt-0">
          <hr />
        </div>

        <div className="flex justify-between mt-13 h-130 lg:h-85 xl:h-80 md:h-82 rounded-xl border p-10 sm:h-80">
          <div>
            <h1 className="text-3xl md:text-3xl sm:text-3xl whitespace-nowrap xl:text-4xl">
              Full potential of{" "}
              <span
                style={{
                  fontFamily: "Chetta Vissto",
                }}
              >
                Web Mojo
              </span>
            </h1>
            <p className="text-xl mt-10 lg:text-2xl md:text-xl sm:text-xl xl:text-3xl whitespace-normal">
              check out our other projects that we built using good stategy and
              clean
            </p>
            <button
              className="mt-10 bg-black text-white w-55 h-15 text-xl md:w-50 md:h-15 md:text-xl sm:text-xl sm:w-50 sm:h-14 xl:w-52 xl:h-13 xl:text-[20]
                 hover:bg-blue-800 transition-colors duration-300 hover:cursor-pointer"
            >
              View all projects
            </button>
            <div className="w-55 ml-38 mt-5 sm:hidden">
              <img
                src="https://res.cloudinary.com/dicrvjstp/image/upload/v1762403438/Screenshot_2025-11-04_140430_vds5fy.png"
                alt=""
              />
            </div>
          </div>
          <div className="w-75 -mt-7 lg:mt-1 md:mt-2 md:w-67 sm:mt-6 hidden sm:block">
            <img
              src="https://res.cloudinary.com/dicrvjstp/image/upload/v1762403438/Screenshot_2025-11-04_140430_vds5fy.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
