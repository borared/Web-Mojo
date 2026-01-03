import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-[#0e0937] text-white py-20 px-8 md:px-20 rounded-t-4xl relative z-10 h-290 md:h-screen sm:h-290">
      {/* Animated Logo */}
      <div className="text-4xl font-extrabold mb-6 relative overflow-hidden group w-fit">
        <a
          href="#"
          className="text-4xl sm:text-4xl md:text-4xl xl:text-6xl block relative"
          style={{
            fontFamily: '"Stretch Pro", sans-serif',
          }}
        >
          <span className="block transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] group-hover:-translate-x-full">
            WEB.MOJOO
          </span>
          <span className="absolute block left-150 top-0 transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] group-hover:-translate-x-150 w-full">
            Available!
          </span>
        </a>
      </div>

      <hr className="border-white-600 mb-10" />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-gray-400 mb-40">
        <div>
          <h3 className="font-semibold text-white mb-4 text-xl">
            Design that deserve
          </h3>
        </div>

        <div className="relative">
          <h3 className="font-semibold text-white mb-4 text-xl">
            Our Expertise
          </h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="hover:underline transition-all duration-300 hover:text-white"
              >
                Web Development
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline transition-all duration-300 hover:text-white"
              >
                UI/UX Design
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline transition-all duration-300 hover:text-white"
              >
                Poster Design
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-white mb-4 text-xl">Company</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="hover:underline transition-all duration-300 hover:text-white"
              >
                About us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline transition-all duration-300 hover:text-white"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                onClick={() => navigate("/fullservice")}
                className="hover:underline transition-all duration-300 hover:text-white hover:cursor-pointer"
              >
                Service
              </a>
            </li>
          </ul>
        </div>

        <div className="relative">
          <h3 className="font-semibold text-white mb-4 text-xl">Support</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="hover:underline transition-all duration-300 hover:text-white"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline transition-all duration-300 hover:text-white"
              >
                FAQ & Process
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline transition-all duration-300 hover:text-white"
              >
                Terms & Privacy
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <DotLottieReact
          src="https://lottie.host/401af865-501f-4ce4-b6d0-3c22b910bb7c/oCJfWi6U1L.lottie"
          loop
          autoplay
          className="-mt-58 -ml-75 z-0 w-250 flex justify-start"
        />
      </div>

      <hr className="border-white-600 -mt-12 mb-4" />

      <div className="text-sm text-center text-gray-400 mb-4">
        © Web Mojo 2025. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
