import React, { useState, useEffect } from 'react';
import { Leaf, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const { t, i18n } = useTranslation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const languages = [
        { code: 'en', label: 'English' },
        { code: 'hi', label: 'Hindi' },
        { code: 'te', label: 'Telugu' },
        { code: 'ta', label: 'Tamil' },
        { code: 'kn', label: 'Kannada' }
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-3 bg-white/80 backdrop-blur-xl border-b border-slate-200/50 shadow-sm' : 'py-5 bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
                <div className="flex items-center gap-2 group cursor-pointer">
                    <div className="bg-brand text-white p-2 rounded-xl shadow-md group-hover:scale-105 transition-transform duration-300 relative">
                        <Leaf size={24} className="relative z-10" />
                        <div className="absolute inset-0 bg-brand rounded-xl blur-md opacity-40 group-hover:opacity-80 transition-opacity"></div>
                    </div>
                    <span className="font-extrabold text-2xl text-dark tracking-tight ml-1">{t('nav.brand', 'GroundBit')}</span>
                </div>
                <div className="flex items-center gap-4 md:gap-6">
                    <div className="relative group">
                        <button className="flex items-center gap-2 text-slate-700 font-medium hover:text-brand transition-colors p-2 rounded-lg" aria-haspopup="true" aria-expanded="false">
                            <Globe size={20} />
                            <span className="hidden sm:inline-block font-sans">{languages.find(l => l.code === i18n.language)?.label || 'English'}</span>
                        </button>
                        <div className="absolute right-0 mt-2 w-48 bg-white border border-slate-200 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 rounded-xl overflow-hidden z-20">
                            {languages.map((lng) => (
                                <button
                                    key={lng.code}
                                    onClick={() => i18n.changeLanguage(lng.code)}
                                    lang={lng.code}
                                    className={`w-full text-left px-4 py-3 hover:bg-slate-50 transition-colors font-${lng.code === 'en' ? 'sans' : lng.code} ${i18n.language === lng.code ? 'text-brand font-bold bg-emerald-50' : 'text-slate-700'}`}
                                >
                                    {lng.label}
                                </button>
                            ))}
                        </div>
                    </div>
                    <a href="#signup" className="btn-primary text-sm md:text-base px-6 py-2.5 inline-block shadow-brand/30 hover:-translate-y-0.5 font-bold tracking-wide">
                        {t('nav.join', 'Get Protected')}
                    </a>
                </div>
            </div>
        </nav>
    );
}
