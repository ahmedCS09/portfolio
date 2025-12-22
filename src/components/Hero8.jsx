import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { lineBase } from '../utils/lineBase';

gsap.registerPlugin(ScrollTrigger);

const Hero8 = () => {
    const sectionRef = useRef(null);
    const textRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(textRef.current, {
                y: 50,
                opacity: 0,
                duration: 1.5,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: textRef.current,
                    start: "top 80%",
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={sectionRef} className="w-screen flex items-center justify-center min-h-screen bg-black py-6 font-sans selection:bg-red-500">
            {/* Main Container */}
            <div className="relative w-[95%] max-w-[1400px] h-auto bg-[rgb(34,34,32)] rounded-[40px] p-8 md:p-20 text-white overflow-hidden flex flex-col justify-between border border-white/5 shadow-2xl">

                {/* Top Section */}
                <div className="flex justify-between items-start uppercase">
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
                            </span>
                            <span className="text-sm font-bold tracking-[0.3em] text-red-600">Open to Work & Collaborate</span>
                        </div>
                        <span className="text-base font-medium opacity-50">Full-Stack Developer / 2025</span>
                    </div>
                    <div className="hidden md:block text-right opacity-30 text-sm tracking-widest font-medium">
                        BASED IN <br /> KARACHI, PK
                    </div>
                </div>

                {/* Massive Typography Content */}
                <div className="flex flex-col items-end text-right w-full mt-20 mb-20">
                    <h1 ref={textRef} className="font-black" style={{ fontSize: 'clamp(2.2rem, 8vw, 6.5rem)' }}>
                        <span className={`${lineBase} pr-[10%] text-neutral-400`}>
                            I build scalable
                        </span>
                        <span className={`${lineBase} pr-0`}>
                            digital products
                        </span>
                        <span className={`${lineBase} pr-[18%] text-neutral-500`}>
                            from logic
                        </span>
                        <span className={`${lineBase} pr-[4%] text-red-600`}>
                            to interface
                        </span>
                        <span className={`${lineBase} pr-[22%] text-neutral-400`}>
                            optimized code
                        </span>
                        <span className={`${lineBase} pr-0`}>
                            high performance
                        </span>
                        <span className={`${lineBase} pr-[12%] opacity-20`}>
                            & clean systems
                        </span>
                    </h1>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center md:items-end mt-12 border-t border-white/10 pt-8 gap-6">
                    <div className="flex flex-col gap-2">
                        <div className="text-[10px] uppercase tracking-[0.4em] text-red-600 font-bold">Tech Stack</div>
                        <div className="text-xs md:text-sm font-mono opacity-40 uppercase tracking-[0.15em]">
                            MongoDB • Express • React • Node • ML
                        </div>
                    </div>

                    <a href="#projects" className="group relative bg-white text-black px-8 py-4 rounded-full font-bold text-sm uppercase overflow-hidden transition-all inline-block">
                        <a href="#projects"><span className="relative z-10 group-hover:text-white transition-colors duration-300">View Projects</span></a>
                        <div className="absolute inset-0 bg-red-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero8;