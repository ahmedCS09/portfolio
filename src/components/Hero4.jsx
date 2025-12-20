import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import proj1 from "../assets/proj1.jpeg";
import proj2 from "../assets/proj2.jpeg";
import proj3 from "../assets/proj3.jpeg";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { id: "01", title: "Social Media", tech: "MERN / Firebase", img: proj1 },
  { id: "02", title: "Code Detector", tech: "NLP / Python", img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200" },
  { id: "03", title: "Traffic Vision", tech: "Computer Vision", img: proj2 },
  { id: "04", title: "Karve Gym", tech: "React / MongoDB", img: proj3 },
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

      {projects.map((p) => (
        <div
          key={p.id}
          className="panel relative min-h-[80vh] flex flex-col md:flex-row items-center border-b border-white/5 px-10 md:px-32 py-20"
        >
          {/* Smaller, Controlled Image Container */}
          <div className="relative w-full md:w-[45vw] h-[40vh] md:h-[60vh] overflow-hidden rounded-sm bg-neutral-900 group">
            <div className="panel-img-inner w-full h-full">
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700"
              />
            </div>
          </div>

          {/* Content Overlap / Side */}
          <div className="relative z-10 mt-10 md:mt-0 md:ml-[-5vw] pointer-events-none">
            <p className="text-red-600 font-mono tracking-[0.5em] mb-4 text-xl">
              {p.id}
            </p>
            <h1 className="text-5xl md:text-8xl font-black leading-none tracking-tighter uppercase">
              {p.title}
            </h1>
            <p className="mt-4 text-neutral-500 font-medium uppercase tracking-[0.2em] text-xs">
              {p.tech}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Hero4;