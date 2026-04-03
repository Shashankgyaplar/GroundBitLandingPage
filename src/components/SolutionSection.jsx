import React from 'react';
import { motion } from 'framer-motion';

export default function SolutionSection() {
    const steps = [
        { num: 1, title: "24/7 Field Monitoring", desc: "IoT device tracks soil and weather.", color: "bg-emerald-500", shadow: "shadow-emerald-500/30" },
        { num: 2, title: "Simple Voice Interaction", desc: "Use WhatsApp voice notes or missed calls.", color: "bg-brand", shadow: "shadow-brand/30" },
        { num: 3, title: "Instant AI Reply", desc: "Answers back in <10s in your language.", color: "bg-blue-500", shadow: "shadow-blue-500/30" },
        { num: 4, title: "Community Risk Alerts", desc: "Voice alerts sent to nearby farmers.", color: "bg-dark", shadow: "shadow-dark/30" }
    ];

    return (
        <section className="py-32 px-4 bg-white overflow-hidden relative">
            <div className="max-w-4xl mx-auto relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark mb-20 text-center tracking-tight"
                >
                    How It Works
                </motion.h2>

                <div className="space-y-16 relative">
                    <div className="absolute top-10 bottom-10 left-8 md:left-10 w-1 bg-gradient-to-b from-brand-light via-emerald-200 to-slate-200 rounded-full -z-10 hidden md:block"></div>

                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: i * 0.15, type: "spring" }}
                            className="flex flex-col md:flex-row items-center md:items-start gap-8 group"
                        >
                            <div className={`w-20 h-20 shrink-0 rounded-[2rem] ${step.color} text-white flex items-center justify-center text-3xl font-extrabold shadow-xl ${step.shadow} group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 z-10`}>
                                {step.num}
                            </div>
                            <div className="flex-1 text-center md:text-left pt-2">
                                <h3 className="text-2xl md:text-3xl font-extrabold text-dark mb-4 leading-tight group-hover:text-brand transition-colors">{step.title}</h3>
                                <p className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed">{step.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
