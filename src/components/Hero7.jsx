import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const educationData = [
  {
    period: "2023 — Present",
    institution: "Dawood University of Engineering & Technology",
    degree: "Bachelors in Computer Science (3rd Year)",
    details: "Focusing on core engineering principles, system architecture, and advanced computing.",
    metric: "3.13 CGPA",
    courses: ["Data Structures", "Database Systems", "Operating Systems", "COAL", "Artificial Intelligence"]
  },
  {
    period: "2021 — 2023",
    institution: "Govt Degree College Malir Cantt",
    degree: "Intermediate in Pre-Engineering",
    details: "Focused on advanced Mathematics, Physics, and analytical problem solving.",
    metric: "Grade A-1",
    courses: []
  },
  {
    period: "2019 — 2021",
    institution: "Greenland Grammar School",
    degree: "Matriculation (Science)",
    details: "Foundational secondary education with a distinction in science subjects.",
    metric: "91.3% Score",
    courses: []
  }
];

const Hero7 = () => {
  const componentRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animate education cards
      gsap.from(".edu-card", {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 1.2,
        ease: "power4.out",
        immediateRender: false, // prevents hiding before layout
        scrollTrigger: {
          trigger: componentRef.current,
          start: "top 85%",
          toggleActions: "play none none none", // play only once
        },
      });
    }, componentRef);

    // Refresh ScrollTrigger positions in case page is refreshed mid-scroll
    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  return (
    <section ref={componentRef} className="bg-black text-white py-32 px-6 md:px-[4vw]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-16 h-[1px] bg-red-600"></div>
            <span className="text-red-600 font-mono tracking-[0.5em] text-xs uppercase font-bold">My Education</span>
          </div>
          <h2 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-none">
            Learning <br /> History
          </h2>
        </div>

        {/* Education Rows */}
        <div className="flex flex-col">
          {educationData.map((edu, index) => (
            <div 
              key={index} 
              className="edu-card group relative grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr] py-16 border-t border-white/10 hover:bg-white/[0.01] transition-all duration-500"
            >
              {/* Year/Period */}
              <div className="text-neutral-600 font-mono text-lg mb-4 lg:mb-0 group-hover:text-red-600 transition-colors">
                {edu.period}
              </div>

              {/* Institution & Degree */}
              <div className="pr-8">
                <h3 className="text-3xl md:text-5xl font-bold uppercase mb-3 tracking-tighter group-hover:pl-4 transition-all duration-500 italic group-hover:not-italic">
                  {edu.institution}
                </h3>
                <p className="text-neutral-400 text-lg mb-6 leading-relaxed">
                   <span className="text-white font-bold">{edu.degree}</span>. {edu.details}
                </p>

                {/* Coursework Tags */}
                {edu.courses.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course, i) => (
                      <span 
                        key={i} 
                        className="px-4 py-1.5 border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-neutral-500 font-bold group-hover:border-red-600 group-hover:text-white transition-all"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Key Metric (CGPA / Percentage) */}
              <div className="mt-8 lg:mt-0 lg:text-right flex flex-col justify-start">
                 <span className="text-4xl md:text-6xl font-black text-red-600 tracking-tighter leading-none">
                    {edu.metric.split(' ')[0]}
                 </span>
                 <span className="text-xs uppercase tracking-widest text-neutral-500 font-bold mt-2">
                    {edu.metric.split(' ')[1]}
                 </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero7;
