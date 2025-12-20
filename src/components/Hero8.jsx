import { useRef, useLayoutEffect } from 'react';
import emailjs from '@emailjs/browser';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero8 = () => {
    const sectionRef = useRef(null);
    const leftColRef = useRef(null);
    const rightColRef = useRef(null);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_mrdyr86', 'template_24ri2vp', form.current, 'ODAFhkavrt3H-V4rW')
            .then(() => { alert('Message Sent!'); form.current.reset(); })
            .catch(err => alert('Error sending message.'));
    }

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from([leftColRef.current, rightColRef.current], {
                y: 30,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={sectionRef} className='min-h-screen w-full flex justify-center items-center bg-black p-4 md:p-10 selection:bg-red-600'>
            <div className='w-full max-w-[1400px] bg-[#111] rounded-[40px] flex flex-col md:flex-row overflow-hidden shadow-2xl border border-white/5'>
                <div ref={leftColRef} className='w-full md:w-1/2 p-10 md:p-20 flex flex-col justify-between bg-[#1a1a1a]'>
                    <div>
                        <div className="w-10 h-[1px] bg-red-600 mb-6"></div>
                        <h2 className='text-red-600 font-bold tracking-[0.3em] text-xs uppercase mb-4'>Contact</h2>
                        <h1 className='text-5xl md:text-8xl font-black text-white uppercase leading-[0.85] tracking-tighter'>Let's build <br /> <span className='text-neutral-700'>together</span></h1>
                    </div>
                    <div className="mt-12 flex flex-col gap-8">
                        <div>
                            <h3 className="text-[10px] font-bold tracking-[0.2em] text-neutral-500 mb-2 uppercase">Mail To</h3>
                            <a href="mailto:musabahmed305@gmail.com" className="text-white font-bold text-lg underline underline-offset-8 decoration-red-600">musabahmed305@gmail.com</a>
                        </div>
                        <div>
                            <h3 className="text-[10px] font-bold tracking-[0.2em] text-neutral-500 mb-2 uppercase">Location</h3>
                            <p className="text-white font-bold text-lg">Karachi, Pakistan</p>
                        </div>
                    </div>
                </div>

                <div className='w-full md:w-1/2 p-10 md:p-20 bg-[#111]'>
                    <form ref={el => { form.current = el; rightColRef.current = el; }} onSubmit={sendEmail} className='flex flex-col gap-10'>
                        <div className='group flex flex-col gap-2'>
                            <label className='text-[10px] text-neutral-500 font-bold tracking-widest'>NAME</label>
                            <input name="name" type="text" required placeholder="Full Name" className='bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-red-600 transition-colors' />
                        </div>
                        <div className='group flex flex-col gap-2'>
                            <label className='text-[10px] text-neutral-500 font-bold tracking-widest'>EMAIL</label>
                            <input name="email" type="email" required placeholder="Email Address" className='bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-red-600 transition-colors' />
                        </div>
                        <div className='group flex flex-col gap-2'>
                            <label className='text-[10px] text-neutral-500 font-bold tracking-widest'>MESSAGE</label>
                            <textarea name="message" required rows="3" placeholder="Project details..." className='bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-red-600 transition-colors resize-none'></textarea>
                        </div>
                        <button type="submit" className='self-start px-12 py-5 bg-white text-black font-black uppercase text-xs tracking-widest rounded-full hover:bg-red-600 hover:text-white transition-all'>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Hero8;