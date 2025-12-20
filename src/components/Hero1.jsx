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
    <div className='min-h-screen w-full flex justify-center items-center bg-black p-4 md:p-10 selection:bg-red-600'>
      <div className='relative w-full max-w-[1400px] min-h-[85vh] bg-[rgb(34,34,32)] flex flex-col md:flex-row justify-between items-stretch p-6 md:p-12 rounded-[30px] overflow-hidden border border-white/5 shadow-2xl'>
        <Navbar1 />

        {/* Glow */}
        <div className='absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-red-600/10 rounded-full blur-[120px] pointer-events-none'></div>

        {/* Image - Bottom Aligned */}
        <div className='flex w-full md:w-1/2 h-[40vh] md:h-full justify-center md:justify-start items-end self-end order-2 md:order-1'>
          <img src={myDP} className='h-full w-auto object-contain transition-transform duration-500 hover:scale-105' style={{ display: 'block' }} alt="Ahmed Musab" />
        </div>

        {/* Name/Text */}
        <div className='text-white w-full md:w-1/2 flex flex-col justify-center items-center md:items-end gap-3 z-10 self-center order-1 md:order-2 mb-8 md:mb-0'>
          <div className="flex items-center gap-3 mb-2">
            <span className="w-8 h-[1px] bg-red-600"></span>
            <span className="text-[10px] tracking-[0.4em] font-bold text-red-600 uppercase">Full Stack Web Developer</span>
          </div>
          <h1 className='text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-black text-center md:text-right uppercase leading-[0.85] tracking-tighter' ref={textRef}>
            {text.split(" ").map((word, wIdx) => (
              <span key={wIdx} className='inline-block whitespace-nowrap'>
                {word.split("").map((char, cIdx) => (
                  <span key={cIdx} className={`anim-char inline-block ${wIdx === 1 ? 'text-red-600' : ''}`}>{char}</span>
                ))}
                &nbsp;
              </span>
            ))}
          </h1>
          <p className='text-sm md:text-lg font-mono text-neutral-500 uppercase tracking-widest text-center md:text-right'>
            MERN Specialist & ML Enthusiast
          </p>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Hero1;