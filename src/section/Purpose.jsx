import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Purpose = () => {
  const purposeRef = useRef(null);
  const purposeInview = useInView(purposeRef, {
    once: true,
    amount: 0.6, // best smooth scroll trigger
  });
   const navigate = useNavigate();

  return (
    <motion.section
      ref={purposeRef}
      initial={{ opacity: 0, y: 80 }}
      animate={purposeInview ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: "easeOut" }}
      id="Purpose"
      className="mt-25"
    >
      <div className="flex flex-col gap-3">
        <div className="flex justify-center">
          <h1
            className="text-white text-3xl mt-10 sm:text-4xl xl:text-6xl lg:text-5xl"
            style={{
              fontFamily: "Rosemartin",
            }}
          >
            Our purpose
          </h1>
        </div>
        <div className="hidden sm:block">
          <div className="flex justify-center flex-col text-center gap-1">
            <p className="text-2xl text-white sm:text-xl xl:text-4xl lg:text-3xl">
              At{" "}
              <span
                style={{
                  fontFamily: "Chetta Vissto",
                  color: "#507FE5",
                }}
              >
                WEB MOJO
              </span>{" "}
              we believe creativity is limitless. Our passion
            </p>
            <p className="text-2xl text-white sm:text-xl xl:text-4xl lg:text-3xl">
              for crafting unique, modern, and user-friendly designs drives
              everything
            </p>
            <p className="text-2xl text-white sm:text-xl xl:text-4xl lg:text-3xl">
              we do. Scroll further to explore our journey, vision,
            </p>
            <p className="text-2xl text-white sm:text-xl xl:text-4xl lg:text-3xl">
              and the innovative projects that define us.
            </p>
            <div className="flex justify-center items-center view-services-container group">
              <a
                onClick={() => navigate("/fullservice")}
                className="text-2xl text-white underline font-normal sm:text-xl xl:text-3xl
                           hover:text-neutral-200 hover:cursor-pointer mt-10 "
              >
                View all services
              </a>
              <div className="w-7 mt-11">
                <img
                  src="./image/arrUp1.png"
                  alt="arrow"
                  className="view-services-arrow"
                  style={{
                    width: "75px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="sm:hidden flex flex-col justify-center text-center px-13">
          <p className="text-xl text-white">
            At{" "}
            <span style={{ fontFamily: "Chetta Vissto", color: "#507FE5" }}>
              WEB MOJO
            </span>{" "}
            we believe creativity is limitless. Our passion for crafting unique,
            modern, and user-friendly designs drives everything we do. Scroll
            further to explore our journey, vision, and the innovative projects
            that define us.
          </p>

          <div className="flex justify-center items-center view-services-container group">
            <a
              onClick={() => navigate("/fullservice")}
              className="text-xl text-white underline font-normal sm:text-xl
                           hover:text-neutral-200 hover:cursor-pointer mt-10"
            >
              View all services
            </a>
            <div className="w-6 mt-11">
              <img
                src="./image/arrUp1.png"
                alt="arrow"
                className="view-services-arrow"
                style={{
                  width: "75px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
export default Purpose;
