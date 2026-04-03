import React from 'react';
import { motion } from 'framer-motion';
import { Phone, ShieldCheck, Mic, Smartphone } from 'lucide-react';

export default function Hero() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
    };

    return (
        <section className="relative pt-32 pb-20 px-4 md:pt-44 md:pb-32 overflow-hidden bg-pattern border-b border-slate-100/50">
            <motion.div
                className="max-w-5xl mx-auto text-center z-10 relative"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-brand-dark px-4 py-2 rounded-full font-bold text-sm mb-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow cursor-default">
                    <span className="relative flex h-2.5 w-2.5 mr-1 pt-0.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand"></span>
                    </span>
                    Built for Indian Farmers 🇮🇳
                </motion.div>

                <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-dark mb-6 leading-[1.15]">
                    Smart Farming Advice on<br className="hidden md:block" />
                    <span className="gradient-text ml-1 md:ml-3">Any Phone</span>
                </motion.h1>

                <motion.p variants={itemVariants} className="text-lg md:text-2xl text-slate-500 font-medium mb-10 max-w-3xl mx-auto leading-relaxed">
                    Get voice-based crop advice in your language in under 10 seconds. No app, no reading required.
                </motion.p>

                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
                    <motion.a
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        href="#signup"
                        className="group relative overflow-hidden btn-primary flex items-center justify-center gap-2 text-lg shadow-[0_0_40px_rgba(37,211,102,0.3)] px-10 py-4 font-bold tracking-wide"
                    >
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                        <Phone size={22} className="group-hover:rotate-12 transition-transform relative z-10" />
                        <span className="relative z-10">Start with Your Phone Number</span>
                    </motion.a>
                </motion.div>

                <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto mt-6">
                    {[
                        { icon: <Smartphone className="text-brand" size={28} />, text: "No App Needed" },
                        { icon: <Phone className="text-brand" size={28} />, text: "Works on Any Phone" },
                        { icon: <Mic className="text-brand" size={28} />, text: "Voice-Based" },
                        { icon: <ShieldCheck className="text-brand" size={28} />, text: "24/7 Monitoring" },
                    ].map((feature, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="glass-card bg-white/90 p-6 flex flex-col items-center text-center gap-4 hover:shadow-[0_15px_30px_rgba(0,0,0,0.05)] transition-all duration-300 border-white"
                        >
                            <div className="bg-emerald-50 p-4 rounded-2xl shadow-sm">
                                {feature.icon}
                            </div>
                            <span className="font-extrabold text-slate-700 text-sm md:text-base tracking-tight">{feature.text}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

            {/* Decorative blurred blobs */}
            <motion.div
                animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-20 left-0 md:left-[10%] w-80 h-80 bg-brand/10 rounded-full blur-[100px] -z-10 mix-blend-multiply"
            />
            <motion.div
                animate={{ scale: [1, 1.2, 1], rotate: [0, -90, 0] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute top-40 right-0 md:right-[10%] w-96 h-96 bg-emerald-400/15 rounded-full blur-[100px] -z-10 mix-blend-multiply"
            />
            <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-[#fbfbfb] to-transparent z-0"></div>
        </section>
    );
}
