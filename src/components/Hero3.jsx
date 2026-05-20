import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero3 = () => {
    const sectionRef = useRef(null);
    const gridRef = useRef(null);

    useEffect(() => {
        const cards = gridRef.current.querySelectorAll('.bento-card');

        gsap.fromTo(cards,
            { opacity: 0, y: 50, scale: 0.95 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                stagger: 0.15,
                ease: "expo.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                }
            }
        );
    }, []);

    return (
        <section ref={sectionRef} id="expertise" className="bg-black text-white py-24 px-[4vw] border-t border-white/5 selection:bg-red-600">
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-12">

                {/* Sidebar Header */}
                <aside className="lg:sticky lg:top-24 h-fit">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-[1px] bg-red-600"></div>
                        <h2 className="text-xs tracking-[0.4em] font-bold text-red-600 uppercase">My Skills</h2>
                    </div>
                    <h3 className="text-4xl md:text-5xl font-black leading-none uppercase tracking-tighter">
                        Technical <br /> <span className="text-neutral-600">Arsenal</span>
                    </h3>
                </aside>

                {/* Bento Grid */}
                <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 auto-rows-[220px] gap-4">

                    {/* Fullstack - Large Card */}
                    <div className="bento-card md:col-span-2 md:row-span-2 bg-[#111] border border-white/5 rounded-[32px] p-8 flex flex-col justify-between group hover:border-red-600/50 transition-all duration-500 relative overflow-hidden">
                        <div className="absolute -right-10 -top-10 w-40 h-40 bg-red-600/10 blur-[80px] group-hover:bg-red-600/20 transition-all"></div>
                        <div>
                            <span className="text-[10px] tracking-[0.3em] text-neutral-500 uppercase font-bold">Database & Logic</span>
                            <h4 className="text-4xl md:text-6xl font-black uppercase leading-none mt-2 tracking-tighter">Fullstack <br /> Systems</h4>
                        </div>
                        {/* Added MongoDB and MySQL explicitly here */}
                        <div className="flex flex-wrap gap-2 z-10">
                            {['React.js', 'Next.js', 'Node.js', 'Express', 'React Native', 'MongoDB', 'MySQL', 'Zustand', 'TanStack'].map(tag => (
                                <span key={tag} className={`px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-medium transition-colors ${tag === 'MongoDB' || tag === 'MySQL' ? 'text-red-500 border-red-900/30' : 'text-neutral-400 group-hover:text-white'}`}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Engineering - Tall Card */}
                    <div className="bento-card md:row-span-2 bg-[#111] border-l-4 border-l-red-600 border border-white/5 rounded-[32px] p-8 flex flex-col justify-between group">
                        <div>
                            <span className="text-[10px] tracking-[0.3em] text-neutral-500 uppercase font-bold">Core</span>
                            <h4 className="text-4xl font-black uppercase leading-none mt-2 tracking-tighter">Software <br /> Engineering</h4>
                        </div>
                        <div className="flex flex-col gap-3">
                            {/* Included MySQL in the core engineering list */}
                            {['C++', 'Java', 'Python', 'MySQL', 'DSA'].map(tag => (
                                <div key={tag} className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-600"></div>
                                    <span className="text-sm font-bold uppercase tracking-widest text-neutral-400 group-hover:text-white">{tag}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Design Card */}
                    <div className="bento-card bg-[#111] border border-white/5 rounded-[32px] p-8 flex flex-col justify-between hover:bg-[#161616] transition-colors group">
                        <h4 className="text-2xl font-black uppercase tracking-tighter">UI/UX Design</h4>
                        <div className="flex gap-2">
                            <span className="text-[10px] px-3 py-1 border border-neutral-700 rounded-md text-neutral-500 group-hover:border-red-600 group-hover:text-red-600 transition-all uppercase font-bold">Figma</span>
                            <span className="text-[10px] px-3 py-1 border border-neutral-700 rounded-md text-neutral-500 uppercase font-bold">Prototyping</span>
                        </div>
                    </div>

                    {/* AI/ML Card */}
                    {/* AI/ML & Computer Vision Card */}
                    <div className="bento-card bg-[#111] border border-white/5 rounded-[32px] p-8 flex flex-col justify-between relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 to-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div>
                            <span className="text-[10px] tracking-[0.3em] text-neutral-500 uppercase font-bold">Intelligence</span>
                            <h4 className="text-2xl font-black uppercase tracking-tighter mt-2">
                                ML & <br /> Computer Vision
                            </h4>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></div>
                            <span className="text-[10px] font-mono text-red-600 font-bold uppercase tracking-widest">
                                Ongoing Research & Development
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero3;