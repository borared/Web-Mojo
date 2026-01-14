import React from 'react'

function Typeservice() {
  return (
    <div className="bg-black text-white min-h-screen py-16 px-4 sm:px-6 lg:px-8 mt-30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <span className="inline-block border border-purple-500 text-purple-400 px-4 py-2 rounded-full text-sm font-medium tracking-wider uppercase">
            Full-Stack Web Development agency
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <div className="space-y-8">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif leading-tight">
              Full-stack Web development services
            </h1>
            <p className="text-lg text-gray-400 max-w-lg">
              Web Mojo provides complete development solution from website
              migration to automatization and ongoing development strategy and
              consulting.
            </p>
            <a
              href="#"
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 shadow-lg"
              style={{ backgroundColor: "#6d28d9" }}
            >
              Build my project
            </a>
          </div>

          <div className="space-y-10 divide-y divide-gray-700">
            <div className="pt-0">
              <h3 className="text-xl font-semibold mb-2">
                Custom API integrations
              </h3>
              <p class="text-gray-400">
                Building web platforms with no limits. We empower your website
                with dynamic functionality by integrating custom APIs for a
                seamless user experience.
              </p>
            </div>

            <div className="pt-8">
              <h3 className="text-xl font-semibold mb-2">
                Animations and interactions
              </h3>
              <p className="text-gray-400">
                Creating engaging website experience with custom animations and
                interactions. Your brand is not boring, neither should your
                website be.
              </p>
            </div>

            <div className="pt-8">
              <h3 className="text-xl font-semibold mb-2">
                Multi-lingual solution implementation
              </h3>
              <p className="text-gray-400">
                Make your website globally accessible and enhance user
                experience with reliable multi-lingual solutions.
              </p>
            </div>

            <div className="pt-8">
              <h3 className="text-xl font-semibold mb-2">
                Clean and Impact Strategy
              </h3>
              <p className="text-gray-400">
                Refining your digital blueprint for maximum effect. We simplify
                complex objectives into a focused, powerful strategy that cuts
                through the noise and ensures every design and development
                decision drives clear business results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Typeservice;