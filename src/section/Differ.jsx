import React from 'react'

const Differ = () => {
  return (
     <section className="h-400 lg:h-270 relative" id="Differ">
      
      {/* Dark overlay */}
      <div id="darker-bg"></div>

     <div className='relative z-20 top-35 md:top-50 -mt-30'>
        <div className='flex justify-center mt-30'>
            <h1 className='text-2xl text-center text-white xl:text-5xl sm:text-3xl md:text-4xl'
            style={{
        fontFamily: 'Rosemartin'
     }}
     >What make we different and reliable</h1>
        </div>
        <div className='hidden sm:block'>
            <div className='flex flex-col'>
                <p className='text-white flex justify-center mt-5 text-xl'>We don't just build websites; we craft digital
                    assets engineered for</p>
                <p className='text-white flex justify-center mt-1 text-xl'>performance, conversion, and effortless brand scaling.</p>
            </div>
        </div>
        <div className='sm:hidden'>
            <div className='flex flex-col px-4 text-center'>
                <p className='text-white flex justify-center mt-5 text-xl'>We don't just build websites; we craft digital
                    assets engineered for performance, conversion, and effortless brand scaling.</p>
            </div>
        </div>
        <div className='hidden lg:block'>
            <div className='flex justify-center gap-16 lg:gap-7 mt-15 lg:px-10'>
                <div className='bg-white w-90 h-100 p-5 rounded-xl'>
                    <h1 className='text-2xl font-bold'>User-Centric Strategy</h1>
                    <p className='mt-10 text-2xl italic lg:text-xl xl:text-2xl'>We start with deep discovery and user research. Our designs are mapped out to create a seamless,
                        intuitive experience that guides your visitors directly to conversion.</p>
                        <hr className='mt-20'/>
                </div>
                <div className='bg-white w-90 h-100 p-5 rounded-xl'>
                    <h1 className='text-2xl font-bold'>Clean, Scalable Aesthetics</h1>
                    <p className='mt-10 text-2xl italic lg:text-xl xl:text-2xl'>Clean, scalable, and brand-aligned design. Every color, font, and layout decision is
                        intentional, ensuring aesthetics meet functionality for a powerful brand presence.</p>
                        <hr className='mt-12'/>
                </div>
                <div className='bg-white w-90 h-100 p-5 rounded-xl'>
                    <h1 className='text-2xl font-bold xl:whitespace-nowrap'>Flawless Mobile-First Codey</h1>
                    <p className='mt-10 text-2xl italic lg:text-xl xl:text-2xl'>We build with modern, high-performance frameworks to deliver fast, robust,
                        and mobile-first websites that look incredible and perform flawlessly on any device.</p>
                        <hr className='mt-20'/>
                </div>
            </div>
        </div>
        <div className='lg:hidden'>
            <div className='flex flex-col items-center justify-center gap-10 mt-10'>
                <div className='bg-white w-80 h-85 p-5 rounded-xl'>
                    <h1 className='text-2xl font-bold'>User-Centric Strategy</h1>
                    <p className='mt-2 text-xl italic'>We start with deep discovery and user research. Our designs are mapped out to create a seamless,
                        intuitive experience that guides your visitors directly to conversion.</p>
                        <hr className='mt-20'/>
                </div>
                <div className='bg-white w-80 h-85 p-5 rounded-xl'>
                    <h1 className='text-2xl font-bold'>Clean, Scalable Aesthetics</h1>
                    <p className='mt-2 text-xl italic'>Clean, scalable, and brand-aligned design. Every color, font, and layout decision is
                        intentional, ensuring aesthetics meet functionality for a powerful brand presence.</p>
                        <hr className='mt-12'/>
                </div>
                <div className='bg-white w-80 h-85 p-5 rounded-xl'>
                    <h1 className='text-2xl font-bold'>Flawless Mobile-First Codey</h1>
                    <p className='mt-2 text-xl italic'>We build with modern, high-performance frameworks to deliver fast, robust,
                        and mobile-first websites that look incredible and perform flawlessly on any device.</p>
                        <hr className='mt-12'/>
                </div>
            </div>
        </div>
     </div>
    </section>
  )
}

export default Differ;
