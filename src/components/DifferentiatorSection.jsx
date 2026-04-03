import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Users, MessageSquare, AlertTriangle } from 'lucide-react';

export default function DifferentiatorSection() {
    const steps = [
        { icon: <Cpu size={36} className="text-emerald-500" />, title: "1. Watches 24/7", desc: "ESP32 monitors field continuously.", bgColor: "bg-emerald-50" },
        { icon: <MessageSquare size={36} className="text-blue-500" />, title: "2. Ask Questions", desc: "Report issues via WhatsApp or missed call.", bgColor: "bg-blue-50" },
        { icon: <AlertTriangle size={36} className="text-amber-500" />, title: "3. AI Detects", desc: "Spots pests via audio instantly.", bgColor: "bg-amber-50" },
        { icon: <Users size={36} className="text-brand" />, title: "4. Community Alert", desc: "1 detection protects 50 farms.", bgColor: "bg-brand-light/50" }
    ];

    return (
        <section className="py-32 px-4 bg-white relative">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-24"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark mb-6 tracking-tight">How The Community Works</h2>
                    <p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium">
                        Turns one device into protection for the whole <span className="text-brand">village</span>.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: idx * 0.15, type: "spring", stiffness: 100 }}
                            whileHover={{ y: -10, boxShadow: "0 20px 40px -15px rgba(0,0,0,0.1)" }}
                            className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm transition-all duration-300 relative group z-10"
                        >
                            <div className={`w-20 h-20 rounded-3xl ${step.bgColor} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 border border-slate-100/50`}>
                                {step.icon}
                            </div>
                            <h3 className="text-2xl font-extrabold text-dark mb-3 leading-tight">{step.title}</h3>
                            <p className="text-slate-500 text-base leading-relaxed font-medium">{step.desc}</p>
                        </motion.div>
                    ))}
                    {/* Connecting line */}
                    <div className="hidden md:block absolute top-[130px] left-[10%] w-[80%] h-0.5 bg-gradient-to-r from-emerald-100 via-blue-100 to-brand-light -z-0"></div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 40 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="mt-32 bg-slate-900 rounded-[3rem] p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl"
                >
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 text-left">
                        <div className="flex-1">
                            <h3 className="text-3xl md:text-5xl font-extrabold mb-6 text-white tracking-tight">The <span className="text-brand">GroundBit</span> Advantage</h3>
                            <p className="text-xl text-slate-300 max-w-2xl leading-relaxed font-medium">
                                Cross-platform voice reporting paired with AI sensors.
                                <span className="block mt-4 text-white font-bold bg-white/10 px-4 py-2 rounded-xl inline-block border border-white/20 shadow-xl">
                                    1 detection protects 50 farms.
                                </span>
                            </p>
                        </div>
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#signup"
                            className="px-10 py-5 bg-brand text-white font-extrabold text-xl rounded-full shadow-[0_0_50px_rgba(37,211,102,0.4)] whitespace-nowrap self-center md:self-auto"
                        >
                            Join the Network
                        </motion.a>
                    </div>
                    {/* Cinematic lighting inside the card */}
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand/30 rounded-full blur-[100px] pointer-events-none"></div>
                    <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none"></div>
                    <div className="absolute inset-0 bg-grid-pattern-light opacity-10 mix-blend-overlay pointer-events-none"></div>
                </motion.div>
            </div>
        </section>
    );
}
