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
          panel.querySelector(".panel-img"),
          { xPercent: -100 },
          {
            xPercent: 0,
            ease: "power4.out",
            scrollTrigger: {
              trigger: panel,
              start: "top 80%",
              end: "top 30%",
              scrub: true,
            },
          }
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={section} className="bg-black text-white overflow-hidden">
      {projects.map((p) => (
        <div
          key={p.id}
          className="panel relative min-h-screen flex items-center border-b border-white/10"
        >
          {/* Image */}
          <div className="panel-img absolute inset-0 z-0">
            <img
              src={p.img}
              alt={p.title}
              className="w-full h-full object-cover opacity-30"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 px-10 md:px-32 max-w-7xl">
            <p className="text-red-600 font-mono tracking-widest mb-6">
              {p.id}
            </p>
            <h1 className="text-6xl md:text-9xl font-extrabold leading-none">
              {p.title}
            </h1>
            <p className="mt-6 text-neutral-400 uppercase tracking-[0.3em]">
              {p.tech}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Hero4;
