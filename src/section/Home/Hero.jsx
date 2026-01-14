import React from "react";
import Navbar from "../../components/Navbar";

const Hero = () => {
  return (
    <section className="min-h-screen relative" id="Hero">
      <div>
        <Navbar />
      </div>
      {/* Dark overlay */}
      <div id="darker-bg"></div>

      {/* Hero text content */}
      <div className="absolute z-20 px-6 mt-55 flex flex-col gap-5 lg:px-15">
        <p className="text-white text-3xl font-bold md:text-5xl sm:text-4xl xl:text-6xl">
          Unleash Your Digital
        </p>
        <p className="text-white text-3xl font-bold md:text-5xl sm:text-4xl xl:text-6xl">
          Edge.{" "}
          <span
            style={{
              fontFamily: '"Chetta Vissto", sans-serif',
              color: "#507FE5",
              fontWeight: "normal",
            }}
          >
            Websites
          </span>{" "}
          Built for
        </p>
        <p className="text-white text-3xl font-bold md:text-5xl sm:text-4xl xl:text-6xl">
          Unstoppable Growth.
        </p>
        <p className="text-white text-2xl hidden md:block">
          We design and develop high-performance Webflow platforms <br />
          that convert visitors into loyal customers, giving your brand the{" "}
          <br />
          authority it deserves.
        </p>
        <p className="text-white md:hidden sm:block text-1xl">
          We design and develop high-performance Webflow platforms that convert
          visitors into loyal customers, giving your brand the authority it
          deserves.
        </p>
      </div>
    </section>
  );
};

export default Hero;
