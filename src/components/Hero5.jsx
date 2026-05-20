import React from "react";

const experienceData = [
  {
    period: "Nov, 2023 — May, 2026",
    role: "ML Engineer",
    company: "LA Consulting Corporation",
    description: [
      "Worked on developing machine learning models to solve real-world problems.",
      "Learned core machine learning concepts, model development, and real-world problem solving.",
      "Gained hands-on experience in data preprocessing, model evaluation, and ML workflows.",
      "Collaborated with team members to strengthen technical and analytical skills."
    ],
    tags: ["Machine Learning", "Data Preprocessing", "Model Evaluation", "Team Collaboration"]
  },
  {
    period: "May, 2026 - Present",
    role: "React Native Developer",
    company: "Foxit Private Limited",
    description: [
      "Currently working on developing Android mobile applications using React Native.",
      "Collaborating with a team of developers to build and maintain high-quality mobile applications.",
      "Working on enhancing the user interface and user experience of the application.",
      "Participating in code reviews and providing constructive feedback to team members."
    ],
    tags: ["React Native", "Cross Platform Development", "Mobile Applications", "Team Collaboration"]
  }
];

const Hero5 = () => {
  return (
    <section className="bg-black text-white py-32 px-6 md:px-[4vw]">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-16 h-[1px] bg-red-600"></div>
            <span className="text-red-600 font-mono tracking-[0.5em] text-xs uppercase font-bold">
              MY Experience
            </span>
          </div>
          <h2 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-none">
            Work <br /> Journey
          </h2>
        </div>

        {/* Experience Cards */}
        <div className="flex flex-col">
          {experienceData.map((exp, index) => (
            <div
              key={index}
              className="group relative grid grid-cols-1 lg:grid-cols-[1fr_2fr] py-16 border-t border-white/10 hover:bg-white/[0.01] transition-all duration-500"
            >
              {/* Period */}
              <div className="text-neutral-600 font-mono text-lg mb-6 lg:mb-0 group-hover:text-red-600 transition-colors">
                {exp.period}
              </div>

              {/* Content */}
              <div className="pr-8">
                <h3 className="text-3xl md:text-5xl font-bold uppercase mb-2 tracking-tighter">
                  {exp.role}
                </h3>
                <p className="text-red-600 font-bold mb-6 uppercase tracking-widest text-sm">
                  {exp.company}
                </p>

                <ul className="space-y-3 text-neutral-400 text-lg leading-relaxed">
                  {exp.description.map((point, i) => (
                    <li key={i}>• {point}</li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-8">
                  {exp.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-4 py-1.5 border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-neutral-500 font-bold group-hover:border-red-600 group-hover:text-white transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Hero5