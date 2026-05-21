import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import proj1 from "../assets/proj1.jpeg";
import proj2 from "../assets/proj2.jpeg";
import proj3 from "../assets/proj3.jpeg";
import proj4 from "../assets/proj4.jpeg";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { id: "01", title: "Real-time Chat App", tech: "Next.js / Socket.io / MongoDB", img: proj1, link: "https://chat-app-iota-seven-99.vercel.app/" },
  { id: "02", title: "Code Detector", tech: "NLP / Python", img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200", link: "https://code-detector.onrender.com/" },
  { id: "03", title: "Traffic Vision", tech: "Computer Vision", img: proj2 },
  { id: "04", title: "Clinic Management System", tech: "Next.js / Node.js / MongoDB", img: proj3, link: "https://cms-cgo1.onrender.com/" },
  { id: "05", title: "Safety Objects Detection", tech: "Computer Vision / Python", img: proj4 },
];

const Hero4 = () => {
  const section = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".panel").forEach((panel) => {
        gsap.fromTo(
          panel.querySelector(".panel-img-inner"), // Animate the image itself
          { scale: 1.5, xPercent: -20 },
          {
            scale: 1,
            xPercent: 0,
            ease: "none",
            scrollTrigger: {
              trigger: panel,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={section} className="bg-black text-white py-20 overflow-hidden">

      {/* Section Heading */}
      <div className="px-10 md:px-32 mb-20">
        <div className="flex items-center gap-4 mb-2">
          <div className="w-12 h-[1px] bg-red-600"></div>
          <span className="text-red-600 font-mono tracking-widest text-sm uppercase">Selected Works</span>
        </div>
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter">MY PROJECTS</h2>
      </div>

      {projects.map((p, index) => {
        const isEven = index % 2 === 0;
        return (
          <div
            key={p.id}
            className={`panel relative min-h-[80vh] flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center md:justify-between border-b border-white/5 px-10 md:px-32 py-20 gap-10 md:gap-0`}
          >
            {/* Smaller, Controlled Image Container */}
            <div className="relative shrink-0 w-full md:w-[45vw] h-[40vh] md:h-[60vh] overflow-hidden rounded-sm bg-neutral-900 group">
              <div className="panel-img-inner w-full h-full">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700"
                />
              </div>

              {/* Absolute Overlays for Interactions */}
              {p.link ? (
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/20 backdrop-blur-[2px] cursor-pointer">
                  <span className="px-6 py-3 border border-red-600 bg-black/80 text-white font-mono text-[10px] tracking-[0.2em] uppercase rounded-full flex items-center gap-2 shadow-2xl shadow-red-600/20">
                    Live Project
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  </span>
                </a>
              ) : (
                <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/40 backdrop-blur-[2px] cursor-not-allowed">
                  <span className="px-6 py-3 border border-white/20 bg-[#111] text-neutral-400 font-mono text-[10px] tracking-[0.2em] uppercase rounded-full flex items-center gap-2 shadow-2xl">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                    Display Only
                  </span>
                </div>
              )}
            </div>

            {/* Content Overlap / Side */}
            <div className={`relative z-10 mt-10 md:mt-0 ${isEven ? 'md:ml-[-8vw] md:text-left text-left' : 'md:mr-[-8vw] md:text-right text-right'} pointer-events-none w-full md:flex-1`}>
              <p className={`text-red-600 font-mono tracking-[0.5em] mb-4 text-xl flex ${isEven ? 'justify-start' : 'md:justify-end justify-start'}`}>
                {p.id}
              </p>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-none tracking-tighter uppercase">
                {p.title}
              </h1>
              <p className="mt-4 text-neutral-500 font-medium uppercase tracking-[0.2em] text-xs">
                {p.tech}
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Hero4;