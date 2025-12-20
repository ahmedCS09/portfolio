import React, { useState, useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ciscoCert from '../assets/cisco.png';
import courseraCert from '../assets/coursera.jpg';
import aptechCert from '../assets/aptech.jpg';
import cisco from '../assets/cisco1.jpg';
import coursera from '../assets/coursera1.png';
import aptech from '../assets/aptech1.jpg';

gsap.registerPlugin(ScrollTrigger);

const Hero5 = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const containerRef = useRef(null);
    const gridRef = useRef(null);

    const certDisplay = [
        { url: ciscoCert },
        { url: courseraCert },
        { url: aptechCert }
    ];
    const cert = [
        { url: cisco },
        { url: coursera },
        { url: aptech }
    ];

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(gridRef.current, {
                y: 50,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: gridRef.current,
                    start: "top 85%",
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className='parentMost min-h-screen w-full flex flex-col justify-center gap-10 items-center bg-black py-20 px-6'>
            {/* Sidebar-style Header */}
            <aside className="w-[90%] self-center flex items-center gap-3">
                <div className="w-8 h-[1px] bg-red-600"></div>
                <h2 className="text-xs tracking-[0.4em] font-bold text-red-600 uppercase">My Certifications</h2>
            </aside>

            {/* Grid Container */}
            <div
                ref={gridRef}
                className='relative w-[90%] grid grid-cols-1 sm:grid-cols-3 h-[60vh] rounded-3xl overflow-hidden border border-white/10'
                onMouseLeave={() => setHoveredIndex(null)}
            >
                {cert.map((certificate, index) => (
                    <div
                        key={index}
                        className="relative h-full w-full overflow-hidden group border-r border-white/5 last:border-r-0 cursor-crosshair"
                        onMouseEnter={() => setHoveredIndex(index)}
                    >
                        {/* Layer 1: Thumbnail Image */}
                        <img
                            className='absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 grayscale group-hover:grayscale-0'
                            src={certificate.url}
                            alt="Certificate Thumbnail"
                        />

                        {/* Layer 2: Detail Overlay (on top of thumbnail) */}
                        <div className="absolute inset-0 bg-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <img
                            className='absolute inset-0 h-full w-full object-cover opacity-0 transition-all duration-700 ease-in-out group-hover:opacity-100 group-hover:scale-105'
                            src={certDisplay[index].url}
                            alt="Certificate Detail"
                        />

                        {/* Visual indicator for "Zoom" */}
                        <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <span className="text-[10px] tracking-widest uppercase font-bold text-white bg-black/50 px-3 py-1 rounded-full border border-white/20">View Large</span>
                        </div>
                    </div>
                ))}

                {/* Layer 3: Expanding Full-Screen Overlay */}
                <div
                    className={`absolute inset-0 flex justify-center items-center bg-black/95 z-50 pointer-events-none transition-all duration-500 ease-in-out ${hoveredIndex !== null ? 'opacity-100 backdrop-blur-xl' : 'opacity-0'}`}
                >
                    {hoveredIndex !== null && (
                        <div className="relative w-full h-full flex items-center justify-center p-10">
                            <img
                                src={certDisplay[hoveredIndex].url}
                                className="max-h-full max-w-full object-contain shadow-2xl transition-transform duration-500 scale-95"
                                style={{ transform: hoveredIndex !== null ? 'scale(1)' : 'scale(0.9)' }}
                                alt="Expanded Certificate"
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Hero5;