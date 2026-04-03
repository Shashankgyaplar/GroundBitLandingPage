import React from 'react';
import { Leaf } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-white py-16 px-4 border-t border-slate-100 relative overflow-hidden">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left relative z-10">
                <div className="flex items-center gap-2 group cursor-pointer">
                    <div className="bg-brand text-white p-2.5 rounded-xl shadow-md group-hover:scale-105 transition-transform duration-300 relative">
                        <Leaf size={24} className="relative z-10" />
                        <div className="absolute inset-0 bg-brand rounded-xl blur-md opacity-40 group-hover:opacity-80 transition-opacity"></div>
                    </div>
                    <span className="font-extrabold text-2xl text-dark tracking-tight ml-1">GroundBit</span>
                </div>

                <div className="text-slate-600 font-bold tracking-wide flex items-center gap-2 bg-slate-50 border border-slate-200 px-6 py-3 rounded-full text-sm shadow-sm hover:shadow-md transition-shadow">
                    Built for Indian Farmers <span className="text-xl leading-none ml-1 relative -top-[1px]">🇮🇳</span>
                </div>

                <div className="text-slate-500 font-medium">
                    <a href="mailto:hello@groundbit.com" className="hover:text-brand transition-colors mx-4 hover:underline underline-offset-4">Contact Us</a>
                    <a href="#signup" className="hover:text-brand transition-colors mx-4 hover:underline underline-offset-4">Join Network</a>
                </div>
            </div>
            <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-full max-w-4xl h-[200px] bg-brand/5 blur-[80px] rounded-full pointer-events-none"></div>
        </footer>
    );
}
