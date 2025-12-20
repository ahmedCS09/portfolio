import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import smitLogo from '../assets/smitLogo.png'
import aptechLogo from '../assets/aptechLogo.png'
import duet_logo from '../assets/duet_logo.png'
import ciscoLogo from '../assets/ciscoLogo.png'
import laLogo from '../assets/laLogo1.jpg'

gsap.registerPlugin(ScrollTrigger);

const Hero2 = () => {
    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const contentRef = useRef(null);
    const footerRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Heading Animation
            gsap.from(headingRef.current, {
                y: 100,
                opacity: 0,
                duration: 1,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: headingRef.current,
                    start: "top 80%",
                }
            });

            // Content Animation
            gsap.from(contentRef.current.children, {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: contentRef.current,
                    start: "top 85%",
                }
            });

            // Footer Logos Animation
            gsap.from(footerRef.current.children, {
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: "top 90%",
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const Highlight = ({ children }) => <span className="text-red-600 font-bold">{children}</span>;

    return (
        <div ref={sectionRef} className="min-h-screen bg-black text-white flex flex-col px-6 md:px-12 py-20 selection:bg-red-600">
            <aside className="mb-16">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-[1px] bg-red-600"></div>
                    <h2 className="text-[10px] tracking-[0.4em] font-bold text-neutral-500 uppercase">About Me</h2>
                </div>
            </aside>

            <main className="flex-grow flex flex-col justify-center max-w-5xl mx-auto">
                <div className="space-y-8 md:space-y-12">
                    <h1 ref={headingRef} className="text-3xl sm:text-4xl md:text-6xl font-black leading-[1.1] tracking-tighter uppercase">
                        I bridge the gap between <Highlight>complex logic</Highlight> and <span className="text-neutral-600">intuitive design.</span>
                    </h1>
                    <div ref={contentRef} className="text-lg md:text-2xl text-neutral-400 leading-relaxed space-y-6">
                        <p>Currently pursuing my Bachelors degree in Computer Science at <span className="text-white">Dawood University (DUET)</span>, I balance academic rigor with technical training at <span className="text-white">SMIT</span>. My expertise lies in the <Highlight>JavaScript ecosystem</Highlight>, utilizing Node.js for architecture, React.js for Frontend Development, and Tailwind CSS for polished interfaces.</p>
                        <p className="text-neutral-500 text-base md:text-xl">Strengthened by certifications from <Highlight>Cisco, Aptech, and Coursera</Highlight>, I am currently exploring the intersection of web technologies and <Highlight>Machine Learning</Highlight>.</p>
                    </div>
                </div>
            </main>
            
            <footer className="mt-24 w-full overflow-hidden border-y border-white/5 py-10">
                <div ref={footerRef} className="flex flex-wrap justify-center md:justify-between items-center gap-10 grayscale hover:grayscale-0 transition-all duration-500 px-4">
                    <img className='h-8 md:h-10' src={smitLogo} alt="SMIT" />
                    <img className='h-8 md:h-10' src={aptechLogo} alt="Aptech" />
                    <img className='h-12 md:h-14' src={duet_logo} alt="DUET" />
                    <img className='h-12 md:h-14' src={ciscoLogo} alt="Cisco" />
                </div>
            </footer>
        </div>
    );
};

export default Hero2;