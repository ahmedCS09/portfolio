import React, { useEffect, useRef } from 'react'
import myDP from '../assets/myDP.png'
import Footer from './Footer'
import gsap from 'gsap'
import Navbar1 from './Navbar1'

function Hero1({ startAnimation = true }) {
  const textRef = useRef(null);
  const text = "Ahmed Musab";

  useEffect(() => {
    if (!startAnimation) return;

    const letters = textRef.current.querySelectorAll(".anim-char");
    gsap.fromTo(letters,
      { opacity: 0, y: 30, rotateX: -90 },
      { opacity: 1, y: 0, rotateX: 0, duration: 0.8, stagger: 0.05, ease: "expo.out" }
    );
  }, [startAnimation]);

  return (
    // Added 'overflow-x-hidden' to prevent any animation jitters on mobile
    <div className='min-h-screen w-full flex justify-center items-center bg-black p-3 md:p-10 selection:bg-red-600 overflow-x-hidden'>
      <div className='relative w-full max-w-[1400px] min-h-[90vh] md:min-h-[85vh] bg-[rgb(15,15,15)] flex flex-col md:flex-row justify-between items-center md:items-stretch p-6 md:p-12 rounded-[24px] md:rounded-[30px] overflow-hidden border border-white/5 shadow-2xl'>
        <Navbar1 />

        {/* Glow - Adjusted position for mobile centering */}
        <div className='absolute top-1/2 left-1/2 md:left-1/4 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 bg-red-600/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none'></div>

        {/* Name/Text - Moved to Top on Mobile (Order 1) */}
        <div className='text-white w-full md:w-1/2 flex flex-col justify-center items-center md:items-end gap-2 md:gap-3 z-10 order-1 md:order-2 mt-16 md:mt-0'>
          <div className="flex items-center gap-3 mb-1 md:mb-2">
            <span className="w-6 md:w-8 h-[1px] bg-red-600"></span>
            <span className="text-[8px] md:text-[10px] tracking-[0.3em] md:tracking-[0.4em] font-bold text-red-600 uppercase">
              Full Stack Developer
            </span>
          </div>

          <h1 className='text-[12vw] sm:text-6xl md:text-7xl lg:text-9xl font-black text-center md:text-right uppercase leading-[0.8] tracking-tighter' ref={textRef}>
            {text.split(" ").map((word, wIdx) => (
              <span key={wIdx} className='inline-block whitespace-nowrap'>
                {word.split("").map((char, cIdx) => (
                  <span key={cIdx} className={`anim-char inline-block ${wIdx === 1 ? 'text-red-600' : ''}`}>{char}</span>
                ))}
                {/* Fixed &nbsp; spacing for mobile */}
                <span className="inline-block">&nbsp;</span>
              </span>
            ))}
          </h1>

          <p className='text-[10px] md:text-lg font-mono text-neutral-500 uppercase tracking-[0.2em] md:tracking-widest text-center md:text-right mt-2'>
            MERN Specialist & Exploring React Native
          </p>

          <a
            href="https://canva.link/8dhhp2p6mx3cme0"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative mt-6 px-8 py-3 bg-red-600 hover:bg-white text-white hover:text-red-600 font-bold text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] uppercase rounded-full transition-all duration-300 flex items-center gap-3 overflow-hidden"
          >
            <span className="relative z-10 transition-colors">Download Resume</span>
            <svg className="relative z-10 transition-transform group-hover:translate-x-1" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
          </a>
        </div>

        {/* Image - Bottom Aligned (Order 2) */}
        <div className='flex w-full md:w-1/2 h-[35vh] md:h-full justify-center md:justify-start items-end self-end order-2 md:order-1 mt-auto'>
          <img
            src={myDP}
            className='h-full w-auto object-contain transition-transform duration-500 hover:scale-105 filter grayscale hover:grayscale-0'
            style={{ display: 'block' }}
            alt="Ahmed Musab"
          />
        </div>

        <Footer />
      </div>
    </div>
  )
}

export default Hero1;