import React, { useState, useEffect } from 'react';
import { Leaf } from 'lucide-react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-3 bg-white/80 backdrop-blur-xl border-b border-slate-200/50 shadow-sm' : 'py-5 bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
                <div className="flex items-center gap-2 group cursor-pointer">
                    <div className="bg-brand text-white p-2 rounded-xl shadow-md group-hover:scale-105 transition-transform duration-300 relative">
                        <Leaf size={24} className="relative z-10" />
                        <div className="absolute inset-0 bg-brand rounded-xl blur-md opacity-40 group-hover:opacity-80 transition-opacity"></div>
                    </div>
                    <span className="font-extrabold text-2xl text-dark tracking-tight ml-1">GroundBit</span>
                </div>
                <div>
                    <a href="#signup" className="btn-primary text-sm md:text-base px-6 py-2.5 inline-block shadow-brand/30 hover:-translate-y-0.5 font-bold tracking-wide">
                        Get Protected
                    </a>
                </div>
            </div>
        </nav>
    );
}
