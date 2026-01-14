import React, { useState, useEffect, useRef } from "react";

export default function Features() {
  const [activeFeature, setActiveFeature] = useState(0);
  const featuresRef = useRef([]);
  
  const features = [
    {
      id: 1,
      title: "User‑Centric",
      description: "We start with deep discovery and user research. Our designs are mapped out to create a seamless, intuitive experience that guides your visitors directly to conversion.",
      icon: "👥",
      color: "bg-blue-700",
      stats: ["+47%", "User Engagement", "↑"],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Clean & Scalable",
      description: "Clean, scalable, and brand-aligned design. Every color, font, and layout decision is intentional, ensuring aesthetics meet functionality for a powerful brand presence.",
      icon: "⚡",
      color: "bg-purple-600",
      stats: ["3x", "Faster Load Times", "⚡"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Flawless Mobile",
      description: "We build with modern, high-performance frameworks to deliver fast, robust, and mobile-first websites that look incredible and perform flawlessly on any device.",
      icon: "📱",
      color: "bg-green-600",
      stats: ["99%", "Mobile Optimization", "✓"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    featuresRef.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative w-full overflow-hidden py-20 px-4 md:px-8">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-blue-700 text-white rounded-full text-sm font-semibold tracking-wider">
              WHY CHOOSE US
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            What Makes Us
            <span className="block mt-2">Different & Reliable</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We don't just build websites. We craft digital assets engineered for 
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400"> performance</span>, 
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"> conversion</span>, and 
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400"> effortless brand scaling</span>.
          </p>
        </div>

        {/* Feature Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-700 p-2">
            {features.map((feature, index) => (
              <button
                key={feature.id}
                onClick={() => setActiveFeature(index)}
                className={`hover:cursor-pointer px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeFeature === index
                    ? `bg-gradient-to-r ${feature.color} text-white shadow-lg`
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-xl">{feature.icon}</span>
                  {feature.title}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Main Feature Display */}
        <div className="relative mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Feature Image Only */}
            <div 
              className="relative h-[500px] rounded-3xl overflow-hidden transform transition-all duration-700 hover:scale-[1.02] group"
              ref={el => featuresRef.current[0] = el}
            >
              {/* Background Image */}
              <img 
                src={features[activeFeature].image}
                alt={features[activeFeature].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-tr from-black/50 via-transparent to-transparent`}></div>
              <div className={`absolute inset-0 bg-gradient-to-br ${features[activeFeature].color} opacity-20`}></div>
              
              {/* Border Effects */}
              <div className="absolute inset-0 border-2 border-white/10 rounded-3xl"></div>
              <div className="absolute inset-4 border border-white/5 rounded-2xl"></div>

              {/* Feature Label */}
              <div className="absolute top-6 left-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-sm rounded-full border border-white/10">
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${features[activeFeature].color}`}></div>
                  <span className="text-sm font-medium text-white">FEATURE {activeFeature + 1}</span>
                </div>
              </div>

              {/* Feature Title Overlay */}
              <div className="absolute bottom-6 left-6">
                <h3 className="text-3xl font-bold text-white mb-2">
                  {features[activeFeature].title}
                </h3>
                <div className="flex items-center gap-4">
                  <div className={`px-3 py-1 rounded-lg bg-gradient-to-r ${features[activeFeature].color} text-white text-sm font-medium`}>
                    {features[activeFeature].stats[0]} Improvement
                  </div>
                  <div className="text-gray-300 text-sm">
                    {features[activeFeature].stats[2]}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Feature Content */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gray-800/50 rounded-full">
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${features[activeFeature].color}`}></div>
                  <span className="text-sm font-medium text-gray-300">FEATURE {activeFeature + 1}</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  {features[activeFeature].title}
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  {features[activeFeature].description}
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                {features[activeFeature].stats.map((stat, index) => (
                  <div 
                    key={index}
                    className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:scale-105"
                  >
                    <div className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      {stat}
                    </div>
                    <div className="text-sm text-gray-400 mt-2">
                      {index === 0 ? "Improvement" : index === 1 ? "Success Rate" : "Optimization"}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button className="group relative px-8 py-4 hover:cursor-pointer hover:bg-blue-700  rounded-xl border border-gray-700 hover:border-none transition-all duration-300 overflow-hidden">
                <span className="relative z-10 text-lg font-semibold text-white">
                  Learn More About This Feature
                </span>
                <div className={`absolute inset-0  ${features[activeFeature].color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <div className="text-white absolute right-3 top-1/2 transform -translate-y-1/2 group-hover:translate-x-2 transition-transform duration-300">
                  →
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* All Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              ref={el => featuresRef.current[index + 1] = el}
              className={`group relative overflow-hidden rounded-3xl p-8 border-2 transition-all duration-500 hover:scale-[1.02] ${
                activeFeature === index
                  ? `border-transparent bg-gradient-to-br ${feature.color} bg-opacity-10`
                  : "border-gray-800 hover:border-gray-700"
              }`}
            >
              {/* Background image for cards */}
              <div className="absolute inset-0">
                <img 
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-10`}></div>
              </div>
              
              {/* Hover effect background */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              ></div>
              
              {/* Icon */}
              <div className="relative z-10 mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-3xl mb-4 transform group-hover:rotate-12 transition-transform duration-300`}>
                  {feature.icon}
                </div>
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-white transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
              
              {/* Stats in cards */}
              <div className="relative z-10 mt-6 pt-6 border-t border-gray-800">
                <div className="text-2xl font-bold text-white">
                  {feature.stats[0]}
                </div>
                <div className="text-sm text-gray-400">{feature.stats[1]}</div>
              </div>
              
              {/* Bottom line */}
              <div className={`absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r ${feature.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
            </div>
          ))}
        </div>

        {/* Floating CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-6 bg-gradient-to-r from-gray-900 to-black rounded-2xl p-2 pl-8 border border-gray-800">
            <span className="text-xl font-semibold text-white">Ready to elevate your digital presence?</span>
            <button className="px-8 py-4 text-white bg-blue-700 rounded-xl font-bold  hover:cursor-pointer transition-all duration-300 transform hover:-translate-y-1">
              Build my project
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}