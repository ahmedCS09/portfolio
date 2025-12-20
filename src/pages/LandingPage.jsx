import React, { useState, useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import Hero1 from '../components/Hero1'
import Hero2 from '../components/Hero2'
import Hero3 from '../components/Hero3'
import Hero4 from '../components/Hero4'
import Hero5 from '../components/Hero5'
import Hero6 from '../components/Hero6'
import Hero7 from '../components/Hero7'
import Hero8 from '../components/Hero8'

const Preloader = ({ onComplete }) => {
  const containerRef = useRef(null);
  const counterRef = useRef(null);
  const barRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: onComplete
      });

      // Counter Animation
      let count = { val: 0 };
      tl.to(count, {
        val: 100,
        duration: 2,
        ease: "power2.inOut",
        onUpdate: () => {
          if (counterRef.current) {
            counterRef.current.textContent = Math.floor(count.val);
          }
        }
      })
        // Progress Bar Animation (syncs with counter)
        .to(barRef.current, {
          width: "100%",
          duration: 2,
          ease: "power2.inOut"
        }, 0)
        // Reveal Animation
        .to(containerRef.current, {
          yPercent: -100,
          duration: 1,
          ease: "power4.inOut",
          delay: 0.2
        });

    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div ref={containerRef} className="fixed inset-0 z-[100] bg-[#0a0a0a] flex flex-col justify-between p-10 text-white font-mono">
      {/* Top Bar */}
      <div className="flex justify-between items-start uppercase text-xs tracking-widest opacity-50">
        <span>Portfolio 2025</span>
        <span>Ahmed Musab</span>
      </div>

      {/* Center Content */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <div className="overflow-hidden h-8 mb-2">
          <div className="animate-pulse text-red-600 font-bold tracking-[0.2em] text-sm uppercase">Loading Experience</div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full">
        <div className="flex justify-between items-end mb-4">
          <span className="text-xs tracking-widest opacity-50">LOADING ASSETS</span>
          <span className="text-8xl font-black tracking-tighter leading-none">
            <span ref={counterRef}>0</span>%
          </span>
        </div>
        <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
          <div ref={barRef} className="h-full bg-red-600 w-0"></div>
        </div>
      </div>
    </div>
  );
};

function LandingPage() {
  const [introFinished, setIntroFinished] = useState(false);

  return (
    <div>
      {!introFinished && <Preloader onComplete={() => setIntroFinished(true)} />}

      {/* Main Content */}
      <div className="">
        <Hero1 startAnimation={introFinished} />
        <Hero2 />
        <Hero3 />
        <Hero4 />
        <Hero5 />
        <Hero6 />
        <Hero7 />
        <Hero8 />
      </div>
    </div>
  )
}

export default LandingPage
